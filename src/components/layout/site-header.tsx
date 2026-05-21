import Link from "next/link";
import { Button } from "@/components/ui/button";
import { withBasePath } from "@/lib/paths";
import { navItems } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/88 backdrop-blur-xl">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-card focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-5 gap-y-3 px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Twynex home">
          <span className="grid size-9 place-items-center rounded-lg bg-primary text-sm font-bold text-primary-foreground shadow-sm">
            TW
          </span>
          <span className="text-lg font-semibold">Twynex</span>
        </Link>
        <nav className="order-3 flex w-full items-center gap-1 overflow-x-auto border-t border-border pt-3 text-sm font-medium text-muted-foreground lg:order-2 lg:w-auto lg:overflow-visible lg:border-t-0 lg:pt-0">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="shrink-0 rounded-lg px-3 py-2 transition hover:bg-muted hover:text-foreground"
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
