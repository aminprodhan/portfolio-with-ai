// This file is used by Vercel to expose our Express API as serverless functions
import express from 'express';
import { storage } from '../server/storage.js';
import { insertContactSchema } from '../shared/schema.js';

const app = express();
app.use(express.json());

// Contact form submission endpoint
app.post("/api/contact", async (req, res) => {
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
app.get("/api/contact", async (req, res) => {
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

export default app;