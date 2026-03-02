// ============================================================
// ICERIK VERI KATMANI — "Mock API"
// Tum UI metinleri, gorseller ve konfigurasyonlar burada.
// ============================================================

// ---------- SITE GENELI ----------
export const siteConfig = {
  companyName: "GuneyMak",
  tagline: "Hassas Muhendislik Cozumleri",
  phone: "+90 (312) 555 00 42",
  email: "info@guneymak.com",
  address:
    "Organize Sanayi Bolgesi, 2. Cadde No:15, 06935 Sincan / Ankara, Turkiye",
  workingHours: "Pzt - Cum: 08:00 - 18:00 | Cmt: 09:00 - 14:00",
  social: {
    linkedin: "https://linkedin.com/company/guneymak",
    instagram: "https://instagram.com/guneymak",
    youtube: "https://youtube.com/@guneymak",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.5!2d32.5!3d39.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDU0JzAwLjAiTiAzMsKwMzAnMDAuMCJF!5e0!3m2!1str!2str!4v1700000000000",
};

// ---------- NAVIGASYON ----------
export const navigation = {
  main: [
    { label: "Ana Sayfa", href: "/" },
    {
      label: "Kurumsal",
      href: "/corporate",
      children: [
        { label: "Hakkimizda", href: "/corporate/about" },
        { label: "Vizyon ve Misyon", href: "/corporate/vision" },
        { label: "Kalite Politikasi", href: "/corporate/quality" },
      ],
    },
    {
      label: "Urunler",
      href: "/products",
      children: [
        { label: "Hidrolik Presler", href: "/products/hydraulic-presses" },
        { label: "CNC Tezgahlar", href: "/products/cnc-machines" },
        { label: "Konveyor Sistemleri", href: "/products/conveyor-systems" },
        { label: "Robotik Kaynak", href: "/products/robotic-welding" },
        { label: "Lazer Kesim", href: "/products/laser-cutting" },
        { label: "Pnomatik Sistemler", href: "/products/pneumatic-systems" },
      ],
    },
    { label: "Iletisim", href: "/contact" },
  ],
  cta: { label: "Teklif Alin", href: "/contact?quote=true" },
};

// ---------- HERO SLIDER ----------
export const heroSlides = [
  {
    id: 1,
    image: "/images/hero-1.jpg",
    title: "1987'den Bu Yana Muhendislik Mukemmeliyeti",
    subtitle:
      "Dunya genelinde 40'tan fazla ulkeye yuksek hassasiyetli endustriyel makine tedarik ediyoruz.",
    cta: { label: "Urunleri Kesfet", href: "/products" },
  },
  {
    id: 2,
    image: "/images/hero-2.jpg",
    title: "Her Olcekte Hassasiyet",
    subtitle:
      "Mikro bilesenlarden agir hizmet endustriyel preslere kadar - olcebileceginiz kalite.",
    cta: { label: "Yeteneklerimiz", href: "/corporate/about" },
  },
  {
    id: 3,
    image: "/images/hero-3.jpg",
    title: "Inovasyon Endustriyle Bulusuyor",
    subtitle:
      "Modern uretim tesisleri icin son teknoloji otomasyon ve robotik cozumler.",
    cta: { label: "Bize Ulasin", href: "/contact" },
  },
];

// ---------- NEDEN BIZ ----------
export const whyUsItems = [
  {
    icon: "Shield",
    title: "Kalite Guvencesi",
    description:
      "Her asamada titiz testlerle ISO 9001:2015 sertifikali surecler.",
  },
  {
    icon: "Globe",
    title: "Global Erisim",
    description:
      "40'tan fazla ulkeye ihracat ve ozel satis sonrasi destek ekipleri.",
  },
  {
    icon: "Settings",
    title: "Ozel Cozumler",
    description:
      "Spesifik uretim gereksinimleriniz icin kisiye ozel muhendislik.",
  },
  {
    icon: "Clock",
    title: "Zamaninda Teslimat",
    description:
      "Karmasik projelerde teslim tarihlerine uyum konusunda kanitlanmis sicil.",
  },
];

// ---------- ONE CIKAN KATEGORILER ----------
export const featuredCategories = [
  {
    slug: "hydraulic-presses",
    title: "Hidrolik Presler",
    image: "/images/product-1.jpg",
    description:
      "Metal sekillendirme ve damgalama icin yuksek tonajli hidrolik pres sistemleri.",
  },
  {
    slug: "cnc-machines",
    title: "CNC Tezgahlar",
    image: "/images/product-3.jpg",
    description:
      "Karmasik parcalar icin hassas CNC freze ve torna merkezleri.",
  },
  {
    slug: "conveyor-systems",
    title: "Konveyor Sistemleri",
    image: "/images/product-2.jpg",
    description: "Otomatik konveyor ve malzeme tasima cozumleri.",
  },
  {
    slug: "robotic-welding",
    title: "Robotik Kaynak",
    image: "/images/product-4.jpg",
    description:
      "Tutarli, yuksek kaliteli birlesimler icin otomatik kaynak istasyonlari.",
  },
  {
    slug: "laser-cutting",
    title: "Lazer Kesim",
    image: "/images/product-5.jpg",
    description:
      "Hassas sac metal isleme icin yuksek hizli fiber lazer kesim.",
  },
  {
    slug: "pneumatic-systems",
    title: "Pnomatik Sistemler",
    image: "/images/product-6.jpg",
    description:
      "Endustriyel hava kompresorleri ve pnomatik takimlama cozumleri.",
  },
];

// ---------- IS ORTAKLARI ----------
export const partners = [
  { name: "Siemens", logo: "/images/partner-siemens.svg" },
  { name: "Bosch Rexroth", logo: "/images/partner-bosch.svg" },
  { name: "ABB Robotics", logo: "/images/partner-abb.svg" },
  { name: "Fanuc", logo: "/images/partner-fanuc.svg" },
  { name: "Mitsubishi Electric", logo: "/images/partner-mitsubishi.svg" },
  { name: "Schneider Electric", logo: "/images/partner-schneider.svg" },
];

// ---------- ISTATISTIKLER ----------
export const stats = [
  { value: "37+", label: "Yillik Deneyim" },
  { value: "40+", label: "Ihracat Ulkesi" },
  { value: "1.200+", label: "Teslim Edilen Makine" },
  { value: "%98", label: "Musteri Memnuniyeti" },
];

// ---------- KURUMSAL ----------
export const corporate = {
  about: {
    title: "Hakkimizda",
    subtitle: "Endustriyel Mukemmeliyetin Mirasi",
    image: "/images/about.jpg",
    content: [
      "1987 yilinda Ankara, Turkiye'de kurulan GuneyMak, kucuk bir atolyeden hassas endustriyel makine uretiminde dunya capinda taninir bir uretici haline gelmistir. Yolculugumuz, her seyimizin temel tasi olan kaliteye olan baglilgimizla basladi.",
      "Bugn, 25.000 m\u00B2'lik son teknoloji uretim tesisimiz, uretim teknolojisinin en yenilerine ev sahipligi yapmaktadir. 350'den fazla muhendis ve teknisyenimizden olusan ekibimiz, endustriyel makinelerin sinirlarini zorlamak icin yorulmadan calismaktadir.",
      "Otomotiv, havacilik, savunma, enerji ve genel imalat sektorlerindeki musterilerimize hizmet veriyoruz. Tesisimizden cikan her makine, hassasiyet, guvenilirlik ve olagnustu satis sonrasi destek vaadimizi tasimaktadir.",
    ],
  },
  vision: {
    title: "Vizyon ve Misyon",
    vision: {
      heading: "Vizyonumuz",
      text: "Uretim dunyasi icin hassasiyet, verimlilik ve surdurulebilirlikte yeni standartlar belirleyerek endustriyel makine inovasyonunda kuresel olcut noktasi olmak.",
    },
    mission: {
      heading: "Misyonumuz",
      text: "Amansiz inovasyon, odun verilmez kalite ve gercek dunya uretim zorluklarina derin bir anlayis yoluyla musterilerimizin operasyonel mukemmeliyete ulasmalarini saglayan endustriyel cozumler tasarlamak, uretmek ve sunmak.",
    },
    values: [
      {
        title: "Inovasyon",
        description:
          "Son teknolojiyi kullanarak cozumler gelistirmek icin Ar-Ge'ye surekli yatirim.",
      },
      {
        title: "Drstlk",
        description:
          "Seffaflik ve guven yoluyla kalici iliskiler kurmak.",
      },
      {
        title: "Mukemmellik",
        description:
          "Her bilesende, her surecte, her teslimatda kusursuzlugu takip etmek.",
      },
      {
        title: "Surdurulebilirlik",
        description:
          "Cevresel etkiyi azaltan enerji verimli makineler tasarlamak.",
      },
    ],
  },
  quality: {
    title: "Kalite Politikasi",
    subtitle: "Mukemmeliyete Bagliligimiz",
    content: [
      "GuneyMak'ta kalite bir departman degil, bir kulturdr. Ekibimizin her uyesi, ilk tasarimdan son teslimat ve sonrasina kadar islerinin kalitesinden sorumlu ve yetkilidir.",
      "Kalite Yonetim Sistemimiz ISO 9001:2015 standartlarina gore sertifikalandirilmistir ve surekli olarak denetlenmekte ve gelistirilmektedir. Istatistiksel proses kontrol, ilk parca muayenesi ve her makinede %100 final testi uyguluyoruz.",
    ],
    certifications: [
      "ISO 9001:2015 — Kalite Yonetimi",
      "ISO 14001:2015 — Cevre Yonetimi",
      "CE Isareti — Avrupa Uygunlugu",
      "TSE — Turk Standartlari Enstitusu",
    ],
  },
};

// ---------- URUNLER ----------
export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  category: string;
  categorySlug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  gallery: string[];
  specs: ProductSpec[];
}

