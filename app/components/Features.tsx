import { Cpu, HeadsetIcon as VrHeadset, Zap, Globe } from "lucide-react"

const features = [
  {
    icon: Cpu,
    title: "Advanced AI",
    description: "Cutting-edge artificial intelligence powering your metaverse experiences.",
  },
  {
    icon: VrHeadset,
    title: "Immersive VR",
    description: "Fully immersive virtual reality environments for unparalleled engagement.",
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Lightning-fast processing for smooth and responsive interactions.",
  },
  {
    icon: Globe,
    title: "Global Connectivity",
    description: "Connect with users worldwide in our expansive metaverse network.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our StreamLine Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg text-center">
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

