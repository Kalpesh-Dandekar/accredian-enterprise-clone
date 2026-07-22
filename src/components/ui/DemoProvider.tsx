"use client";

import { useState } from "react";
import DemoModal from "./DemoModal";

interface DemoProviderProps {
  children: React.ReactNode;
}

export default function DemoProvider({
  children,
}: DemoProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={(e) => {
          const target = e.target as HTMLElement;

          if (target.closest("[data-demo-button]")) {
            setIsOpen(true);
          }
        }}
      >
        {children}
      </div>

      <DemoModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}