"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const images = ["/carousel-1.jpg", "/carousel-2.jpg", "/carousel-3.jpg"]

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToImage = (index: number) => {
    setCurrentImage(index)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextImage()
    }, 5000)

    return () => clearInterval(timer)
  }, [nextImage]) // Added nextImage to dependencies

  return (
    <section id="showcase" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Proyectos</h2>
        <div className="relative max-w-3xl mx-auto">
          <Image
            src={images[currentImage] || "/placeholder.svg"}
            alt={`Showcase image ${currentImage + 1}`}
            width={800}
            height={400}
            className="rounded-lg"
          />
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            &#10094;
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            &#10095;
          </button>
          <div className="absolute bottom-4 left-0 right-0">
            <div className="flex justify-center space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-3 h-3 rounded-full ${currentImage === index ? "bg-white" : "bg-gray-400"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

