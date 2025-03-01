"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { usePathname, useRouter } from "next/navigation";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const path = usePathname();

  const handleOpenChange = () => {
    router.back();
  };

  return (
    <Dialog
      defaultOpen={true}
      open={path === "/projects" ? true : false}
      onOpenChange={handleOpenChange}
    >
      <DialogContent className=" h-5/6  max-w-4xl">
        <DialogTitle />
        {children}
      </DialogContent>
    </Dialog>
  );
}