export const products: Product[] = [
  {
    id: "hp-200t",
    slug: "hp-200t-hidrolik-pres",
    category: "Hidrolik Presler",
    categorySlug: "hydraulic-presses",
    name: "HP-200T Hidrolik Pres",
    shortDescription: "Metal sekillendirme icin 200 ton kapasiteli hidrolik pres.",
    description:
      "HP-200T, yksek hacimli metal sekillendirme operasyonlari icin tasarlanmis amiral gemimiz olan hidrolik presimizdir. Saglam dort kolon tasarimi, servo kontroll ram ve gelismis PLC sistemi ile esiz hassasiyet ve tekrarlanabilirlik sunar.",
    image: "/images/product-1.jpg",
    gallery: ["/images/product-1.jpg", "/images/hero-1.jpg"],
    specs: [
      { label: "Kapasite", value: "200 Ton" },
      { label: "Strok", value: "500 mm" },
      { label: "Tabla Boyutu", value: "800 x 600 mm" },
      { label: "Motor Gucu", value: "22 kW" },
      { label: "Agirlik", value: "8.500 kg" },
      { label: "Kontrol Sistemi", value: "Siemens S7-1500 PLC" },
    ],
  },
  {
    id: "cnc-v850",
    slug: "cnc-v850-freze-merkezi",
    category: "CNC Tezgahlar",
    categorySlug: "cnc-machines",
    name: "CNC-V850 Freze Merkezi",
    shortDescription: "Hassas parcalar icin dikey freze merkezi.",
    description:
      "CNC-V850 dikey freze merkezi, karmasik 3 eksenli islemeler icin hiz ve hassasiyeti bir araya getirir. Rijit dokum yapisi ve yksek hizli is mili, sertlestirilmis celiklerde bile titresimsiz kesim saglar.",
    image: "/images/product-3.jpg",
    gallery: ["/images/product-3.jpg", "/images/hero-2.jpg"],
    specs: [
      { label: "Tabla Boyutu", value: "850 x 500 mm" },
      { label: "Is Mili Hizi", value: "12.000 RPM" },
      { label: "Is Mili Motoru", value: "15 kW" },
      { label: "Takim Magazini", value: "24 Takim (ARM)" },
      { label: "Eksen Hareketi (X/Y/Z)", value: "850 / 500 / 550 mm" },
      { label: "Kontrol Sistemi", value: "Fanuc 0i-MF Plus" },
    ],
  },
  {
    id: "cs-3000",
    slug: "cs-3000-konveyor-sistemi",
    category: "Konveyor Sistemleri",
    categorySlug: "conveyor-systems",
    name: "CS-3000 Moduler Konveyor",
    shortDescription: "Uretim hatlari icin moduler bant konveyor.",
    description:
      "CS-3000, herhangi bir uretim hattina esnek entegrasyon icin tasarlanmis tam moduler bir konveyor sistemidir. Tak-calistir bolumleri, ihtiyaclariniz degistikce hizli yeniden yapilandirmaya olanak tanir.",
    image: "/images/product-2.jpg",
    gallery: ["/images/product-2.jpg"],
    specs: [
      { label: "Bant Genisligi", value: "300 - 1200 mm" },
      { label: "Hiz", value: "0,5 - 30 m/dk (Degisken)" },
      { label: "Yuk Kapasitesi", value: "500 kg/m'ye kadar" },
      { label: "Govde Malzemesi", value: "Anodize Aluminiyum / Paslanmaz Celik" },
      { label: "Tahrik", value: "SEW Eurodrive Disli Motor" },
      { label: "Kontrol", value: "Entegre PLC ve HMI" },
    ],
  },
  {
    id: "rw-arc6",
    slug: "rw-arc6-robotik-kaynakci",
    category: "Robotik Kaynak",
    categorySlug: "robotic-welding",
    name: "RW-ARC6 Robotik Kaynakci",
    shortDescription: "6 eksenli robotik kaynak istasyonu.",
    description:
      "RW-ARC6, MIG, MAG ve TIG uygulamalari icin yksek performansli 6 eksenli bir robot kol ile gelismis kaynak guc kaynaklarini bir araya getirir. Otomotiv, yapi ve agir ekipman imalati icin idealdir.",
    image: "/images/product-4.jpg",
    gallery: ["/images/product-4.jpg"],
    specs: [
      { label: "Eksen", value: "6" },
      { label: "Erisim", value: "2.010 mm" },
      { label: "Yuk Kapasitesi", value: "6 kg" },
      { label: "Tekrarlanabilirlik", value: "\u00B10,04 mm" },
      { label: "Kaynak Turleri", value: "MIG / MAG / TIG" },
      { label: "Kontrolcu", value: "ABB IRC5 Compact" },
    ],
  },
  {
    id: "lc-fiber4",
    slug: "lc-fiber4-lazer-kesici",
    category: "Lazer Kesim",
    categorySlug: "laser-cutting",
    name: "LC-Fiber4 Lazer Kesici",
    shortDescription: "Sac metal kesim icin 4kW fiber lazer.",
    description:
      "LC-Fiber4, hafif celik, paslanmaz celik, aluminyum, pirinc ve bakir isleyebilen yksek hizli bir fiber lazer kesim sistemidir. Ucan optik tasarimi, tum calisma alaninda duzgun kesim kalitesi saglar.",
    image: "/images/product-5.jpg",
    gallery: ["/images/product-5.jpg", "/images/hero-3.jpg"],
    specs: [
      { label: "Lazer Gucu", value: "4.000 W (IPG Fiber)" },
      { label: "Calisma Alani", value: "3.000 x 1.500 mm" },
      { label: "Maks. Kesim Hizi", value: "40 m/dk" },
      { label: "Konumlandirma Hassasiyeti", value: "\u00B10,03 mm" },
      { label: "Maks. Sac Kalinligi (Celik)", value: "20 mm" },
      { label: "Kontrol Sistemi", value: "Beckhoff CNC + Lantek CAM" },
    ],
  },
  {
    id: "pn-rotary",
    slug: "pn-vidalı-kompresor",
    category: "Pnomatik Sistemler",
    categorySlug: "pneumatic-systems",
    name: "PN-Vidalı Kompresor",
    shortDescription: "Endustriyel vidalı hava kompresoru.",
    description:
      "PN-Vidalı, zorlu endustriyel ortamlar icin surekli temiz, kuru basinli hava tedarigi saglar. Yagli vidalı tasarimi, olagnustu guvenilirlik ve enerji verimliligi sunar.",
    image: "/images/product-6.jpg",
    gallery: ["/images/product-6.jpg"],
    specs: [
      { label: "Guc", value: "37 kW" },
      { label: "Serbest Hava Debisi", value: "6,2 m\u00B3/dk" },
      { label: "Maks. Basinc", value: "13 bar" },
      { label: "Gurultu Seviyesi", value: "68 dB(A)" },
      { label: "Sogutma", value: "Hava Sogutmali" },
      { label: "Agirlik", value: "780 kg" },
    ],
  },
];

// ---------- ILETISIM FORM ALANLARI ----------
export const contactFormFields = [
  { name: "fullName", label: "Ad Soyad", type: "text", required: true },
  { name: "company", label: "Firma", type: "text", required: false },
  { name: "email", label: "E-posta Adresi", type: "email", required: true },
  { name: "phone", label: "Telefon Numarasi", type: "tel", required: false },
  {
    name: "subject",
    label: "Konu",
    type: "select",
    required: true,
    options: [
      "Genel Bilgi",
      "Teklif Talebi",
      "Teknik Destek",
      "Is Ortakligi",
    ],
  },
  { name: "message", label: "Mesajiniz", type: "textarea", required: true },
];
