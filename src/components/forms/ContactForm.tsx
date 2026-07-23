"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { products } from "@/data/products";

const schema = z.object({
  name: z.string().min(2, "Внесете го вашето име."),
  company: z.string().optional(),
  email: z.string().email("Неправилен формат на е-пошта."),
  phone: z.string().optional(),
  industry: z.string().optional(),
  product: z.string().optional(),
  quantity: z.string().optional(),
  message: z.string().min(5, "Пораката е прекратка."),
  consent: z.literal(true, { errorMap: () => ({ message: "Потребна е согласност." }) }),
  // Honeypot
  website: z.string().max(0).optional(),
});

type ContactFormValues = z.infer<typeof schema>;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>();

  async function onSubmit(values: ContactFormValues) {
    const parsed = schema.safeParse(values);
    if (!parsed.success) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6" noValidate>
      {/* Honeypot */}
      <div aria-hidden className="absolute -left-[9999px] opacity-0 pointer-events-none">
        <label>
          Website
          <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
        </label>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Име и презиме" name="name" error={errors.name?.message} register={register} required />
        <Field label="Компанија" name="company" error={errors.company?.message} register={register} />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Е-пошта" name="email" type="email" error={errors.email?.message} register={register} required />
        <Field label="Телефон" name="phone" type="tel" error={errors.phone?.message} register={register} />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <SelectField
          label="Индустрија"
          name="industry"
          register={register}
          options={[
            { value: "", label: "Одберете —" },
            { value: "gradezhnishtvo", label: "Градежништво" },
            { value: "transport", label: "Транспорт" },
            { value: "mebel-i-enterier", label: "Мебел и ентериер" },
            { value: "drugo", label: "Друго" },
          ]}
        />
        <SelectField
          label="Производ"
          name="product"
          register={register}
          options={[
            { value: "", label: "Одберете —" },
            ...products.map((p) => ({ value: p.slug, label: p.name })),
          ]}
        />
      </div>

      <Field label="Потребна количина" name="quantity" register={register} error={errors.quantity?.message} />

      <div>
        <label className="label block mb-2" htmlFor="message">Порака *</label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className="w-full bg-cream border border-hairline focus:border-graphite/40 rounded-md p-4 text-[15px] outline-none transition-colors"
        />
        {errors.message && (
          <p className="mt-2 text-[13px] text-orange">{errors.message.message}</p>
        )}
      </div>

      <label className="flex items-start gap-3 text-[13px] text-muted cursor-pointer">
        <input type="checkbox" {...register("consent")} className="mt-1 accent-orange w-4 h-4" />
        <span>
          Се согласувам моите податоци да се обработат за одговор на ова барање, согласно{" "}
          <a href="/politika-na-privatnost" className="underline hover:text-orange">политиката за приватност</a>.
        </span>
      </label>
      {errors.consent && (
        <p className="text-[13px] text-orange">{errors.consent.message}</p>
      )}

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary disabled:opacity-60"
        >
          {status === "submitting" ? "Испраќам..." : "Испрати барање"}
        </button>
        {status === "success" && (
          <p role="status" className="text-[14px] text-graphite">
            Ви благодариме. Ќе ве контактираме наскоро.
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="text-[14px] text-orange">
            Настана грешка. Обидете се повторно или пишете ни на kontakt@birchprime.rs
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  register,
  required,
}: {
  label: string;
  name: keyof ContactFormValues;
  type?: string;
  error?: string;
  register: ReturnType<typeof useForm<ContactFormValues>>["register"];
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="label block mb-2">
        {label}{required && " *"}
      </label>
      <input
        id={name}
        type={type}
        {...register(name)}
        className="w-full bg-cream border border-hairline focus:border-graphite/40 rounded-md h-12 px-4 text-[15px] outline-none transition-colors"
      />
      {error && <p className="mt-2 text-[13px] text-orange">{error}</p>}
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  register,
}: {
  label: string;
  name: keyof ContactFormValues;
  options: { value: string; label: string }[];
  register: ReturnType<typeof useForm<ContactFormValues>>["register"];
}) {
  return (
    <div>
      <label htmlFor={name} className="label block mb-2">{label}</label>
      <select
        id={name}
        {...register(name)}
        className="w-full bg-cream border border-hairline focus:border-graphite/40 rounded-md h-12 px-4 text-[15px] outline-none transition-colors"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}
