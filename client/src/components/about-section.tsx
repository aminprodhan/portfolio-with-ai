import React, { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const AboutSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section 
      id="about" 
      ref={ref} 
      className="py-16 md:py-24 bg-dark-DEFAULT text-light-DEFAULT px-4"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="md:w-2/5">
            <div className="rounded-lg overflow-hidden shadow-xl bg-dark-lighter p-2">
              <img 
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="John at work" 
                className="w-full h-auto rounded"
              />
            </div>
          </div>
          
          <div className="md:w-3/5">
            <h3 className="text-2xl font-display font-semibold mb-6">Who I Am</h3>
            <p className="text-light-darker leading-relaxed mb-6">
              I'm a software engineer with 6 years of professional experience developing applications that solve real-world problems. 
              My journey in technology began with a fascination for creating things that impact people's lives.
            </p>
            <p className="text-light-darker leading-relaxed mb-6">
              I've worked across various domains including fintech, e-commerce, and healthcare, building everything from 
              responsive web applications to scalable backend services. I thrive in collaborative environments and enjoy the 
              challenge of tackling complex problems with elegant solutions.
            </p>
            <p className="text-light-darker leading-relaxed mb-8">
              When I'm not coding, you'll find me hiking, reading about emerging tech trends, or contributing to open-source projects.
              I believe in continuous learning and staying ahead of the technology curve.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <p className="mb-2"><span className="text-primary font-semibold">Name:</span> John Doe</p>
                <p className="mb-2"><span className="text-primary font-semibold">Email:</span> john@example.com</p>
                <p><span className="text-primary font-semibold">Location:</span> San Francisco, CA</p>
              </div>
              <div>
                <p className="mb-2"><span className="text-primary font-semibold">Experience:</span> 6+ Years</p>
                <p className="mb-2"><span className="text-primary font-semibold">Availability:</span> Full-time</p>
                <p><span className="text-primary font-semibold">Remote:</span> Available</p>
              </div>
            </div>
            
            <Button className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-md transition duration-300 shadow-md hover:shadow-lg">
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
