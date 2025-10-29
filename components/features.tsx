import { Card } from "@/components/ui/card"
import { Brain, Shield, TrendingUp, Zap, Users, Lock } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Emotional Awareness",
    description:
      "Detect stress, anxiety, sadness, and other emotional states early with advanced deep learning models.",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30 hover:border-emerald-500/60",
  },
  {
    icon: Zap,
    title: "Non-Intrusive Support",
    description:
      "Works silently in the background without interrupting user experience or requiring explicit interaction.",
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30 hover:border-green-500/60",
  },
  {
    icon: TrendingUp,
    title: "Smart Monitoring",
    description: "Track emotional patterns over time with intelligent analytics and personalized insights.",
    color: "from-teal-400 to-cyan-500",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/30 hover:border-teal-500/60",
  },
  {
    icon: Users,
    title: "Seamless Integration",
    description: "Connect with AI chatbots, human counselors, and existing healthcare systems effortlessly.",
    color: "from-lime-400 to-green-500",
    bgColor: "bg-lime-500/10",
    borderColor: "border-lime-500/30 hover:border-lime-500/60",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "All audio processing happens locally on-device. Your data never leaves your control.",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-600/10",
    borderColor: "border-green-600/30 hover:border-green-600/60",
  },
  {
    icon: Shield,
    title: "Enterprise Scale",
    description: "Scalable architecture supporting millions of concurrent users with 99.99% uptime.",
    color: "from-emerald-400 to-teal-500",
    bgColor: "bg-emerald-400/10",
    borderColor: "border-emerald-400/30 hover:border-emerald-400/60",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30">
            <span className="text-sm font-semibold text-emerald-400">Powerful Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent mb-4 text-balance">
            Powerful Features for Every Use Case
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Built with cutting-edge AI technology and privacy-first principles to support your emotional wellness
            journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className={`${feature.bgColor} ${feature.borderColor} border-2 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20 p-8 group relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-green-500/0 group-hover:from-emerald-500/5 group-hover:to-green-500/5 transition-all duration-500"></div>

                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-125 transition-transform duration-500 shadow-lg`}
                  >
                    <Icon size={28} className="text-white" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {feature.description}
                  </p>

                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-emerald-400 to-green-400 group-hover:w-full transition-all duration-500"></div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
