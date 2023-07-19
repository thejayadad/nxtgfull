import React from 'react'

const Hero = () => {
  return (
    <section>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.pexels.com/photos/1200655/pexels-photo-1200655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
      <p className="mb-5">The place to learn, share, and connect with donut lovers across the world. Login and sew what the frosting is about</p>
      <button className="btn btn-primary">Login</button>
    </div>
  </div>
</div>
    </section>
  )
}

export default Hero