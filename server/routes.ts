import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store the message
      const contactMessage = await storage.createContactMessage(validatedData);
      
      // Send email using nodemailer
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER || 'your-email@gmail.com',
          pass: process.env.EMAIL_PASS || 'your-app-password'
        }
      });

      const mailOptions = {
        from: validatedData.email,
        to: 'elisaalvarez211@gmail.com',
        subject: `Portfolio Contact: ${validatedData.subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #00D9FF;">New Contact Form Submission</h2>
            
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">Contact Details</h3>
              <p><strong>Name:</strong> ${validatedData.name}</p>
              <p><strong>Email:</strong> ${validatedData.email}</p>
              <p><strong>Subject:</strong> ${validatedData.subject}</p>
            </div>
            
            <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">Message</h3>
              <p style="white-space: pre-wrap; line-height: 1.6;">${validatedData.message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
              <p style="color: #666; font-size: 14px;">
                This message was sent from your portfolio contact form.
              </p>
            </div>
          </div>
        `
      };

      await transporter.sendMail(mailOptions);
      
      res.json({ 
        success: true, 
        message: "Message sent successfully!",
        id: contactMessage.id 
      });
      
    } catch (error) {
      console.error('Contact form error:', error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message. Please try again." 
        });
      }
    }
  });

  // Get contact messages (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error('Get messages error:', error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve messages" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
