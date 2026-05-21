import Link from "next/link";
import { Button } from "@/components/ui/button";
import { withBasePath } from "@/lib/paths";
import { navItems } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Twynex home">
          <span className="grid size-9 place-items-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            TW
          </span>
          <span className="text-lg font-semibold">Twynex</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground lg:flex">
          {navItems.map((item) => (
            <a key={item.href} className="hover:text-foreground" href={withBasePath(item.href)}>
              {item.label}
            </a>
          ))}
        </nav>
        <Button
          href="/contact"
          variant="inverse"
          className="px-4 py-2 shadow-sm"
        >
          Contact
        </Button>
      </div>
    </header>
  );
}
