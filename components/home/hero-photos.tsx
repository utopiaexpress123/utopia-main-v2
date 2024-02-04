
import React from 'react';

const HeroPhoto = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
        <div className="flex flex-col justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Build your component library
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Beautifully designed components that you can copy and paste into
              your apps. Accessible. Customizable. Open Source.
            </p>
          </div>
          {/* Consider replacing <a> with Next.js <Link> for internal navigation */}
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <a className="..." href="#">
              Get Started
            </a>
            <a className="..." href="#">
              Learn more
            </a>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 items-start">
          {/* Product cards */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            {/* Product details */}
          </div>
          {/* Repeat for other products */}
        </div>
      </div>
    </section>
  );
};

export default HeroPhoto;