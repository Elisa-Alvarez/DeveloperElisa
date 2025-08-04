# Portfolio Website

## Overview

A modern full-stack portfolio website built with React, Node.js, and Express. The application features an immersive 3D animated interface using Three.js, showcasing projects, skills, and providing a contact form with email functionality. The frontend uses shadcn/ui components with a dark cyberpunk aesthetic, while the backend handles contact form submissions and email notifications.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **3D Graphics**: Three.js with React Three Fiber for interactive 3D animations
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe forms

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Request Handling**: Express middleware for JSON parsing, URL encoding, and request logging
- **Error Handling**: Centralized error handling middleware
- **Development**: Hot reload with Vite development server integration

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Fallback Storage**: In-memory storage implementation for development/testing
- **Data Validation**: Zod schemas for runtime type checking and validation

### Email System
- **Email Service**: Nodemailer with Gmail SMTP configuration
- **Contact Form**: Validated form submissions stored in database and forwarded via email
- **Email Templates**: HTML-formatted emails with contact details and messages

### Authentication & Security
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Environment Variables**: Secure configuration for database URLs and email credentials
- **Input Validation**: Zod schemas for all user inputs and API endpoints

### Build & Deployment
- **Build Tool**: Vite for frontend bundling with React plugin
- **Server Bundling**: esbuild for backend bundling in production
- **Static Assets**: Vite handles static asset optimization and serving
- **Development Environment**: Replit-optimized with cartographer plugin for enhanced debugging

## External Dependencies

### Core Framework Dependencies
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight routing library for React
- **react-hook-form**: Form state management and validation
- **@hookform/resolvers**: Zod integration for form validation

### UI & Styling Dependencies
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx**: Conditional className utility
- **lucide-react**: Icon library

### Database & Validation
- **drizzle-orm**: Type-safe ORM for PostgreSQL
- **@neondatabase/serverless**: Neon database driver
- **zod**: Runtime type validation and schema definition
- **drizzle-zod**: Zod integration for Drizzle schemas

### Email & Communication
- **nodemailer**: Email sending functionality
- **connect-pg-simple**: PostgreSQL session store

### Development & Build Tools
- **vite**: Frontend build tool and development server
- **@vitejs/plugin-react**: React support for Vite
- **esbuild**: Fast JavaScript bundler for backend
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Enhanced debugging for Replit

### 3D Graphics & Animation
- **three**: 3D graphics library
- **@react-three/fiber**: React renderer for Three.js
- **@react-three/drei**: Helper components for React Three Fiber

### Utility Libraries
- **date-fns**: Date manipulation and formatting
- **embla-carousel-react**: Carousel component functionality
- **cmdk**: Command palette component