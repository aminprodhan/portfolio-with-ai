import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-300 mb-4 md:mb-0">
            <p>© {new Date().getFullYear()} Al Amin Prodhan. All rights reserved.</p>
          </div>
          
          <div>
            <a 
              href="#home" 
              className="text-primary hover:text-blue-400 transition-colors flex items-center gap-2"
            >
              <ArrowUp className="h-4 w-4" /> Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
