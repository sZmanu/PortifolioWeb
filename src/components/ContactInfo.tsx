interface ContactItem {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const contacts: ContactItem[] = [
  {
    label: "E-mail",
    value: "manuella@email.com",
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/manuella",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-4">
      {contacts.map((contact) => (
        <div key={contact.label} className="group flex items-center gap-4">
          <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#8b2fe0]/30 bg-white/5 text-[#8b2de4] backdrop-blur-md transition-all duration-200 group-hover:border-purple-500/50 group-hover:bg-[#9157c7] group-hover:text-purple-300 dark:border-violet-700/30 dark:text-violet-400 dark:group-hover:border-violet-500/50 dark:group-hover:bg-violet-500/10 dark:group-hover:text-violet-300">
            <div className="pointer-events-none absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            {contact.icon}
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#9157c7] dark:text-violet-500">{contact.label}</p>
            <p className="text-[13px] font-medium text-[#300e68] dark:text-white/80">{contact.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}