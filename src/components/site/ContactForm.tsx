"use client";

import { useState, type FormEvent } from "react";
import { Loader2, Check } from "lucide-react";

// Web3Forms access key. Public-by-design per Web3Forms docs, safe in client code.
// Env var takes precedence so you can rotate the key without a code change.
const KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ||
  "b4eef677-52d6-4c41-8453-8084bbf7b157";

type FormState = "idle" | "loading" | "success" | "error";

const inputClasses =
  "w-full rounded-input border border-hairline bg-surface px-4 py-3 font-sans text-body-sm text-fg-primary placeholder:text-fg-tertiary transition-colors focus:border-accent focus:outline-none";

const labelClasses =
  "mb-2 block font-mono text-[11px] uppercase tracking-eyebrow text-fg-tertiary";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);

    if (!KEY) {
      setState("error");
      setErrorMsg(
        "Form is not configured yet. Set NEXT_PUBLIC_WEB3FORMS_KEY in your environment.",
      );
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot: if filled, silently exit
    if (formData.get("botcheck")) return;

    const payload = {
      access_key: KEY,
      from_name: "cristianreyes.io",
      subject:
        (formData.get("subject") as string) ||
        "New message via cristianreyes.io",
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      botcheck: "",
    };

    setState("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (json.success) {
        setState("success");
        form.reset();
      } else {
        setState("error");
        setErrorMsg(
          json.message ||
            "Something went wrong sending the message. Try again or email me directly.",
        );
      }
    } catch {
      setState("error");
      setErrorMsg(
        "Network error sending the message. Try again or email me directly.",
      );
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-card border border-hairline bg-surface/40 p-8 text-center backdrop-blur-sm">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-pill border border-accent/40 bg-accent/10 text-accent">
          <Check size={22} aria-hidden="true" />
        </span>
        <p className="mt-6 font-sans text-h3 text-fg-primary">
          Thanks. I&apos;ll be in touch.
        </p>
        <p className="mt-3 font-sans text-body-sm text-fg-secondary">
          Your message landed in my inbox. I usually reply within a day or two.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot field, hidden from real users */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        aria-hidden="true"
      />

      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className={labelClasses}>Name</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className={inputClasses}
          />
        </label>
        <label className="block">
          <span className={labelClasses}>Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClasses}
          />
        </label>
      </div>

      <label className="block">
        <span className={labelClasses}>Subject</span>
        <input
          type="text"
          name="subject"
          placeholder="Project inquiry, hello, etc."
          className={inputClasses}
        />
      </label>

      <label className="block">
        <span className={labelClasses}>Message</span>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Tell me what you're working on, or just say hi."
          className={`${inputClasses} resize-y`}
        />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={state === "loading"}
          className="inline-flex items-center gap-2 rounded-pill bg-accent px-6 py-3 font-sans text-body-sm font-medium text-white transition-all duration-300 hover:bg-accent/90 hover:shadow-[0_0_40px_-8px_rgba(124,92,255,0.55)] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {state === "loading" ? (
            <>
              <Loader2 size={16} aria-hidden="true" className="animate-spin" />
              Sending
            </>
          ) : (
            <>Send message</>
          )}
        </button>
        {state === "error" && errorMsg ? (
          <p
            role="alert"
            className="font-sans text-body-sm text-red-300/90"
          >
            {errorMsg}
          </p>
        ) : null}
      </div>
    </form>
  );
}
