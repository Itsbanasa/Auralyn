"use client"
import { X, BookOpen, Users, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LearnMoreModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LearnMoreModal({ isOpen, onClose }: LearnMoreModalProps) {
  if (!isOpen) return null

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      desc: "50ms latency for real-time emotional detection",
    },
    {
      icon: Shield,
      title: "Privacy First",
      desc: "100% local processing, no data sent to servers",
    },
    {
      icon: Users,
      title: "Scalable",
      desc: "Support millions of concurrent users",
    },
    {
      icon: BookOpen,
      title: "Well Documented",
      desc: "Comprehensive API documentation and guides",
    },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative bg-background border border-border rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-primary/20 to-accent/20 border-b border-border p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Learn More About Auralyn</h2>
            <p className="text-sm text-muted-foreground mt-1">Discover the power of emotional intelligence</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-background/50 rounded-lg transition-colors">
            <X size={24} className="text-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Overview */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">What is Auralyn?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Auralyn is a deep learning-based ambient listening model that understands both speech and non-speech audio
              to detect emotional states in real-time. It works silently in the background, providing early intervention
              for mental health, customer care, education, and beyond.
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div
                    key={idx}
                    className="p-4 bg-card/50 border border-border/50 rounded-lg hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <Icon size={24} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">{feature.title}</p>
                        <p className="text-sm text-muted-foreground mt-1">{feature.desc}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Use Cases */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Use Cases</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Mental Health Support",
                "Customer Care",
                "Education",
                "Elderly Care",
                "Workplace Wellness",
                "Research & Analytics",
              ].map((useCase, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 bg-card/30 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground text-sm">{useCase}</span>
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
