import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface SectionContainerProps extends HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  withGlow?: boolean;
}

const SectionContainer = forwardRef<HTMLElement, SectionContainerProps>(
  ({ className, as: Component = "section", withGlow = true, children, ...props }, ref) => {
    return (
      <Component
        ref={ref as any}
        className={cn("w-full py-12 md:py-16 relative", className)}
        {...props}
      >
        {withGlow && (
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-50">
            {/* Left Side Colorful Glow */}
            <div className="absolute top-[10%] left-[-15%] w-[800px] h-[800px] bg-gradient-to-tr from-purple-400/10 via-pink-300/10 to-blue-400/10 rounded-full blur-[120px] mix-blend-multiply" />
            <div className="absolute top-[40%] left-[5%] w-[600px] h-[600px] bg-gradient-to-br from-blue-300/10 via-teal-300/10 to-transparent rounded-full blur-[120px] mix-blend-multiply" />
            
            {/* Right Side Accent Glow */}
            <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-[#00c37a]/10 rounded-full blur-[120px]" />
          </div>
        )}
        <div className="w-full relative z-10">
          {children}
        </div>
      </Component>
    );
  }
);
SectionContainer.displayName = "SectionContainer";

export { SectionContainer };
