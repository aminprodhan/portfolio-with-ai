import { cn } from "@/lib/utils";

interface CodeSnippetProps {
  className?: string;
}

export function CodeSnippet({ className }: CodeSnippetProps) {
  return (
    <div className={cn(
      "relative font-mono text-sm text-slate-300 bg-black/70 p-6 rounded-lg overflow-hidden shadow-xl",
      className
    )}>
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-[#10B981]"></div>
      
      <div className="text-blue-400">const</div> aboutMe = {"{"} 
      <div className="pl-4"><span className="text-green-400">name</span>: <span className="text-yellow-300">'Al Amin Prodhan'</span>,</div>
      <div className="pl-4"><span className="text-green-400">title</span>: <span className="text-yellow-300">'Software Engineer'</span>,</div>
      <div className="pl-4"><span className="text-green-400">experience</span>: <span className="text-purple-400">6</span>,</div>
      <div className="pl-4"><span className="text-green-400">skills</span>: [<span className="text-yellow-300">'Next.js'</span>, <span className="text-yellow-300">'React'</span>, <span className="text-yellow-300">'TypeScript'</span>, ...]</div>
      <div className="pl-4"><span className="text-green-400">education</span>: {"{"}</div>
      <div className="pl-8"><span className="text-green-400">degree</span>: <span className="text-yellow-300">'B.Sc in CSE'</span>,</div>
      <div className="pl-8"><span className="text-green-400">university</span>: <span className="text-yellow-300">'Port City International University'</span></div>
      <div className="pl-4">{"}"},</div>
      <div className="pl-4"><span className="text-green-400">currentCompany</span>: <span className="text-yellow-300">'cursorbd.com'</span></div>
      {"}"};
    </div>
  );
}
