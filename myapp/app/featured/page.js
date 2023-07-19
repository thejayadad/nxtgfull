import React from 'react'
import Link from 'next/link'
import { notFound } from "next/navigation";



const links = [
   {
      id: 1,
      src: "https://images.pexels.com/photos/5650634/pexels-photo-5650634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "hot-pic",
      category: "hot",
      title: "Hot Treats",
      description: "Fresh Out the Oven"        

      },
   {
      "id": 2,
      "src": "https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "alt": "cold-pic",
      "category": "cold",
      "title": "Chilled Delights",
      "description": "Perfect for a Hot Day"
  },
  {
      "id": 3,
      "src": "https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "alt": "custom",
      "category": "custom",
      "title": "Custom Creations",
      "description": "Perfect for an Day"
  },
   {
      "id": 4,
      "src": "https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "alt": "sprinkle",
      "category": "sprinkle",
      "title": "Sprinkled Treats",
      "description": "Double The Pleasure"
  },
   {
      "id": 5,
      "src": "https://images.pexels.com/photos/1200655/pexels-photo-1200655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "alt": "frost",
      "category": "frost",
      "title": "Frosted Creations",
      "description": "See the manay frosted flavors"
  },
  {
      "id": 6,
      "src": "https://images.pexels.com/photos/1200655/pexels-photo-1200655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "alt": "cake",
      "category": "cake",
      "title": "Cake Donuts",
      "description": "For The Cake Style Lovers"
  },
]




const Featured = () => {
 
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-12 mx-auto">
      <div className="flex flex-col text-center w-full">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Featured Items</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Check out a few of our tastiest treats below</p>
      </div>


      <div className="flex flex-wrap -m-4 mb-[180px]">
      {links.map((item) => (
          <Link href={`/featured/${item.category}`} className="lg:w-1/3 sm:w-1/2 p-4" key={item.id} >
          <div className="flex relative">
            <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={item.src} />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{item.category}</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{item.title}</h1>
              <p className="leading-relaxed">{item.description}</p>
            </div>
          </div>
        </Link>
      ))}
      </div>
    </div>
  </section>
  )
}

export default Featured