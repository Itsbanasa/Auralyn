"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Lock, Eye, Database, Shield, CheckCircle2, ChevronDown } from "lucide-react"

const privacyFeatures = [
  {
    icon: Lock,
    title: "Local Processing",
    description: "All audio analysis happens on-device. No data transmission to external servers.",
    details:
      "Your audio data never leaves your device. All machine learning models run locally on your hardware, ensuring complete privacy and zero data transmission to our servers.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Eye,
    title: "User Control",
    description: "Users have complete control over when and how their data is processed.",
    details:
      "You have full control over Auralyn's operation. Enable or disable monitoring anytime, choose what data to process, and manage all privacy settings directly from your device.",
    gradient: "from-cyan-500 to-teal-500",
    bgGradient: "from-cyan-500/10 to-teal-500/10",
  },
  {
    icon: Database,
    title: "Encrypted Storage",
    description: "Any stored data is encrypted with military-grade encryption standards.",
    details:
      "All data stored locally is encrypted using AES-256 encryption. Even if your device is compromised, your emotional data remains protected with military-grade security standards.",
    gradient: "from-teal-500 to-emerald-500",
    bgGradient: "from-teal-500/10 to-emerald-500/10",
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Meets healthcare privacy regulations and industry compliance standards.",
    details:
      "Auralyn meets HIPAA requirements for healthcare data protection. We maintain strict compliance with all healthcare privacy regulations and undergo regular security audits.",
    gradient: "from-emerald-500 to-blue-500",
    bgGradient: "from-emerald-500/10 to-blue-500/10",
  },
]

const complianceStandards = [
  {
    name: "GDPR",
    description: "EU data protection regulation",
    details: "General Data Protection Regulation compliance ensures your rights as an EU resident are protected.",
  },
  {
    name: "HIPAA",
    description: "Healthcare privacy law",
    details: "Health Insurance Portability and Accountability Act compliance for healthcare data protection.",
  },
  {
    name: "CCPA",
    description: "California privacy rights",
    details:
      "California Consumer Privacy Act ensures California residents have control over their personal information.",
  },
  {
    name: "ISO 27001",
    description: "Information security standard",
    details: "International standard for information security management systems and best practices.",
  },
]

export default function Privacy() {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null)
  const [expandedCompliance, setExpandedCompliance] = useState<number | null>(null)

  return (
    <section id="privacy" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4 text-balance">
            Privacy & Security First
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Your data is your own. We believe in privacy by design, not by default.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {privacyFeatures.map((feature, index) => {
            const Icon = feature.icon
            const isExpanded = expandedFeature === index

            return (
              <div key={index} className="group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
                <Card
                  onClick={() => setExpandedFeature(isExpanded ? null : index)}
                  className="relative bg-card/50 backdrop-blur border border-border/50 p-6 cursor-pointer hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center shadow-lg flex-shrink-0`}
                        >
                          <Icon size={24} className="text-white" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                        {feature.description}
                      </p>

                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-border/50 animate-in fade-in slide-in-from-top-2 duration-300">
                          <p className="text-foreground text-base sm:text-lg leading-relaxed font-medium">
                            {feature.details}
                          </p>
                        </div>
                      )}
                    </div>

                    <ChevronDown
                      size={24}
                      className={`flex-shrink-0 text-primary transition-transform duration-300 mt-1 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </Card>
              </div>
            )
          })}
        </div>

        <Card className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 border border-primary/30 p-6 sm:p-8 md:p-12 mb-12 hover:border-primary/50 transition-all duration-300 shadow-lg">
          <div className="max-w-3xl">
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Privacy Commitment</h3>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6">
              We are committed to protecting your privacy and maintaining your trust. Auralyn is designed with privacy
              as a core principle, not an afterthought. All audio processing happens locally on your device, and we
              never store or transmit raw audio data.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We comply with GDPR, HIPAA, CCPA, and other major privacy regulations. Your emotional data is sensitive
              and personal—we treat it with the utmost care and respect.
            </p>
          </div>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {complianceStandards.map((standard, index) => {
            const isExpanded = expandedCompliance === index

            return (
              <div
                key={index}
                onClick={() => setExpandedCompliance(isExpanded ? null : index)}
                className="group bg-card/50 backdrop-blur border border-border/50 rounded-lg p-4 sm:p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 cursor-pointer"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 flex-1">
                    <CheckCircle2
                      size={24}
                      className="text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground text-lg sm:text-xl">{standard.name}</h4>
                      <p className="text-muted-foreground text-base sm:text-lg mt-1">{standard.description}</p>

                      {isExpanded && (
                        <div className="mt-3 pt-3 border-t border-border/50 animate-in fade-in slide-in-from-top-2 duration-300">
                          <p className="text-foreground text-base sm:text-lg leading-relaxed font-medium">
                            {standard.details}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-accent transition-transform duration-300 mt-1 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
