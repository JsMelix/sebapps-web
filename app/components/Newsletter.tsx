"use client"

import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log("Subscribed with email:", email)
    setSubscribed(true)
    setEmail("")
  }

  return (
    <section className="bg-purple-700 dark:bg-purple-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Subscribe to Our Newsletter</h2>
        {subscribed ? (
          <p className="text-center text-green-300">Thank you for subscribing!</p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:bg-gray-800"
            />
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-r-md transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

