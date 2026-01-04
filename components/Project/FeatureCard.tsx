"use client";
import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type FeatureColor =
  | "blue"
  | "purple"
  | "emerald"
  | "orange"
  | "pink"
  | "cyan"
  | "red"
  | "yellow";

interface FeatureCardProps {
  Icon: LucideIcon;
  title?: string;
  children: React.ReactNode;
  color?: FeatureColor;
  className?: string;
  padding?: "p-6" | "p-8";
}

const colorMap: Record<
  FeatureColor,
  { border: string; iconBg: string; iconText: string; bullet: string }
> = {
  blue: {
    border: "hover:border-blue-500/50",
    iconBg: "bg-blue-500/10",
    iconText: "text-blue-400",
    bullet: "bg-blue-500",
  },
  purple: {
    border: "hover:border-purple-500/50",
    iconBg: "bg-purple-500/10",
    iconText: "text-purple-400",
    bullet: "bg-purple-500",
  },
  emerald: {
    border: "hover:border-emerald-500/50",
    iconBg: "bg-emerald-500/10",
    iconText: "text-emerald-400",
    bullet: "bg-emerald-500",
  },
  orange: {
    border: "hover:border-orange-500/50",
    iconBg: "bg-orange-500/10",
    iconText: "text-orange-400",
    bullet: "bg-orange-500",
  },
  pink: {
    border: "hover:border-pink-500/50",
    iconBg: "bg-pink-500/10",
    iconText: "text-pink-400",
    bullet: "bg-pink-500",
  },
  cyan: {
    border: "hover:border-cyan-500/50",
    iconBg: "bg-cyan-500/10",
    iconText: "text-cyan-400",
    bullet: "bg-cyan-500",
  },
  red: {
    border: "hover:border-red-500/50",
    iconBg: "bg-red-500/10",
    iconText: "text-red-400",
    bullet: "bg-red-500",
  },
  yellow: {
    border: "hover:border-yellow-500/50",
    iconBg: "bg-yellow-500/10",
    iconText: "text-yellow-400",
    bullet: "bg-yellow-500",
  },
};

export const FeatureCard = ({
  Icon,
  title,
  children,
  color = "blue",
  className,
  padding = "p-8",
}: FeatureCardProps) => {
  const theme = colorMap[color];

  return (
    <div
      className={cn(
        "bg-slate-900/40 rounded-3xl border border-slate-800 transition-all group",
        padding,
        theme.border,
        className
      )}
    >
      <div
        className={cn(
          "p-3 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform",
          theme.iconBg
        )}
      >
        <Icon className={theme.iconText} size={24} />
      </div>
      {title && <h3 className="text-xl font-bold text-white mb-4">{title}</h3>}
      {children}
    </div>
  );
};

export const FeatureList = ({ children }: { children: React.ReactNode }) => (
  <ul className="space-y-3">{children}</ul>
);

export const FeatureItem = ({
  children,
  color = "blue",
}: {
  children: React.ReactNode;
  color?: FeatureColor;
}) => {
  const theme = colorMap[color];
  return (
    <li className="text-slate-400 text-sm leading-relaxed flex gap-3">
      <div
        className={cn("w-1.5 h-1.5 rounded-full mt-2 shrink-0", theme.bullet)}
      />
      <span>{children}</span>
    </li>
  );
};
