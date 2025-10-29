import { Card } from "@/components/ui/card"
import { Heart, Users, BookOpen, Shield, Headphones, TrendingUp } from "lucide-react"
import Image from "next/image"

const useCases = [
  {
    icon: Heart,
    title: "Mental Health",
    description: "Early detection of depression, anxiety, and stress for proactive mental health support.",
    color: "text-red-500",
    image: "/images/mental-health.jpg",
  },
  {
    icon: Users,
    title: "Customer Care",
    description: "Monitor customer satisfaction and frustration levels in real-time during support calls.",
    color: "text-blue-500",
    image: "/images/customer-care.jpg",
  },
  {
    icon: BookOpen,
    title: "Education",
    description: "Track student engagement and emotional state to optimize learning experiences.",
    color: "text-yellow-500",
    image: "/images/education.jpg",
  },
  {
    icon: Shield,
    title: "Elderly Care",
    description: "Monitor well-being of seniors and detect signs of distress or health issues.",
    color: "text-green-500",
    image: "/images/elderly-care.jpg",
  },
  {
    icon: Headphones,
    title: "Workplace Wellness",
    description: "Support employee mental health and create psychologically safe work environments.",
    color: "text-purple-500",
    image: "/images/workplace-wellness.jpg",
  },
  {
    icon: TrendingUp,
    title: "Research & Analytics",
    description: "Gather insights on emotional patterns across populations for research and development.",
    color: "text-orange-500",
    image: "/images/research-analytics.jpg",
  },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Beyond Mental Health</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Versatile applications across industries and sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <Card
                key={index}
                className="bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={useCase.image || "/placeholder.svg"}
                    alt={useCase.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon size={24} className={useCase.color} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{useCase.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
