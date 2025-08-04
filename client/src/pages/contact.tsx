import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "../schema";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useToast } from "../hooks/use-toast";
import { apiRequest } from "../lib/queryClient";
import { ContactCanvas } from "../components/three-animations";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import type { InsertContactMessage } from "../schema";

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "elisaalvarez211@gmail.com",
      color: "var(--neon-blue)"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/developer-elisa",
      color: "var(--neon-purple)"
    },
    {
      icon: Github,
      label: "GitHub", 
      value: "/Elisa-Alvarez",
      color: "var(--neon-green)"
    }
  ];

  return (
    <section className="py-20 px-6 mt-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can work together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-[var(--neon-blue)]">Let's Connect</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div
                        className="w-12 h-12 bg-opacity-20 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${info.color}33` }}
                      >
                        <IconComponent 
                          className="w-6 h-6"
                          style={{ color: info.color }}
                        />
                      </div>
                      <div>
                        <p className="text-gray-300 text-sm">{info.label}</p>
                        <p className="text-white font-semibold">{info.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3D Animation Container */}
            <div className="canvas-container h-64 rounded-2xl glass-effect">
              <ContactCanvas />
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-[var(--neon-purple)]">Send Message</h3>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <Input
                    {...form.register("name")}
                    placeholder="Your Name"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[var(--neon-blue)] focus:ring-[var(--neon-blue)]"
                  />
                  {form.formState.errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <Input
                    {...form.register("email")}
                    type="email"
                    placeholder="your@email.com"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[var(--neon-blue)] focus:ring-[var(--neon-blue)]"
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <Input
                  {...form.register("subject")}
                  placeholder="Project Discussion"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[var(--neon-blue)] focus:ring-[var(--neon-blue)]"
                />
                {form.formState.errors.subject && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.subject.message}
                  </p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  {...form.register("message")}
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[var(--neon-blue)] focus:ring-[var(--neon-blue)] resize-vertical"
                />
                {form.formState.errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>
              
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-[var(--neon-blue)] text-gray-900 py-4 font-semibold hover:bg-opacity-80 transition-all duration-300"
              >
                {contactMutation.isPending ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
