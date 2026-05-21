import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#ded5c7] bg-[#fffaf2]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="Twynex home">
          <span className="grid size-9 place-items-center rounded-lg bg-[#171411] text-sm font-bold text-white">
            TW
          </span>
          <span className="text-lg font-semibold">Twynex</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-[#5f574d] lg:flex">
          {navItems.map((item) => (
            <a key={item.href} className="hover:text-[#171411]" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <Button
          href="mailto:sudhir@twynex.com?subject=Twynex%20partner%20inquiry"
          variant="inverse"
          className="px-4 py-2 shadow-sm"
        >
          Partner inquiry
        </Button>
      </div>
    </header>
  );
}
