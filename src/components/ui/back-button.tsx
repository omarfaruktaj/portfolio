"use client";

import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button, ButtonProps } from "./button";

interface BackButtonProps {
  onClick?: () => void;
  className?: string;
  variant?: ButtonProps["variant"];
}

export default function BackButton({
  onClick,
  variant,
  className,
}: BackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      router.back();
    }
  };

  return (
    <Button
      asChild
      variant={variant ?? "outline"}
      className={cn(className)}
      onClick={handleClick}
    >
      <div className="flex items-center">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </div>
    </Button>
  );
}
