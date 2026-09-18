import { useState, type ChangeEvent, type FormEvent } from "react";
import ContactInfo from "../components/ContactInfo";
import FormContact, { type ContactFormData } from "../components/FormContact";

const initialForm: ContactFormData = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((previous) => ({ ...previous, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSending(false);
    setSent(true);
    setForm(initialForm);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#f1e5ff] px-4 py-24 dark:bg-[var(--color-bg-dark)]">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#9157c7] dark:to-violet-500" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9157c7] dark:text-violet-500">Contato</span>
            </div>

            <div>
              <h2 className="text-3xl font-black leading-tight tracking-tight text-[#9157c7] dark:text-white md:text-4xl">
                Vamos trabalhar <span className="bg-gradient-to-r from-[#9157c7] via-[#632ea0] to-[#3f0c7a] bg-clip-text text-transparent dark:from-violet-300 dark:via-violet-500 dark:to-violet-700">juntas?</span>
              </h2>
              <p className="mt-4 text-[13.5px] leading-relaxed text-[#555] dark:text-white/50">Tem um projeto em mente, quer trocar uma ideia ou só dizer oi? Fico feliz em conversar — me manda uma mensagem!</p>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-[#9157c7]/40 via-[#632ea0]/20 to-transparent dark:from-violet-700/40 dark:via-violet-500/20" />
            <ContactInfo />
          </div>

          <FormContact form={form} sending={sending} sent={sent} onChange={handleChange} onSubmit={handleSubmit} />
        </div>
      </div>
    </section>
  );
}