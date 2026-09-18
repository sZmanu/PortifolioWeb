import type { ChangeEvent, FormEvent } from "react";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface FormContactProps {
  form: ContactFormData;
  sending: boolean;
  sent: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const inputClass = "w-full rounded-xl border border-purple-800/30 px-4 py-3 text-[13px] text-[#300e68] placeholder-[#999] outline-none transition-all duration-200 focus:border-purple-500/60 focus:bg-white/8 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.12)] dark:border-violet-800/30 dark:text-white dark:placeholder-white/30 dark:focus:border-violet-500/60 dark:focus:bg-violet-500/10";

export default function FormContact({ form, sending, sent, onChange, onSubmit }: FormContactProps) {
  return (
    <form onSubmit={onSubmit} className="relative overflow-hidden rounded-3xl border border-purple-700/25 bg-white/[0.05] p-6 backdrop-blur-xl dark:border-violet-700/25 dark:bg-white/[0.04] md:p-8">
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent dark:via-violet-400/50" />
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-purple-900/5 dark:bg-violet-900/5" />

      <div className="relative z-10 flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#9157c7] dark:text-violet-500">
            Seu nome
            <input name="name" value={form.name} onChange={onChange} placeholder="Manuella Oliveira" className={inputClass} />
          </label>
          <label className="flex flex-col gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#9157c7] dark:text-violet-500">
            Seu e-mail
            <input name="email" type="email" value={form.email} onChange={onChange} placeholder="manuella@email.com" className={inputClass} />
          </label>
        </div>

        <label className="flex flex-col gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#9157c7] dark:text-violet-500">
          Mensagem
          <textarea name="message" value={form.message} onChange={onChange} placeholder="Olá Manuella, gostaria de conversar sobre..." rows={5} className={`${inputClass} resize-none`} />
        </label>

        <button type="submit" disabled={sending || sent} className="group relative mt-1 overflow-hidden rounded-xl bg-purple-900 px-6 py-3.5 text-[13px] font-semibold text-white transition-all duration-300 hover:shadow-[0_0_32px_rgba(109,40,217,0.55)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 dark:bg-violet-900">
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
          <span className="relative z-10 flex items-center justify-center gap-2.5">
            {sent ? "Mensagem enviada!" : sending ? "Enviando..." : "Enviar mensagem"}
          </span>
        </button>
      </div>
    </form>
  );
}