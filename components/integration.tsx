"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import APIModal from "./api-modal"

const integrations = [
  { name: "AI Chatbots", icon: "🤖" },
  { name: "Human Counselors", icon: "👥" },
  { name: "Healthcare Systems", icon: "🏥" },
  { name: "CRM Platforms", icon: "📊" },
  { name: "Learning Management", icon: "📚" },
  { name: "IoT Devices", icon: "📱" },
]

export default function Integration() {
  const [apiModal, setApiModal] = useState(false)

  return (
    <>
      <section className="py-20 md:py-32 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                  Seamless Integration
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                  Connect Auralyn with your existing tools and platforms. Our flexible API and pre-built integrations
                  make deployment effortless.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">REST & WebSocket APIs</h3>
                    <p className="text-muted-foreground text-sm">
                      Real-time data streaming and batch processing capabilities
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Pre-built Connectors</h3>
                    <p className="text-muted-foreground text-sm">One-click integration with popular platforms</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Webhook Support</h3>
                    <p className="text-muted-foreground text-sm">Trigger custom actions based on emotional events</p>
                  </div>
                </div>
              </div>

              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
                onClick={() => setApiModal(true)}
              >
                View API Documentation
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {integrations.map((integration, index) => (
                <Card
                  key={index}
                  className="bg-background border border-border p-6 flex flex-col items-center justify-center text-center hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{integration.icon}</div>
                  <p className="text-sm font-medium text-foreground">{integration.name}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <APIModal isOpen={apiModal} onClose={() => setApiModal(false)} />
    </>
  )
}
