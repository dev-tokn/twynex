import Link from "next/link";
import { Button } from "@/components/ui/button";
import { withBasePath } from "@/lib/paths";
import { navItems } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-5 gap-y-3 px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Twynex home">
          <span className="grid size-9 place-items-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            TW
          </span>
          <span className="text-lg font-semibold">Twynex</span>
        </Link>
        <nav className="order-3 flex w-full items-center gap-5 overflow-x-auto border-t border-border pt-3 text-sm font-medium text-muted-foreground lg:order-2 lg:w-auto lg:overflow-visible lg:border-t-0 lg:pt-0">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="shrink-0 hover:text-foreground"
              href={withBasePath(item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button
          href="/contact"
          variant="inverse"
          className="order-2 px-4 py-2 shadow-sm lg:order-3"
        >
          Contact
        </Button>
      </div>
    </header>
  );
}
