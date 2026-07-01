import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface SectionContainerProps extends HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

const SectionContainer = forwardRef<HTMLElement, SectionContainerProps>(
  ({ className, as: Component = "section", children, ...props }, ref) => {
    return (
      <Component
        ref={ref as any}
        className={cn("w-full py-12 md:py-16 relative", className)}
        {...props}
      >
        <div className="w-full relative z-10">
          {children}
        </div>
      </Component>
    );
  }
);
SectionContainer.displayName = "SectionContainer";

export { SectionContainer };
