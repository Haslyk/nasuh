// ============================================================
// THEME CONFIGURATION
// Central place for design tokens referenced across the app.
// ============================================================

export const theme = {
  colors: {
    primary: "#0F3460",       // Steel Blue — headers, CTA, accents
    primaryLight: "#1A4F8B",  // Lighter variant for hovers
    secondary: "#E94560",     // Industrial Red — highlights, badges
    dark: "#16213E",          // Deep Navy — footers, overlays
    neutral: "#F8F9FA",       // Off-white — backgrounds
    white: "#FFFFFF",
    text: "#1E293B",          // Body text
    textMuted: "#64748B",     // Muted text
    border: "#E2E8F0",        // Borders
  },
  fonts: {
    heading: "var(--font-inter)",
    body: "var(--font-inter)",
  },
  borderRadius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
  },
  spacing: {
    section: "6rem",
    container: "1280px",
  },
} as const;
