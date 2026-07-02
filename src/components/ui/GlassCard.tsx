import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  hoverEffect?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, hoverEffect = false, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hoverEffect ? { y: -8 } : {}}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
        className={cn(
          "relative overflow-hidden rounded-[24px] bg-white/65 backdrop-blur-[18px] border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.03)] group",
          hoverEffect && "hover:shadow-[0_8px_32px_rgba(0,195,122,0.15)] hover:border-[#00c37a]/40 transition-all duration-500",
          className
        )}
        {...props}
      >
        {/* Subtle inner glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none rounded-[24px] z-0" />
        {hoverEffect && (
           <div className="absolute inset-0 bg-gradient-to-br from-[#00c37a]/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0 rounded-[24px]" />
        )}
        <motion.div className="relative z-10 h-full">{children}</motion.div>
      </motion.div>
    );
  }
);
GlassCard.displayName = "GlassCard";

export { GlassCard };
