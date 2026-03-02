module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/data/content.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================
// ICERIK VERI KATMANI — "Mock API"
// Tum UI metinleri, gorseller ve konfigurasyonlar burada.
// ============================================================
// ---------- SITE GENELI ----------
__turbopack_context__.s([
    "contactFormFields",
    ()=>contactFormFields,
    "corporate",
    ()=>corporate,
    "featuredCategories",
    ()=>featuredCategories,
    "heroSlides",
    ()=>heroSlides,
    "navigation",
    ()=>navigation,
    "partners",
    ()=>partners,
    "products",
    ()=>products,
    "siteConfig",
    ()=>siteConfig,
    "stats",
    ()=>stats,
    "whyUsItems",
    ()=>whyUsItems
]);
const siteConfig = {
    companyName: "GuneyMak",
    tagline: "Hassas Muhendislik Cozumleri",
    phone: "+90 (312) 555 00 42",
    email: "info@guneymak.com",
    address: "Organize Sanayi Bolgesi, 2. Cadde No:15, 06935 Sincan / Ankara, Turkiye",
    workingHours: "Pzt - Cum: 08:00 - 18:00 | Cmt: 09:00 - 14:00",
    social: {
        linkedin: "https://linkedin.com/company/guneymak",
        instagram: "https://instagram.com/guneymak",
        youtube: "https://youtube.com/@guneymak"
    },
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.5!2d32.5!3d39.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDU0JzAwLjAiTiAzMsKwMzAnMDAuMCJF!5e0!3m2!1str!2str!4v1700000000000"
};
const navigation = {
    main: [
        {
            label: "Ana Sayfa",
            href: "/"
        },
        {
            label: "Kurumsal",
            href: "/corporate",
            children: [
                {
                    label: "Hakkimizda",
                    href: "/corporate/about"
                },
                {
                    label: "Vizyon ve Misyon",
                    href: "/corporate/vision"
                },
                {
                    label: "Kalite Politikasi",
                    href: "/corporate/quality"
                }
            ]
        },
        {
            label: "Urunler",
            href: "/products",
            children: [
                {
                    label: "Hidrolik Presler",
                    href: "/products/hydraulic-presses"
                },
                {
                    label: "CNC Tezgahlar",
                    href: "/products/cnc-machines"
                },
                {
                    label: "Konveyor Sistemleri",
                    href: "/products/conveyor-systems"
                },
                {
                    label: "Robotik Kaynak",
                    href: "/products/robotic-welding"
                },
                {
                    label: "Lazer Kesim",
                    href: "/products/laser-cutting"
                },
                {
                    label: "Pnomatik Sistemler",
                    href: "/products/pneumatic-systems"
                }
            ]
        },
        {
            label: "Iletisim",
            href: "/contact"
        }
    ],
    cta: {
        label: "Teklif Alin",
        href: "/contact?quote=true"
    }
};
const heroSlides = [
    {
        id: 1,
        image: "/images/hero-1.jpg",
        title: "1987'den Bu Yana Muhendislik Mukemmeliyeti",
        subtitle: "Dunya genelinde 40'tan fazla ulkeye yuksek hassasiyetli endustriyel makine tedarik ediyoruz.",
        cta: {
            label: "Urunleri Kesfet",
            href: "/products"
        }
    },
    {
        id: 2,
        image: "/images/hero-2.jpg",
        title: "Her Olcekte Hassasiyet",
        subtitle: "Mikro bilesenlarden agir hizmet endustriyel preslere kadar - olcebileceginiz kalite.",
        cta: {
            label: "Yeteneklerimiz",
            href: "/corporate/about"
        }
    },
    {
        id: 3,
        image: "/images/hero-3.jpg",
        title: "Inovasyon Endustriyle Bulusuyor",
        subtitle: "Modern uretim tesisleri icin son teknoloji otomasyon ve robotik cozumler.",
        cta: {
            label: "Bize Ulasin",
            href: "/contact"
        }
    }
];
const whyUsItems = [
    {
        icon: "Shield",
        title: "Kalite Guvencesi",
        description: "Her asamada titiz testlerle ISO 9001:2015 sertifikali surecler."
    },
    {
        icon: "Globe",
        title: "Global Erisim",
        description: "40'tan fazla ulkeye ihracat ve ozel satis sonrasi destek ekipleri."
    },
    {
        icon: "Settings",
        title: "Ozel Cozumler",
        description: "Spesifik uretim gereksinimleriniz icin kisiye ozel muhendislik."
    },
    {
        icon: "Clock",
        title: "Zamaninda Teslimat",
        description: "Karmasik projelerde teslim tarihlerine uyum konusunda kanitlanmis sicil."
    }
];
const featuredCategories = [
    {
        slug: "hydraulic-presses",
        title: "Hidrolik Presler",
        image: "/images/product-1.jpg",
        description: "Metal sekillendirme ve damgalama icin yuksek tonajli hidrolik pres sistemleri."
    },
    {
        slug: "cnc-machines",
        title: "CNC Tezgahlar",
        image: "/images/product-3.jpg",
        description: "Karmasik parcalar icin hassas CNC freze ve torna merkezleri."
    },
    {
        slug: "conveyor-systems",
        title: "Konveyor Sistemleri",
        image: "/images/product-2.jpg",
        description: "Otomatik konveyor ve malzeme tasima cozumleri."
    },
    {
        slug: "robotic-welding",
        title: "Robotik Kaynak",
        image: "/images/product-4.jpg",
        description: "Tutarli, yuksek kaliteli birlesimler icin otomatik kaynak istasyonlari."
    },
    {
        slug: "laser-cutting",
        title: "Lazer Kesim",
        image: "/images/product-5.jpg",
        description: "Hassas sac metal isleme icin yuksek hizli fiber lazer kesim."
    },
    {
        slug: "pneumatic-systems",
        title: "Pnomatik Sistemler",
        image: "/images/product-6.jpg",
        description: "Endustriyel hava kompresorleri ve pnomatik takimlama cozumleri."
    }
];
const partners = [
    {
        name: "Siemens",
        logo: "/images/partner-siemens.svg"
    },
    {
        name: "Bosch Rexroth",
        logo: "/images/partner-bosch.svg"
    },
    {
        name: "ABB Robotics",
        logo: "/images/partner-abb.svg"
    },
    {
        name: "Fanuc",
        logo: "/images/partner-fanuc.svg"
    },
    {
        name: "Mitsubishi Electric",
        logo: "/images/partner-mitsubishi.svg"
    },
    {
        name: "Schneider Electric",
        logo: "/images/partner-schneider.svg"
    }
];
const stats = [
    {
        value: "37+",
        label: "Yillik Deneyim"
    },
    {
        value: "40+",
        label: "Ihracat Ulkesi"
    },
    {
        value: "1.200+",
        label: "Teslim Edilen Makine"
    },
    {
        value: "%98",
        label: "Musteri Memnuniyeti"
    }
];
const corporate = {
    about: {
        title: "Hakkimizda",
        subtitle: "Endustriyel Mukemmeliyetin Mirasi",
        image: "/images/about.jpg",
        content: [
            "1987 yilinda Ankara, Turkiye'de kurulan GuneyMak, kucuk bir atolyeden hassas endustriyel makine uretiminde dunya capinda taninir bir uretici haline gelmistir. Yolculugumuz, her seyimizin temel tasi olan kaliteye olan baglilgimizla basladi.",
            "Bugn, 25.000 m\u00B2'lik son teknoloji uretim tesisimiz, uretim teknolojisinin en yenilerine ev sahipligi yapmaktadir. 350'den fazla muhendis ve teknisyenimizden olusan ekibimiz, endustriyel makinelerin sinirlarini zorlamak icin yorulmadan calismaktadir.",
            "Otomotiv, havacilik, savunma, enerji ve genel imalat sektorlerindeki musterilerimize hizmet veriyoruz. Tesisimizden cikan her makine, hassasiyet, guvenilirlik ve olagnustu satis sonrasi destek vaadimizi tasimaktadir."
        ]
    },
    vision: {
        title: "Vizyon ve Misyon",
        vision: {
            heading: "Vizyonumuz",
            text: "Uretim dunyasi icin hassasiyet, verimlilik ve surdurulebilirlikte yeni standartlar belirleyerek endustriyel makine inovasyonunda kuresel olcut noktasi olmak."
        },
        mission: {
            heading: "Misyonumuz",
            text: "Amansiz inovasyon, odun verilmez kalite ve gercek dunya uretim zorluklarina derin bir anlayis yoluyla musterilerimizin operasyonel mukemmeliyete ulasmalarini saglayan endustriyel cozumler tasarlamak, uretmek ve sunmak."
        },
        values: [
            {
                title: "Inovasyon",
                description: "Son teknolojiyi kullanarak cozumler gelistirmek icin Ar-Ge'ye surekli yatirim."
            },
            {
                title: "Drstlk",
                description: "Seffaflik ve guven yoluyla kalici iliskiler kurmak."
            },
            {
                title: "Mukemmellik",
                description: "Her bilesende, her surecte, her teslimatda kusursuzlugu takip etmek."
            },
            {
                title: "Surdurulebilirlik",
                description: "Cevresel etkiyi azaltan enerji verimli makineler tasarlamak."
            }
        ]
    },
    quality: {
        title: "Kalite Politikasi",
        subtitle: "Mukemmeliyete Bagliligimiz",
        content: [
            "GuneyMak'ta kalite bir departman degil, bir kulturdr. Ekibimizin her uyesi, ilk tasarimdan son teslimat ve sonrasina kadar islerinin kalitesinden sorumlu ve yetkilidir.",
            "Kalite Yonetim Sistemimiz ISO 9001:2015 standartlarina gore sertifikalandirilmistir ve surekli olarak denetlenmekte ve gelistirilmektedir. Istatistiksel proses kontrol, ilk parca muayenesi ve her makinede %100 final testi uyguluyoruz."
        ],
        certifications: [
            "ISO 9001:2015 — Kalite Yonetimi",
            "ISO 14001:2015 — Cevre Yonetimi",
            "CE Isareti — Avrupa Uygunlugu",
            "TSE — Turk Standartlari Enstitusu"
        ]
    }
};
const products = [
    {
        id: "hp-200t",
        slug: "hp-200t-hidrolik-pres",
        category: "Hidrolik Presler",
        categorySlug: "hydraulic-presses",
        name: "HP-200T Hidrolik Pres",
        shortDescription: "Metal sekillendirme icin 200 ton kapasiteli hidrolik pres.",
        description: "HP-200T, yksek hacimli metal sekillendirme operasyonlari icin tasarlanmis amiral gemimiz olan hidrolik presimizdir. Saglam dort kolon tasarimi, servo kontroll ram ve gelismis PLC sistemi ile esiz hassasiyet ve tekrarlanabilirlik sunar.",
        image: "/images/product-1.jpg",
        gallery: [
            "/images/product-1.jpg",
            "/images/hero-1.jpg"
        ],
        specs: [
            {
                label: "Kapasite",
                value: "200 Ton"
            },
            {
                label: "Strok",
                value: "500 mm"
            },
            {
                label: "Tabla Boyutu",
                value: "800 x 600 mm"
            },
            {
                label: "Motor Gucu",
                value: "22 kW"
            },
            {
                label: "Agirlik",
                value: "8.500 kg"
            },
            {
                label: "Kontrol Sistemi",
                value: "Siemens S7-1500 PLC"
            }
        ]
    },
    {
        id: "cnc-v850",
        slug: "cnc-v850-freze-merkezi",
        category: "CNC Tezgahlar",
        categorySlug: "cnc-machines",
        name: "CNC-V850 Freze Merkezi",
        shortDescription: "Hassas parcalar icin dikey freze merkezi.",
        description: "CNC-V850 dikey freze merkezi, karmasik 3 eksenli islemeler icin hiz ve hassasiyeti bir araya getirir. Rijit dokum yapisi ve yksek hizli is mili, sertlestirilmis celiklerde bile titresimsiz kesim saglar.",
        image: "/images/product-3.jpg",
        gallery: [
            "/images/product-3.jpg",
            "/images/hero-2.jpg"
        ],
        specs: [
            {
                label: "Tabla Boyutu",
                value: "850 x 500 mm"
            },
            {
                label: "Is Mili Hizi",
                value: "12.000 RPM"
            },
            {
                label: "Is Mili Motoru",
                value: "15 kW"
            },
            {
                label: "Takim Magazini",
                value: "24 Takim (ARM)"
            },
            {
                label: "Eksen Hareketi (X/Y/Z)",
                value: "850 / 500 / 550 mm"
            },
            {
                label: "Kontrol Sistemi",
                value: "Fanuc 0i-MF Plus"
            }
        ]
    },
    {
        id: "cs-3000",
        slug: "cs-3000-konveyor-sistemi",
        category: "Konveyor Sistemleri",
        categorySlug: "conveyor-systems",
        name: "CS-3000 Moduler Konveyor",
        shortDescription: "Uretim hatlari icin moduler bant konveyor.",
        description: "CS-3000, herhangi bir uretim hattina esnek entegrasyon icin tasarlanmis tam moduler bir konveyor sistemidir. Tak-calistir bolumleri, ihtiyaclariniz degistikce hizli yeniden yapilandirmaya olanak tanir.",
        image: "/images/product-2.jpg",
        gallery: [
            "/images/product-2.jpg"
        ],
        specs: [
            {
                label: "Bant Genisligi",
                value: "300 - 1200 mm"
            },
            {
                label: "Hiz",
                value: "0,5 - 30 m/dk (Degisken)"
            },
            {
                label: "Yuk Kapasitesi",
                value: "500 kg/m'ye kadar"
            },
            {
                label: "Govde Malzemesi",
                value: "Anodize Aluminiyum / Paslanmaz Celik"
            },
            {
                label: "Tahrik",
                value: "SEW Eurodrive Disli Motor"
            },
            {
                label: "Kontrol",
                value: "Entegre PLC ve HMI"
            }
        ]
    },
    {
        id: "rw-arc6",
        slug: "rw-arc6-robotik-kaynakci",
        category: "Robotik Kaynak",
        categorySlug: "robotic-welding",
        name: "RW-ARC6 Robotik Kaynakci",
        shortDescription: "6 eksenli robotik kaynak istasyonu.",
        description: "RW-ARC6, MIG, MAG ve TIG uygulamalari icin yksek performansli 6 eksenli bir robot kol ile gelismis kaynak guc kaynaklarini bir araya getirir. Otomotiv, yapi ve agir ekipman imalati icin idealdir.",
        image: "/images/product-4.jpg",
        gallery: [
            "/images/product-4.jpg"
        ],
        specs: [
            {
                label: "Eksen",
                value: "6"
            },
            {
                label: "Erisim",
                value: "2.010 mm"
            },
            {
                label: "Yuk Kapasitesi",
                value: "6 kg"
            },
            {
                label: "Tekrarlanabilirlik",
                value: "\u00B10,04 mm"
            },
            {
                label: "Kaynak Turleri",
                value: "MIG / MAG / TIG"
            },
            {
                label: "Kontrolcu",
                value: "ABB IRC5 Compact"
            }
        ]
    },
    {
        id: "lc-fiber4",
        slug: "lc-fiber4-lazer-kesici",
        category: "Lazer Kesim",
        categorySlug: "laser-cutting",
        name: "LC-Fiber4 Lazer Kesici",
        shortDescription: "Sac metal kesim icin 4kW fiber lazer.",
        description: "LC-Fiber4, hafif celik, paslanmaz celik, aluminyum, pirinc ve bakir isleyebilen yksek hizli bir fiber lazer kesim sistemidir. Ucan optik tasarimi, tum calisma alaninda duzgun kesim kalitesi saglar.",
        image: "/images/product-5.jpg",
        gallery: [
            "/images/product-5.jpg",
            "/images/hero-3.jpg"
        ],
        specs: [
            {
                label: "Lazer Gucu",
                value: "4.000 W (IPG Fiber)"
            },
            {
                label: "Calisma Alani",
                value: "3.000 x 1.500 mm"
            },
            {
                label: "Maks. Kesim Hizi",
                value: "40 m/dk"
            },
            {
                label: "Konumlandirma Hassasiyeti",
                value: "\u00B10,03 mm"
            },
            {
                label: "Maks. Sac Kalinligi (Celik)",
                value: "20 mm"
            },
            {
                label: "Kontrol Sistemi",
                value: "Beckhoff CNC + Lantek CAM"
            }
        ]
    },
    {
        id: "pn-rotary",
        slug: "pn-vidalı-kompresor",
        category: "Pnomatik Sistemler",
        categorySlug: "pneumatic-systems",
        name: "PN-Vidalı Kompresor",
        shortDescription: "Endustriyel vidalı hava kompresoru.",
        description: "PN-Vidalı, zorlu endustriyel ortamlar icin surekli temiz, kuru basinli hava tedarigi saglar. Yagli vidalı tasarimi, olagnustu guvenilirlik ve enerji verimliligi sunar.",
        image: "/images/product-6.jpg",
        gallery: [
            "/images/product-6.jpg"
        ],
        specs: [
            {
                label: "Guc",
                value: "37 kW"
            },
            {
                label: "Serbest Hava Debisi",
                value: "6,2 m\u00B3/dk"
            },
            {
                label: "Maks. Basinc",
                value: "13 bar"
            },
            {
                label: "Gurultu Seviyesi",
                value: "68 dB(A)"
            },
            {
                label: "Sogutma",
                value: "Hava Sogutmali"
            },
            {
                label: "Agirlik",
                value: "780 kg"
            }
        ]
    }
];
const contactFormFields = [
    {
        name: "fullName",
        label: "Ad Soyad",
        type: "text",
        required: true
    },
    {
        name: "company",
        label: "Firma",
        type: "text",
        required: false
    },
    {
        name: "email",
        label: "E-posta Adresi",
        type: "email",
        required: true
    },
    {
        name: "phone",
        label: "Telefon Numarasi",
        type: "tel",
        required: false
    },
    {
        name: "subject",
        label: "Konu",
        type: "select",
        required: true,
        options: [
            "Genel Bilgi",
            "Teklif Talebi",
            "Teknik Destek",
            "Is Ortakligi"
        ]
    },
    {
        name: "message",
        label: "Mesajiniz",
        type: "textarea",
        required: true
    }
];
}),
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/content.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Header() {
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openDropdown, setOpenDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onScroll = ()=>setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", onScroll);
    }, []);
    // Close mobile menu on route change (resize)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const close = ()=>setMobileOpen(false);
        window.addEventListener("resize", close);
        return ()=>window.removeEventListener("resize", close);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 left-0 right-0 z-50 transition-all duration-300", scrolled ? "bg-card/95 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-b border-border/40 transition-all duration-300 overflow-hidden", scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-muted-foreground hidden md:inline",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].workingHours
                        }, void 0, false, {
                            fileName: "[project]/components/header.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].phone}`,
                                    className: "flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].phone
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].email}`,
                                    className: "text-muted-foreground hover:text-foreground transition-colors hidden sm:inline",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].email
                                }, void 0, false, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/header.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/header.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/header.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-2 group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold text-lg transition-transform group-hover:scale-105",
                                children: "G"
                            }, void 0, false, {
                                fileName: "[project]/components/header.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col leading-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-bold tracking-tight text-foreground",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].companyName
                                    }, void 0, false, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].tagline
                                    }, void 0, false, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/header.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/header.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden lg:flex items-center gap-1",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navigation"].main.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                onMouseEnter: ()=>item.children && setOpenDropdown(item.label),
                                onMouseLeave: ()=>setOpenDropdown(null),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors", "text-foreground/80 hover:text-foreground hover:bg-accent"),
                                        children: [
                                            item.label,
                                            item.children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-3.5 w-3.5 transition-transform", openDropdown === item.label && "rotate-180")
                                            }, void 0, false, {
                                                fileName: "[project]/components/header.tsx",
                                                lineNumber: 102,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this),
                                    item.children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute top-full left-0 pt-2 transition-all duration-200", openDropdown === item.label ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-56 rounded-lg border border-border bg-card p-2 shadow-lg",
                                            children: item.children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: child.href,
                                                    className: "block rounded-md px-3 py-2.5 text-sm text-foreground/80 hover:bg-accent hover:text-foreground transition-colors",
                                                    children: child.label
                                                }, child.label, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 121,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.label, true, {
                                fileName: "[project]/components/header.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/header.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navigation"].cta.href,
                                className: "hidden sm:inline-flex items-center gap-2 rounded-md bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground shadow-sm hover:opacity-90 transition-opacity",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navigation"].cta.label
                            }, void 0, false, {
                                fileName: "[project]/components/header.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setMobileOpen(!mobileOpen),
                                className: "lg:hidden flex items-center justify-center h-10 w-10 rounded-md hover:bg-accent transition-colors",
                                "aria-label": "Toggle menu",
                                children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 152,
                                    columnNumber: 27
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 152,
                                    columnNumber: 55
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/header.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/header.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/header.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("lg:hidden overflow-hidden transition-all duration-300 bg-card border-t border-border", mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navigation"].main.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        onClick: ()=>!item.children && setMobileOpen(false),
                                        className: "flex items-center justify-between py-3 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors border-b border-border/50",
                                        children: [
                                            item.label,
                                            item.children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/header.tsx",
                                                lineNumber: 173,
                                                columnNumber: 35
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this),
                                    item.children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pl-4 flex flex-col",
                                        children: item.children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: child.href,
                                                onClick: ()=>setMobileOpen(false),
                                                className: "py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors",
                                                children: child.label
                                            }, child.label, false, {
                                                fileName: "[project]/components/header.tsx",
                                                lineNumber: 178,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 176,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.label, true, {
                                fileName: "[project]/components/header.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navigation"].cta.href,
                            onClick: ()=>setMobileOpen(false),
                            className: "mt-3 inline-flex items-center justify-center rounded-md bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground shadow-sm hover:opacity-90 transition-opacity",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navigation"].cta.label
                        }, void 0, false, {
                            fileName: "[project]/components/header.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/header.tsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/header.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/header.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7782878f._.js.map