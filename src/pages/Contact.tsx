import Reveal from "../components/Reveal";
import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import ContactInfo from "../components/ContactInfo";
import FormContact, { type ContactFormData } from "../components/FormContact";

const initialForm: ContactFormData = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [feedback, setFeedback] = useState("");
  const [sending, setSending] = useState(false);
  const submitting = useRef(false);
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL?.trim() ?? "";
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim() ?? "";
  const available = /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((previous) => ({ ...previous, [event.target.name]: event.target.value }));
    setFeedback("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!available || submitting.current) return;
    if (!event.currentTarget.reportValidity()) return;
    if (!form.name.trim() || !form.message.trim()) {
      setFeedback("Preencha seu nome e sua mensagem.");
      return;
    }
    submitting.current = true;
    setSending(true);
    setFeedback("");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name.trim(), email: form.email.trim(), message: form.message.trim() }),
        signal: AbortSignal.timeout(20000),
      });
      if (!response.ok) {
        setFeedback(response.status === 429
          ? "Muitas tentativas de envio. Aguarde um pouco e tente novamente."
          : "Não foi possível enviar a mensagem. Tente novamente ou use o e-mail de contato.");
        return;
      }
      setForm(initialForm);
      setFeedback("Mensagem enviada com sucesso! Obrigada pelo contato.");
    } catch {
      setFeedback("Não foi possível confirmar o envio. Verifique sua conexão e tente novamente ou use o e-mail de contato.");
    } finally {
      submitting.current = false;
      setSending(false);
    }
  };

  return (
    <section id="contact" tabIndex={-1} className="relative overflow-hidden bg-[#f1e5ff] px-4 py-24 dark:bg-[var(--color-bg-dark)]">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal variant="left" className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#9157c7] dark:to-violet-500" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9157c7] dark:text-violet-500">Contato</span>
            </div>

            <div>
              <h2 className="text-3xl font-black leading-tight tracking-tight text-[#9157c7] dark:text-white md:text-4xl">
                Entre em<span className="bg-gradient-to-r from-[#9157c7] via-[#632ea0] to-[#3f0c7a] bg-clip-text text-transparent dark:from-violet-300 dark:via-violet-500 dark:to-violet-700"> contato</span>
              </h2>
              <p className="mt-4 text-[13.5px] leading-relaxed text-[#555] dark:text-white/50">Tem um projeto em mente, quer trocar uma ideia ou só dizer oi? Fico feliz em conversar</p>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-[#9157c7]/40 via-[#632ea0]/20 to-transparent dark:from-violet-700/40 dark:via-violet-500/20" />
            <ContactInfo email={contactEmail} />
          </Reveal>

          <Reveal variant="rise" delay={140}><FormContact form={form} available={available} sending={sending} feedback={feedback} onChange={handleChange} onSubmit={handleSubmit} /></Reveal>
        </div>
      </div>
    </section>
  );
}
