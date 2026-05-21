import { contact } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#ded5c7] bg-[#171411] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-[#d9d0c5] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>{contact.location}</p>
        <p>Cross-border orchestration for regulated payment partners.</p>
      </div>
    </footer>
  );
}
