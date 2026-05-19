import React from 'react'

export const Footer = () => {
  return (
    <footer className="w-full border-t border-border mt-auto">
      {/* This wrapper applies your exact structural sizing rules:
        - py-8 adds vertical breathing room above and below the text lines.
        - px-[var(--pad)] aligns the margins perfectly with your upper blocks.
      */}
      <div className="w-full max-w-[1200px] mx-auto px-[var(--pad)] py-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-muted">
        
        {/* Left Side Ownership Branding */}
        <div>
          © 2026 Graylen Bigelow. All rights reserved.
        </div>

        {/* Right Side Build Engine Blueprint Signature */}
        <div className="flex items-center gap-1">
          Designed &amp; Hand-coded · Next.js + Tailwind v4
        </div>

      </div>
    </footer>
  )
}