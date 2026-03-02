"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { API_BASE_URL } from "@/lib/constants";

export default function WhatsappButton() {
  const [phone, setPhone] = useState("");

  useEffect(() => {
    fetch(`${API_BASE_URL}/settings`)
      .then((res) => res.json())
      .then((data) => {
        setPhone(data.phone || "");
      })
      .catch((err) =>
        console.error("WhatsApp bağlantısı için numara alınamadı", err)
      );
  }, []);

  if (!phone) return null;

  const whatsappUrl = `https://wa.me/${phone.replace(/\D/g, "")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[9999] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95 group flex items-center gap-2"
    >
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 font-bold">
        Bize Yazın
      </span>
      <MessageCircle size={30} fill="currentColor" />
    </a>
  );
}
