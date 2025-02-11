import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    title: "The Future of AI in the Metaverse",
    image: "/blog-1.jpg",
    excerpt: "Explore how AI is shaping the future of the metaverse and virtual interactions.",
  },
  {
    title: "Top 5 Metaverse Apps for 2023",
    image: "/blog-2.jpg",
    excerpt: "Discover the most innovative and popular metaverse applications of the year.",
  },
  {
    title: "Building Immersive VR Experiences",
    image: "/blog-3.jpg",
    excerpt: "Learn the key principles behind creating engaging and immersive VR content.",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-gray-700 rounded-lg overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <Link href="#" className="text-cyan-400 hover:underline">
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

