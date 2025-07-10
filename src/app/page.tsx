export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-start justify-start p-8 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/back.jpg')",
      }}
    >
      {/* ...existing code... */}
      <nav className="w-full">
        <div className="flex items-center justify-between mb-8 w-full">
          <div className="text-2xl font-bold">NA®G</div>

          <ul className="flex space-x-4 absolute left-1/2 transform -translate-x-1/2">
            <li>
              <a href="#" className="text-lg font-semibold">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-lg font-semibold">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-lg font-semibold">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="text-lg font-semibold">
                Contact
              </a>
            </li>
          </ul>

          <button className="text-lg font-semibold flex items-center gap-2">
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
      <div className="relative px-6 lg:px-12 pt-12 lg:pt-20 flex justify-center">
        <div className="absolute left-8 top-32 h-full flex items-center">
          <div className="flex h-full gap-4 font-mono items-center flex-col">
            <div className="writing-mode-vertical text-sm tracking-wider text-gray-500">
              2025
            </div>
            {/* Vertical line */}
            <div className="w-px bg-gray-300 h-3/5"></div>
            <div className="writing-mode-vertical text-sm tracking-wider text-gray-500 uppercase">
              Portfolio
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mx-auto">
          {/* Left Content */}
          <div className="space-y-8 lg:pl-12 flex flex-col">
            {/* Statistics */}
            <div className="flex gap-12 mb-12">
              <div>
                <div className="text-4xl lg:text-5xl font-light text-black">
                  +200
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Project completed
                </div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-light text-black">
                  +50
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Startups raised
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-7xl lg:text-8xl xl:text-9xl font-light text-black leading-none">
                Hello
              </h1>
              <p className="text-lg text-gray-600 font-light">
                — It's Martin, your frontend developer
              </p>
            </div>
          </div>

          {/* Right Content - Portrait */}
          <div className="relative w-1/2">
            <div className="aspect-[3/4] relative overflow-hidden">
              <img
                src="/Avatar.png"
                alt="Martin"
                className="object-cover object-center grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
