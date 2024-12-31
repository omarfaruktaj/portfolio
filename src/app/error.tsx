"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { toast } = useToast();

  useEffect(() => {
    console.error(error);
  }, [error]);

  const handleTryAgain = () => {
    reset();
    toast({
      title: "Error recovered!",
      description: "We're trying to load the page again...",
      duration: 4000,
    });
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="max-w-md w-full ">
        <h2 className="text-2xl font-bold text-center mb-4">
          Something went wrong!
        </h2>
        <p className="text-center text-muted-foreground mb-6">
          An unexpected error has occurred. We are trying to recover. Please try
          again.
        </p>

        <div className="flex justify-center">
          <Button onClick={handleTryAgain} size={"sm"} variant={"secondary"}>
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
}
