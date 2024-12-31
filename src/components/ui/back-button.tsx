"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
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
      variant={variant ?? "link"}
      className={cn("rounded-full", className)}
      onClick={handleClick}
    >
      <div className="flex items-center">
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back
      </div>
    </Button>
  );
}
