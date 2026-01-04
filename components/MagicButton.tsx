"use client";
import React from "react";
import { Button, ButtonProps } from "./ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface MagicButtonProps extends Omit<ButtonProps, "variant"> {
  icon?: LucideIcon;
  variant?: "primary" | "outline" | "secondary";
}

export const MagicButton = React.forwardRef<
  HTMLButtonElement,
  MagicButtonProps
>(({ className, icon: Icon, children, variant = "primary", ...props }, ref) => {
  return (
    <Button
      ref={ref}
      variant="secondary"
      className={cn(
        "h-12 md:h-14 px-6 md:px-8 rounded-2xl font-bold transition-all active:scale-95 flex gap-3 shadow-lg",

        variant === "primary" &&
          "bg-white text-black hover:bg-slate-200 shadow-[0_0_20px_rgba(255,255,255,0.1)]",
        variant === "outline" &&
          "bg-transparent border-2 border-slate-800 text-white hover:border-white hover:bg-white/5",
        variant === "secondary" &&
          "bg-slate-900/50 text-white border border-slate-800 hover:border-slate-700 hover:bg-slate-900/80",

        className
      )}
      {...props}
    >
      {Icon && <Icon size={18} className="shrink-0" />}
      <span className="truncate">{children}</span>
    </Button>
  );
});

MagicButton.displayName = "MagicButton";
