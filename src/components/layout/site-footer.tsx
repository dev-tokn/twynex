import { withBasePath } from "@/lib/paths";
import { contact, footerCompanyLinks, footerLegalLinks } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-panel text-panel-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 text-sm text-panel-muted sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold text-panel-foreground">Twynex</p>
          <p className="mt-3 max-w-sm leading-6">
            Cross-border transaction orchestration for regulated payment partners.
          </p>
          <p className="mt-4">{contact.location}</p>
        </div>
        <nav aria-label="Company links">
          <p className="font-semibold text-panel-foreground">Company</p>
          <div className="mt-3 grid gap-2">
            {footerCompanyLinks.map((item) => (
              <a key={item.href} href={withBasePath(item.href)} className="hover:text-panel-foreground">
                {item.label}
              </a>
            ))}
          </div>
        </nav>
        <nav aria-label="Legal links">
          <p className="font-semibold text-panel-foreground">Legal</p>
          <div className="mt-3 grid gap-2">
            {footerLegalLinks.map((item) => (
              <a key={item.href} href={withBasePath(item.href)} className="hover:text-panel-foreground">
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </footer>
  );
}
