"use client"
import { X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface DemoModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null)

  if (!isOpen) return null

  const demoFeatures = [
    {
      title: "Real-time Detection",
      desc: "Live emotional state analysis",
      details:
        "Auralyn analyzes audio patterns and vocal characteristics to detect emotional states in real-time with 99.2% accuracy. The system processes audio locally on your device for maximum privacy.",
    },
    {
      title: "Stress Indicators",
      desc: "Early warning signs identification",
      details:
        "Detects subtle stress markers including voice pitch changes, speech rate variations, and breathing patterns. Early identification enables proactive support before stress escalates.",
    },
    {
      title: "Pattern Recognition",
      desc: "Historical emotional trends",
      details:
        "Tracks emotional patterns over time to identify recurring triggers and cycles. Machine learning models adapt to individual baselines for personalized accuracy.",
    },
    {
      title: "Smart Interventions",
      desc: "Automated support triggers",
      details:
        "Automatically suggests interventions based on detected emotional states. Connects with AI chatbots or human counselors when needed for immediate support.",
    },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative bg-background border border-border rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-primary/20 to-accent/20 border-b border-border p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Auralyn Demo Features</h2>
            <p className="text-sm text-muted-foreground mt-1">Click on any feature to learn more</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-background/50 rounded-lg transition-colors">
            <X size={24} className="text-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Explore Demo Features</h3>
            <div className="space-y-3">
              {demoFeatures.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-border/50 rounded-lg overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setExpandedFeature(expandedFeature === idx ? null : idx)}
                    className="w-full p-4 bg-card/50 hover:bg-card/80 transition-colors flex items-center justify-between group"
                  >
                    <div className="text-left">
                      <p className="font-semibold text-foreground text-base">{item.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-accent transition-transform duration-300 flex-shrink-0 ml-4 ${
                        expandedFeature === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expandedFeature === idx && (
                    <div className="px-4 py-4 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-border/50 animate-in fade-in duration-300">
                      <p className="text-sm text-foreground leading-relaxed">{item.details}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4 space-y-3">
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Start Your Free Trial
            </Button>
            <Button variant="outline" className="w-full bg-transparent" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
