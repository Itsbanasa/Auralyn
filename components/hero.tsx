"use client"
import Link from "next/link";
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import Image from "next/image"
import TrialModal from "./trial-modal"
import DemoModal from "./demo-modal"

export default function Hero() {
  const [trialModal, setTrialModal] = useState(false)
  const [demoModal, setDemoModal] = useState(false)

  return (
    <>
      <section className="relative overflow-hidden bg-background pt-20 pb-32 md:pt-32 md:pb-48">
        {/* Gradient Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <Zap size={16} className="text-primary" />
                <span className="text-sm text-primary font-medium">Introducing Auralyn</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-black text-foreground leading-tight text-balance">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Auralyn
                  </span>
                  <br />
                  Listen, Think, Understand
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed text-balance">
                  Deep learning-based ambient listening that detects emotional patterns in speech and non-speech audio.
                  Early intervention for mental health, customer care, education, and beyond.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/analyze">
    <Button
      size="lg"
      className="bg-primary hover:bg-primary/90 text-primary-foreground"
    >
      Get Started
      <ArrowRight className="ml-2" size={18} />
    </Button>
  </Link>
  <Button size="lg" variant="outline" onClick={() => setDemoModal(true)}>
    Watch Demo
  </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <p className="text-2xl font-bold text-foreground">99.2%</p>
                  <p className="text-sm text-muted-foreground">Accuracy Rate</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">50ms</p>
                  <p className="text-sm text-muted-foreground">Latency</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">100%</p>
                  <p className="text-sm text-muted-foreground">Local Processing</p>
                </div>
              </div>
            </div>

            <div className="relative h-96 md:h-full">
              <Image
                src="/images/hero-dashboard.jpg"
                alt="Auralyn AI Dashboard showing real-time emotional analytics and monitoring"
                width={600}
                height={500}
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <TrialModal isOpen={trialModal} onClose={() => setTrialModal(false)} />
      <DemoModal isOpen={demoModal} onClose={() => setDemoModal(false)} />
    </>
  )
}
