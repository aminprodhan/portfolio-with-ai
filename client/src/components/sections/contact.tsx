import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { FaEnvelope, FaMapMarkerAlt, FaGlobe, FaGithub, FaLinkedinIn, FaTwitter, FaDev } from "react-icons/fa";

// Form schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function Contact() {
  const { toast } = useToast();
  
  // Define contact form with react-hook-form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Handle form submission with react-query
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: ContactFormValues) {
    mutate(data);
  }

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-slate-700 dark:text-slate-300 max-w-lg mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Subject" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message" 
                          rows={5} 
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="md:w-1/2">
            <Card className="h-full">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4 flex items-center justify-center">
                      <FaEnvelope className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <a href="mailto:contact@alamin.dev" className="text-primary hover:underline">contact@alamin.dev</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4 flex items-center justify-center">
                      <FaMapMarkerAlt className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-slate-700 dark:text-slate-300">Chittagong, Bangladesh</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4 flex items-center justify-center">
                      <FaGlobe className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Website</h4>
                      <a href="https://alamin.dev" className="text-primary hover:underline">alamin.dev</a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h4 className="font-medium mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="bg-slate-200 dark:bg-slate-700 p-3 rounded-full hover:bg-primary hover:text-white transition-colors">
                      <FaGithub />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="bg-slate-200 dark:bg-slate-700 p-3 rounded-full hover:bg-primary hover:text-white transition-colors">
                      <FaLinkedinIn />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="bg-slate-200 dark:bg-slate-700 p-3 rounded-full hover:bg-primary hover:text-white transition-colors">
                      <FaTwitter />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="bg-slate-200 dark:bg-slate-700 p-3 rounded-full hover:bg-primary hover:text-white transition-colors">
                      <FaDev />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
