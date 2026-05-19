"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      {/* This wrapper is the direct fix. 
        px-[var(--pad)] grabs your original fluid padding from globals.css.
        max-w-[1200px] mx-auto forces the navbar layout to snap right into line with the sections below.
      */}
      <div className="w-full max-w-300 mx-auto px-(--pad) flex items-center justify-between h-20">
        
        {/* Brand Identity */}
        <Link href="/" className="flex items-center gap-2.5 font-mono text-[13px] tracking-wide text-foreground">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Graylen Bigelow / Frontend Developer
        </Link>

        {/* Center Anchored Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono text-muted">
          <Link href="/about" className="hover:text-foreground transition-colors">01 About</Link>
          <Link href="/experience" className="hover:text-foreground transition-colors">02 Work</Link>
          <Link href="/stack" className="hover:text-foreground transition-colors">03 Stack</Link>
          <Link href="/projects" className="hover:text-foreground transition-colors">04 Projects</Link>
        </nav>

        {/* Contact CTA */}
        <Link
          href="/contact" 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-foreground text-background text-xs font-medium transition-transform hover:-translate-y-0.5"
        >
          {/* Scalable Vector Graphics matching original email envelope badge profile asset */}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          Get in touch
        </Link>

      </div>
    </header>
  )
}