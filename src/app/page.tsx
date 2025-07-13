import React from "react";
import ImageSlider from "./components/ImageSlider";


export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-start justify-start p-8 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/back.jpg')",
      }}
    >
      <nav className="w-full">
        <div className="flex items-center justify-between mb-8 w-full">
          <div className="text-2xl font-bold">NA®G</div>

          <ul className="flex space-x-4 absolute left-1/2 transform -translate-x-1/2">
            <li>
              <a href="#" className="text-base font">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-base font">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-base font">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="text-base font">
                Contact
              </a>
            </li>
          </ul>

          <button className="text-base font flex items-center gap-2">
            Book a call
            <svg
              className="w-4 h-4"
              fill="currentColor"
              stroke="none"
              viewBox="0 0 24 24"
            >
              <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-full h-full mt-8 p-8 gap-8">
        {/* Vertical Text - hidden on smaller screens */}
        <div className="hidden lg:flex absolute left-8 top-32 h-full items-center">
          <div className="flex h-full gap-4  items-center flex-col">
            <div className="writing-mode-vertical text-sm tracking-wider text-gray-500">
              2025
            </div>

            <div className="w-px bg-gray-300 h-3/5"></div>
            <div className="writing-mode-vertical text-sm tracking-wider text-gray-500 uppercase">
              Portfolio
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left w-full lg:w-1/2 lg:pl-64">
          <div className="flex flex-col lg:flex-row justify-start gap-8 items-center lg:items-start mb-8 w-full pl-4">
            <div>
              <h2 className="text-5xl font-medium">200+</h2>
              <h3 className="text-lg ">Projects Completed</h3>
            </div>
            <div>
              <h2 className="text-5xl font-medium">100+</h2>
              <h3 className="text-lg ">Happy Clients</h3>
            </div>
          </div>
          <h1 className="text-8xl md:text-[150px] font-medium">Hello</h1>
          <div className="flex flex-col items-center lg:items-start ">
            <p className="text-lg font-semibold">I'm a passionate developer.</p>
            <p className="text-2xl font-bold mt-2">Martin</p>
          </div>
        </div>

        {/* Image */}
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2">
          <img
            src="/Avatar.png"
            alt="Martin"
            className="h-300 w-auto object-cover object-center grayscale"
          />
        </div>
      </div>
      <section>
        <div className="relative min-h-screen bg-gray-50 p-8 md:p-16 lg:p-24">
          <div className="absolute bottom-16 left-1/4 -translate-x-1/2 opacity-20 md:bottom-24 md:left-1/3 lg:bottom-32 lg:left-1/4">
            <svg
              width="150"
              height="150"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-auto w-32 -rotate-45 text-gray-400 md:w-48 lg:w-64"
            >
              <path
                d="M17.25 8.25L21 12M21 12L17.25 15.75M21 12H3"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 xl:gap-24">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                About Me
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                I'm specialize in turning complex problems into elegant
                solutions. My approach blends creativity with strategic thinking
                to deliver designs that not only look great but work seamlessly.
                Ready to start your next project?
              </p>
            </div>

            <div className="lg:col-span-1 flex flex-col items-center justify-start gap-8">
              <div className="flex w-full max-w-sm flex-col items-center rounded-lg bg-white p-6 shadow-md md:p-8">
                <div className="mb-4 rounded-full bg-gray-100 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-8 w-8 text-gray-700"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 21V3M15.75 18H8.25M15.75 6H8.25M6 9h12M6 15h12"
                    />
                  </svg>
                </div>
                <p className="text-4xl font-bold text-gray-900 md:text-5xl">
                  120%
                </p>
                <p className="mt-2 text-center text-sm text-gray-500">
                  Average increase in client engagement in the first 6 months
                </p>
              </div>

              <div className="w-full max-w-sm rounded-lg bg-white p-0 shadow-md">
                <img
                  src="/portrait-defaut.jpg"
                  alt="Smiling man"
                  className="h-auto w-full rounded-lg object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-1 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <img
                  src="/portrait-defaut.jpg"
                  alt="Close-up of smiling man"
                  className="h-48 w-auto object-cover object-center"
                />
               
                <p className="text-lg text-gray-700">
                  With 4+ years of experience, I specialize in creating
                  intuitive, user-focused designs that solve real-world problems
                  and deliver seamless digital experiences.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-700">
                  +
                </div>
                <p className="text-lg text-gray-700">
                  I thrive on working closely with clients, blending creativity
                  with strategy to bring their vision to life through
                  thoughtful, impactful design solutions.
                </p>
              </div>
            </div>

            <div className="absolute right-8 top-8 h-24 w-24 overflow-hidden rounded-full shadow-lg md:right-16 md:top-16 md:h-32 md:w-32 lg:right-24 lg:top-24 lg:h-40 lg:w-40"></div>
          </div>
        </div>
      </section>
      <ImageSlider id={""} title={""} subtitle={""} imageUrl={""} />
    </main>
    
  );
}
