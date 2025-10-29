"use client"

import { X, Code2, BookOpen, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

interface APIModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function APIModal({ isOpen, onClose }: APIModalProps) {
  if (!isOpen) return null

  const endpoints = [
    {
      method: "POST",
      path: "/api/v1/analyze",
      desc: "Analyze audio for emotional state",
    },
    {
      method: "GET",
      path: "/api/v1/patterns/:userId",
      desc: "Get emotional patterns over time",
    },
    {
      method: "POST",
      path: "/api/v1/alerts",
      desc: "Create intervention alerts",
    },
    {
      method: "GET",
      path: "/api/v1/integrations",
      desc: "List available integrations",
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
            <h2 className="text-2xl font-bold text-foreground">API Documentation</h2>
            <p className="text-sm text-muted-foreground mt-1">Build with Auralyn's powerful API</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-background/50 rounded-lg transition-colors">
            <X size={24} className="text-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Quick Start */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Zap size={20} className="text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Quick Start</h3>
            </div>
            <div className="bg-card/50 border border-border/50 rounded-lg p-4 font-mono text-sm text-muted-foreground overflow-x-auto">
              <pre>{`npm install @auralyn/sdk

import { Auralyn } from '@auralyn/sdk'

const auralyn = new Auralyn({
  apiKey: 'your-api-key'
})

const result = await auralyn.analyze(audioBuffer)`}</pre>
            </div>
          </div>

          {/* API Endpoints */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Code2 size={20} className="text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Main Endpoints</h3>
            </div>
            <div className="space-y-3">
              {endpoints.map((endpoint, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-card/50 border border-border/50 rounded-lg hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        endpoint.method === "POST" ? "bg-orange-500/20 text-orange-400" : "bg-blue-500/20 text-blue-400"
                      }`}
                    >
                      {endpoint.method}
                    </span>
                    <code className="text-sm font-mono text-foreground">{endpoint.path}</code>
                  </div>
                  <p className="text-sm text-muted-foreground">{endpoint.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen size={20} className="text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Resources</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { title: "Full Documentation", link: "#" },
                { title: "Code Examples", link: "#" },
                { title: "SDK Reference", link: "#" },
                { title: "Support", link: "#" },
              ].map((resource, idx) => (
                <a
                  key={idx}
                  href={resource.link}
                  className="p-3 bg-card/30 border border-border/50 rounded-lg hover:border-primary/50 transition-colors text-foreground hover:text-primary text-sm font-medium"
                >
                  {resource.title} →
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4 space-y-3">
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Get API Key</Button>
            <Button variant="outline" className="w-full bg-transparent" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
