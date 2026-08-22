"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { href: "/dla-firm", label: "Dla firm" },
  { href: "/dla-partnerow", label: "Dla partnerów" },
  { href: "/metoda", label: "Jak działamy" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4">
        <Link href="/" className="font-heading text-lg font-semibold tracking-normal">
          POST-CI Lab
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Button
            render={<Link href="/kontakt" />}
            nativeButton={false}
            className="transition-transform hover:-translate-y-0.5"
          >
            Kontakt
          </Button>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={<Button variant="ghost" size="icon" className="md:hidden" aria-label="Otwórz menu" />}
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-background">
            <SheetHeader>
              <SheetTitle className="font-heading">POST-CI Lab</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 px-6 pb-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-foreground/80 transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                render={<Link href="/kontakt" />}
                nativeButton={false}
                className="transition-transform hover:-translate-y-0.5"
                onClick={() => setOpen(false)}
              >
                Kontakt
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
