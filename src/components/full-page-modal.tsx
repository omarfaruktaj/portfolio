import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface FullPageModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function FullPageModal({
  children,
  isOpen,
  onClose,
}: FullPageModalProps) {
  const onOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
