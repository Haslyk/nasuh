"use client";

import { useState } from "react";
import { siteConfig, contactFormFields } from "@/data/content";
import { PageHero } from "@/components/page-hero";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In a real app, this would send data to an API
    setSubmitted(true);
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const contactInfo = [
    {
      icon: Phone,
      label: "Telefon",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone}`,
    },
    {
      icon: Mail,
      label: "E-posta",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: MapPin,
      label: "Adres",
      value: siteConfig.address,
      href: undefined,
    },
    {
      icon: Clock,
      label: "Calisma Saatleri",
      value: siteConfig.workingHours,
      href: undefined,
    },
  ];

  return (
    <>
      <PageHero
        title="Iletisim"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Iletisim" },
        ]}
      />

      <section className="py-20 bg-card">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Bize Ulasin
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Sorulariniz, teklif talepleriniz veya teknik destek icin
                bizimle iletisime geciniz.
              </p>

              <div className="flex flex-col gap-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary flex-shrink-0">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-lg border border-border bg-background p-8 md:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Mesajiniz Alindi
                    </h3>
                    <p className="text-muted-foreground max-w-md">
                      En ksa surede sizinle iletisime gececegiz. Genellikle 1
                      is gunu icinde geri donus yapiyoruz.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({});
                      }}
                      className="mt-6 text-sm font-medium text-primary hover:underline"
                    >
                      Yeni mesaj gonder
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-foreground mb-6">
                      Iletisim Formu
                    </h3>
                    <form
                      onSubmit={handleSubmit}
                      className="grid grid-cols-1 gap-5 md:grid-cols-2"
                    >
                      {contactFormFields.map((field) => {
                        const isFullWidth =
                          field.type === "textarea" || field.type === "select";
                        return (
                          <div
                            key={field.name}
                            className={isFullWidth ? "md:col-span-2" : ""}
                          >
                            <label
                              htmlFor={field.name}
                              className="block text-sm font-medium text-foreground mb-1.5"
                            >
                              {field.label}
                              {field.required && (
                                <span className="text-secondary ml-1">*</span>
                              )}
                            </label>

                            {field.type === "textarea" ? (
                              <textarea
                                id={field.name}
                                name={field.name}
                                rows={5}
                                required={field.required}
                                value={formData[field.name] ?? ""}
                                onChange={handleChange}
                                className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                                placeholder={`${field.label} giriniz...`}
                              />
                            ) : field.type === "select" ? (
                              <select
                                id={field.name}
                                name={field.name}
                                required={field.required}
                                value={formData[field.name] ?? ""}
                                onChange={handleChange}
                                className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                              >
                                <option value="">Seciniz...</option>
                                {field.options?.map((opt) => (
                                  <option key={opt} value={opt}>
                                    {opt}
                                  </option>
                                ))}
                              </select>
                            ) : (
                              <input
                                id={field.name}
                                name={field.name}
                                type={field.type}
                                required={field.required}
                                value={formData[field.name] ?? ""}
                                onChange={handleChange}
                                className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                placeholder={field.label}
                              />
                            )}
                          </div>
                        );
                      })}

                      <div className="md:col-span-2">
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 rounded-md bg-secondary px-7 py-3 text-sm font-semibold text-secondary-foreground shadow-sm hover:opacity-90 transition-opacity"
                        >
                          Mesaj Gonder
                          <Send className="h-4 w-4" />
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 pb-20">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Konum
          </h3>
          <div className="relative aspect-[21/9] overflow-hidden rounded-lg border border-border">
            <iframe
              src={siteConfig.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GuneyMak Konum Haritasi"
              className="absolute inset-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}
