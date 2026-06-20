import type { PropsWithChildren } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export function PageShell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
