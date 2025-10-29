"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import TrialModal from "./trial-modal"

export default function CTA() {
  const [trialModal, setTrialModal] = useState(false)

  return (
    <>
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/20 to-accent/20 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Zap size={16} className="text-primary" />
            <span className="text-sm text-primary font-medium">Ready to Transform?</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Start Your Free Trial Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Join thousands of organizations using Auralyn to understand and support emotional well-being at scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => setTrialModal(true)}
            >
              Start Free Trial
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button size="lg" variant="outline">
              Schedule Demo
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            No credit card required. 14-day free trial. Cancel anytime.
          </p>
        </div>
      </section>

      <TrialModal isOpen={trialModal} onClose={() => setTrialModal(false)} />
    </>
  )
}
