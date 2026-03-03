// ============================================================
// THEME CONFIGURATION
// Central place for design tokens referenced across the app.
// ============================================================

export const theme = {
  colors: {
    primary: "#0F3460",      
    primaryLight: "#1A4F8B", 
    secondary: "#E94560",     
    dark: "#16213E",          
    neutral: "#F8F9FA",       
    white: "#FFFFFF",
    text: "#1E293B",          
    textMuted: "#64748B",    
    border: "#E2E8F0",       
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
