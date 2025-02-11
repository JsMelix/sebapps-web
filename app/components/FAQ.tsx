"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What is the metaverse?",
    answer:
      "The metaverse is a collective virtual shared space, created by the convergence of virtually enhanced physical reality and physically persistent virtual space, including the sum of all virtual worlds, augmented reality, and the Internet.",
  },
  {
    question: "How does AI enhance the metaverse experience?",
    answer:
      "AI enhances the metaverse by providing more realistic and responsive virtual environments, powering intelligent NPCs, enabling natural language processing for communication, and personalizing user experiences based on behavior and preferences.",
  },
  {
    question: "What hardware do I need to access the metaverse?",
    answer:
      "While requirements may vary, typically you'll need a computer or smartphone with a good internet connection. For a more immersive experience, VR headsets like Oculus Quest or HTC Vive can be used. Some metaverse platforms may also be accessible through web browsers.",
  },
  {
    question: "Are there privacy concerns in the metaverse?",
    answer:
      "Yes, there are privacy concerns in the metaverse, including data collection, identity protection, and potential surveillance. It's important to be aware of the privacy policies of metaverse platforms and take steps to protect your personal information.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-white dark:bg-gray-700 rounded-lg shadow"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

