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
        className={cn("w-full py-24 md:py-32 relative", className)}
        {...props}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-12 relative z-10">
          {children}
        </div>
      </Component>
    );
  }
);
SectionContainer.displayName = "SectionContainer";

export { SectionContainer };
