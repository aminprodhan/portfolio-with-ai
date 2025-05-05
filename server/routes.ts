import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const contactData = insertContactSchema.parse(req.body);
      
      // Store the contact message
      const savedMessage = await storage.createContactMessage(contactData);
      
      // Return success response
      return res.status(201).json({ 
        message: "Contact message received successfully", 
        id: savedMessage.id 
      });
    } catch (error) {
      console.error("Error handling contact form submission:", error);
      
      if (error.name === "ZodError") {
        return res.status(400).json({ 
          message: "Invalid input data", 
          errors: error.errors 
        });
      }
      
      return res.status(500).json({ 
        message: "An error occurred while processing your request" 
      });
    }
  });

  // Get all contact messages (for internal use)
  app.get("/api/contact", async (req: Request, res: Response) => {
    try {
      const messages = await storage.getContactMessages();
      return res.status(200).json(messages);
    } catch (error) {
      console.error("Error retrieving contact messages:", error);
      return res.status(500).json({ 
        message: "An error occurred while retrieving contact messages" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
