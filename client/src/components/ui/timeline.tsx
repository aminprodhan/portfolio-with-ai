import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  isLast?: boolean;
}

export function TimelineItem({
  title,
  company,
  period,
  description,
  skills,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className={cn("timeline-item relative pl-8 pb-12", isLast && "pb-0")}>
      <div className="absolute left-0 top-1 w-4 h-4 bg-primary rounded-full z-10"></div>
      <Card className="hover:shadow-lg transition-all">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
            <h3 className="text-xl font-bold text-primary">{title}</h3>
            <div className="flex items-center mt-2 md:mt-0">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                {period}
              </span>
            </div>
          </div>
          <h4 className="text-lg font-medium mb-2">{company}</h4>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export interface TimelineProps {
  items: TimelineItemProps[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {items.map((item, index) => (
        <TimelineItem 
          key={index} 
          {...item} 
          isLast={index === items.length - 1} 
        />
      ))}
    </div>
  );
}
