"use client"

import { Card } from "@/components/ui/card"
import { Mic, Brain, AlertCircle, MessageSquare } from "lucide-react"
import { useState } from "react"
import LearnMoreModal from "./learn-more-modal"

const steps = [
  {
    icon: Mic,
    title: "Audio Capture",
    description: "Ambient audio is captured locally on the device with user consent.",
    number: "01",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-500",
    accentColor: "bg-blue-500",
  },
  {
    icon: Brain,
    title: "Deep Learning Analysis",
    description: "Advanced neural networks analyze speech patterns, tone, and non-speech audio cues.",
    number: "02",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-500",
    accentColor: "bg-purple-500",
  },
  {
    icon: AlertCircle,
    title: "Emotional Detection",
    description: "Real-time identification of emotional states and stress indicators.",
    number: "03",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    iconColor: "text-orange-500",
    accentColor: "bg-orange-500",
  },
  {
    icon: MessageSquare,
    title: "Smart Response",
    description: "Trigger appropriate interventions - from chatbot support to human counselor alerts.",
    number: "04",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    iconColor: "text-green-500",
    accentColor: "bg-green-500",
  },
]

export default function HowItWorks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [learnMoreModal, setLearnMoreModal] = useState(false)

  return (
    <>
      <section
        id="how-it-works"
        className="py-20 md:py-32 bg-gradient-to-b from-background via-background to-card/20 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30">
              <p className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                The Auralyn Pipeline
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              How Auralyn Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              A seamless pipeline from audio capture to intelligent intervention, powered by advanced deep learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-orange-500 to-green-500 opacity-20"></div>

            {steps.map((step, index) => {
              const Icon = step.icon
              const isHovered = hoveredIndex === index
              return (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Card
                    className={`relative bg-background border-2 p-6 h-full transition-all duration-300 overflow-hidden ${
                      isHovered ? `border-transparent shadow-2xl scale-105` : "border-border hover:border-border"
                    }`}
                  >
                    {/* Gradient background on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    ></div>

                    {/* Animated number badge */}
                    <div
                      className={`absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                        isHovered
                          ? `bg-gradient-to-br ${step.color} text-white shadow-lg scale-110`
                          : `${step.accentColor} text-white`
                      }`}
                    >
                      {step.number}
                    </div>

                    {/* Icon container with vibrant background */}
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${step.bgColor} ${
                        isHovered ? `bg-gradient-to-br ${step.color} bg-opacity-20` : ""
                      }`}
                    >
                      <Icon
                        size={28}
                        className={`${step.iconColor} transition-all duration-300 ${isHovered ? "scale-125" : ""}`}
                      />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3
                        className={`text-lg font-semibold mb-2 transition-all duration-300 ${
                          isHovered ? `bg-gradient-to-r ${step.color} bg-clip-text text-transparent` : "text-foreground"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                    </div>

                    {/* Animated border glow on hover */}
                    <div
                      className={`absolute inset-0 rounded-lg bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
                    ></div>
                  </Card>

                  {/* Connecting arrow between cards */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 -right-3 w-6 h-1 bg-gradient-to-r from-current to-transparent">
                      <div
                        className={`absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`}
                      ></div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              All processing happens locally on your device. Your privacy is our priority.
            </p>
            <div className="inline-flex gap-4 flex-wrap justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                Start Free Trial
              </button>
              <button
                onClick={() => setLearnMoreModal(true)}
                className="px-8 py-3 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <LearnMoreModal isOpen={learnMoreModal} onClose={() => setLearnMoreModal(false)} />
    </>
  )
}
