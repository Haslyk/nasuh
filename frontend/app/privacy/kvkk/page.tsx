import { PageHero } from "@/components/page-hero";

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        title="Kişisel Verilerin Korunması (KVKK)"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Yasal Bilgiler" },
          { label: "KVKK" },
        ]}
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold mb-6">Aydınlatma Metni</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Nasuh Ambalaj & Kağıt olarak kişisel verilerinizin güvenliği
              hususuna azami hassasiyet göstermekteyiz...
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
