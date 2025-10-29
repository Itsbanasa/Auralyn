"use client"

import type React from "react"

import { useState } from "react"
import { X, Mail, Lock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  mode: "signin" | "signup"
}

export default function AuthModal({ isOpen, onClose, mode }: AuthModalProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      alert(`${mode === "signin" ? "Sign In" : "Sign Up"} successful!`)
      onClose()
    }, 1500)
  }

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
            <h2 className="text-3xl font-bold text-foreground mb-2">
              {mode === "signin" ? "Welcome Back" : "Join Auralyn"}
            </h2>
            <p className="text-muted-foreground">
              {mode === "signin" ? "Sign in to your account to continue" : "Create your account to get started"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-primary" size={20} />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 bg-primary/5 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition text-foreground placeholder:text-muted-foreground"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-primary" size={20} />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 bg-primary/5 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition text-foreground placeholder:text-muted-foreground"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold py-3 rounded-lg transition disabled:opacity-50"
            >
              {isLoading ? "Processing..." : mode === "signin" ? "Sign In" : "Create Account"}
              {!isLoading && <ArrowRight className="ml-2" size={18} />}
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-border"></div>
            <span className="text-xs text-muted-foreground">OR</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          {/* Social Buttons */}
          <div className="space-y-3">
            <button className="w-full py-3 px-4 border border-border rounded-lg hover:bg-primary/5 transition font-medium text-foreground">
              Continue with Google
            </button>
            <button className="w-full py-3 px-4 border border-border rounded-lg hover:bg-primary/5 transition font-medium text-foreground">
              Continue with Microsoft
            </button>
          </div>

          {/* Footer Text */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            {mode === "signin" ? (
              <>
                Don't have an account?{" "}
                <button className="text-primary hover:text-accent font-semibold transition">Sign up</button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button className="text-primary hover:text-accent font-semibold transition">Sign in</button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}
