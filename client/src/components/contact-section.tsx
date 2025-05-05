import React, { forwardRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  FaLinkedinIn, 
  FaGithub, 
  FaTwitter, 
  FaMediumM, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaPaperPlane
} from "react-icons/fa";

const ContactSection = forwardRef<HTMLElement>((props, ref) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would send the data to an API
      // For now, let's simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success",
        description: "Your message has been sent successfully!",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section 
      id="contact" 
      ref={ref} 
      className="py-16 md:py-24 px-4 bg-dark-DEFAULT text-light-DEFAULT"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-light-darker mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-2/5">
            <div className="bg-dark-lighter rounded-lg p-8">
              <h3 className="font-display font-semibold text-2xl mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary bg-opacity-20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <FaEnvelope className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-light-darker">
                      <a href="mailto:john@example.com" className="hover:text-primary transition-colors">
                        john@example.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary bg-opacity-20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <FaMapMarkerAlt className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-light-darker">San Francisco, California, USA</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary bg-opacity-20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <FaCalendarAlt className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Availability</h4>
                    <p className="text-light-darker">Mon-Fri: 9am - 6pm PST</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-semibold mb-4">Connect on Social Media</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-dark-darker text-white flex items-center justify-center hover:bg-primary transition-colors duration-300" 
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-dark-darker text-white flex items-center justify-center hover:bg-primary transition-colors duration-300" 
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-dark-darker text-white flex items-center justify-center hover:bg-primary transition-colors duration-300" 
                    aria-label="Twitter"
                  >
                    <FaTwitter />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-dark-darker text-white flex items-center justify-center hover:bg-primary transition-colors duration-300" 
                    aria-label="Medium"
                  >
                    <FaMediumM />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-3/5">
            <div className="bg-dark-lighter rounded-lg p-8">
              <h3 className="font-display font-semibold text-2xl mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium mb-2">Name</Label>
                    <Input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-dark-DEFAULT border border-dark-lighter rounded-md py-3 px-4 text-light-DEFAULT placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium mb-2">Email</Label>
                    <Input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      className="w-full bg-dark-DEFAULT border border-dark-lighter rounded-md py-3 px-4 text-light-DEFAULT placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-sm font-medium mb-2">Subject</Label>
                  <Input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject of your message"
                    className="w-full bg-dark-DEFAULT border border-dark-lighter rounded-md py-3 px-4 text-light-DEFAULT placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium mb-2">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    rows={5} 
                    placeholder="Your message"
                    className="w-full bg-dark-DEFAULT border border-dark-lighter rounded-md py-3 px-4 text-light-DEFAULT placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    required
                  />
                </div>
                
                <div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-md transition duration-300 flex items-center justify-center"
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    <FaPaperPlane className="ml-2" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";

export default ContactSection;
