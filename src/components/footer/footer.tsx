import React from 'react'

export const Footer = () => {
  return (
    <footer className="w-full border-t border-border mt-auto">

      <div className="w-full mx-auto px-(--pad) py-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-muted">
        
        <div>
          © 2026 Graylen Bigelow. All rights reserved.
        </div>

        <div className="flex items-center gap-1">
          Designed &amp; Hand-coded · Next.js + Tailwind v4
        </div>

      </div>
    </footer>
  )
}