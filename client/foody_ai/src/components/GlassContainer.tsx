// components/GlassContainer.tsx
import React from "react";

interface GlassContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassContainer({
  children,
  className = "",
}: GlassContainerProps) {
  return (
    <div
      className={`backdrop-blur-md bg-black/20 border border-white/10 rounded-xl p-6 shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}
