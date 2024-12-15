import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function ChatCard({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "text-white text-base p-4 bg-[#2e333d] rounded-xl w-fit max-w-96",
        className
      )}
    >
      {children}
    </div>
  );
}
