import { useState } from "react";
import { motion } from "motion/react";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { toast } from "sonner";

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

// Google Apps Script web app that saves leads to your Google Sheet (unchanged)
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwZWZpjpWHCxzxZJ4u06f9m2_V6PvLKJpA-zoog9vrtQav9pxjNwGc6ZjoWmNo2hUT5/exec";

const EMPTY_FORM = { name: "", email: "", phone: "", service: "", message: "" };

const services = [
  { value: "ai-solutions", label: "AI & ML Solutions" },
  { value: "school-erp", label: "School ERP" },
  { value: "clinic-management", label: "Clinic Management" },
  { value: "restaurant-management", label: "Restaurant Management" },
  { value: "web-development", label: "Web Development" },
  { value: "mobile-app", label: "Mobile App Development" },
  { value: "inventory-system", label: "Inventory Management System" },
  { value: "internship-diploma", label: "Internship - Diploma Track" },
  { value: "internship-engineering", label: "Internship - Engineering Track" },
  { value: "other", label: "Other" },
];

const labelClass = "mb-2 block text-sm font-semibold text-slate-700";
const fieldClass =
  "w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20";

export function Contact() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);
    const toastId = toast.loading("Sending your message...");

    try {
      // Google Sheets integration (no-cors: the response can't be read,
      // so we can only confirm the request left the browser)
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      toast.success("Thank you! We'll get back to you within 24 hours.", { id: toastId });
      setFormData(EMPTY_FORM);
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("Failed to send message. Please try again.", { id: toastId });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* HERO */}
      <section className="relative isolate bg-gradient-to-br from-[#f4f8ff] via-[#e9f1ff] to-[#dfe0ff] pb-14 pt-28 lg:pt-32">
        <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-[420px] w-[420px] rounded-full bg-violet-300/30 blur-[110px]" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"
        >
          <span className="inline-flex rounded-full border border-blue-300 bg-white/70 px-3 py-1.5 text-[10px] font-extrabold tracking-[1.5px] text-blue-700">
            CONTACT US
          </span>
          <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0f1a35] sm:text-5xl lg:text-[54px]">
            Let's Build Something <span className="text-blue-600">Great</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-700 sm:text-lg">
            Get in touch with us to discuss your project, request a product demo or
            apply for an internship.
          </p>
        </motion.div>
      </section>

      {/* FORM + INFO */}
      <section className="py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:px-10">
          {/* Form */}
          <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-[0_4px_24px_rgba(15,26,53,0.08)] sm:p-8">
            <Label>SEND A MESSAGE</Label>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0f1a35] sm:text-3xl">
              Tell Us About Your Project
            </h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>Full Name *</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>Phone Number</label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>Email Address *</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="service" className={labelClass}>I'm Interested In *</label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className={fieldClass}
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>Message *</label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or requirements..."
                  className={`${fieldClass} h-32`}
                />
              </div>

              <Button
                type="submit"
                disabled={isSending}
                className="h-12 w-full rounded-md bg-blue-600 font-semibold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 disabled:opacity-70"
              >
                {isSending ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-5">
            <div>
              <Label>GET IN TOUCH</Label>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0f1a35] sm:text-3xl">
                We'd Love to Hear from You
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                We typically respond within 24 hours. For urgent matters, please call us directly.
              </p>
            </div>

            <InfoCard icon={Mail} tint="bg-blue-50 text-blue-600" title="Email Us">
              <a href="mailto:astechinnovation@gmail.com" className="hover:text-blue-700">
                astechinnovation@gmail.com
              </a>
            </InfoCard>

            <InfoCard icon={Phone} tint="bg-violet-50 text-violet-600" title="Call Us">
              <a href="tel:+918459161017" className="hover:text-blue-700">+91 8459161017</a>
              <span className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                <Clock className="h-3.5 w-3.5" /> Mon-Sat, 10 AM - 7 PM IST
              </span>
            </InfoCard>

            <InfoCard icon={MapPin} tint="bg-emerald-50 text-emerald-600" title="Visit Us">
              MUROAS Tech Innovation Pvt Ltd
              <br />
              Pune, Maharashtra 411023, India
            </InfoCard>

            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 p-6 text-white">
              <div className="absolute -right-10 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
              <div className="relative flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/15">
                  <MessageCircle className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-base font-extrabold">Quick Response via WhatsApp</h3>
                  <p className="mt-1 text-xs text-blue-100">Get instant answers through WhatsApp.</p>
                </div>
              </div>
              <a
                href="https://wa.me/918459161017"
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-5 block"
              >
                <Button className="h-11 w-full rounded-md bg-white font-bold text-blue-700 hover:bg-blue-50">
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="px-5 pb-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-xl border border-slate-100 shadow-[0_4px_24px_rgba(15,26,53,0.08)]">
          <iframe
            title="MUROAS Tech Innovation location, Pune"
            src="https://www.google.com/maps?q=Pune,+Maharashtra+411023&output=embed"
            className="h-80 w-full border-0 sm:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}

/* --------------------------- SUB-COMPONENTS --------------------------- */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[10px] font-extrabold tracking-[1.6px] text-blue-700">
      <span className="h-0.5 w-6 rounded-full bg-blue-600" />
      {children}
    </span>
  );
}

function InfoCard({
  icon: Icon,
  tint,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  tint: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-[0_4px_20px_rgba(15,26,53,0.06)]">
      <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${tint}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 text-sm leading-6 text-slate-600">
        <h3 className="text-sm font-extrabold text-slate-900">{title}</h3>
        <div className="mt-1 flex flex-col">{children}</div>
      </div>
    </div>
  );
}