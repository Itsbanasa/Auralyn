"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import AuthModal from "./auth-modal"
import TrialModal from "./trial-modal"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: "signin" | "signup" }>({
    isOpen: false,
    mode: "signin",
  })
  const [trialModal, setTrialModal] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary rounded-xl blur-md opacity-75"></div>
              <div className="relative w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-lg">A</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Auralyn
              </span>
              <span className="text-xs text-muted-foreground font-medium">Emotional Intelligence</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition">
              How It Works
            </a>
            <a href="#use-cases" className="text-sm text-muted-foreground hover:text-foreground transition">
              Use Cases
            </a>
            <a href="#privacy" className="text-sm text-muted-foreground hover:text-foreground transition">
              Privacy
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => setAuthModal({ isOpen: true, mode: "signin" })}>
              Sign In
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90" onClick={() => setTrialModal(true)}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background/50 backdrop-blur">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-sm text-muted-foreground hover:text-foreground">
                Features
              </a>
              <a href="#how-it-works" className="block text-sm text-muted-foreground hover:text-foreground">
                How It Works
              </a>
              <a href="#use-cases" className="block text-sm text-muted-foreground hover:text-foreground">
                Use Cases
              </a>
              <a href="#privacy" className="block text-sm text-muted-foreground hover:text-foreground">
                Privacy
              </a>
              <div className="flex gap-2 pt-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-1"
                  onClick={() => setAuthModal({ isOpen: true, mode: "signin" })}
                >
                  Sign In
                </Button>
                <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90" onClick={() => setTrialModal(true)}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Modals */}
      <AuthModal
        isOpen={authModal.isOpen}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
        mode={authModal.mode}
      />
      <TrialModal isOpen={trialModal} onClose={() => setTrialModal(false)} />
    </>
  )
}
