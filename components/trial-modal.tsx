"use client"

import type React from "react"

import { useState } from "react"
import { X, Zap, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TrialModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function TrialModal({ isOpen, onClose }: TrialModalProps) {
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      alert("Trial started successfully! Check your email for details.")
      onClose()
    }, 1500)
  }

  const benefits = [
    "Full access to all features",
    "Real-time emotional analytics",
    "Integration with AI chatbots",
    "Priority support",
    "No credit card required",
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative bg-background border border-border rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
        {/* Gradient Header */}
        <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>

        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-primary/10 rounded-lg transition z-10">
          <X size={20} className="text-muted-foreground" />
        </button>

        {/* Content */}
        <div className="p-8">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <Zap size={14} className="text-primary" />
              <span className="text-xs text-primary font-semibold">LIMITED TIME OFFER</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Start Your Free Trial</h2>
            <p className="text-muted-foreground">14 days of unlimited access. No credit card required.</p>
          </div>

          {/* Benefits List */}
          <div className="space-y-3 mb-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check size={18} className="text-accent flex-shrink-0" />
                <span className="text-sm text-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Work email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-primary/5 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition text-foreground placeholder:text-muted-foreground"
            />

            {/* Company Input */}
            <input
              type="text"
              placeholder="Company name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
              className="w-full px-4 py-3 bg-primary/5 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition text-foreground placeholder:text-muted-foreground"
            />

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold py-3 rounded-lg transition disabled:opacity-50"
            >
              {isLoading ? "Starting Trial..." : "Start Free Trial"}
              {!isLoading && <ArrowRight className="ml-2" size={18} />}
            </Button>
          </form>

          {/* Footer Text */}
          <p className="text-center text-xs text-muted-foreground mt-6">
            By starting a trial, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  )
}
