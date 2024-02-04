import React from 'react';

const ComponentLibrarySection: React.FC = () => {
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
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <a className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300" href="#">
              Get Started
            </a>
            <a className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300" href="#">
              Learn more
            </a>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 items-start">
          {/* Product 1 */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div className="p-6 flex flex-col space-y-4">
              <img src="/placeholder.svg" width="550" height="310" alt="Image" className="aspect-video overflow-hidden rounded-xl object-cover object-center" />
              <h2 className="text-2xl font-bold">Product 1</h2>
              <p className="text-gray-500 dark:text-gray-400">
                This is a description of the product. It's a placeholder but it
                could be anything.
              </p>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">View Details</button>
            </div>
          </div>
          {/* Product 2 */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div className="p-6 flex flex-col space-y-4">
              <img src="/placeholder.svg" width="550" height="310" alt="Image" className="aspect-video overflow-hidden rounded-xl object-cover object-center" />
              <h2 className="text-2xl font-bold">Product 2</h2>
              <p className="text-gray-500 dark:text-gray-400">
                This is a description of the product. It's a placeholder but it
                could be anything.
              </p>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentLibrarySection;