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

      <div className="absolute left-8 top-32 h-full flex items-center">
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

      <div className="flex justify-between items-center w-full h-full mt-8 p-8">
        <div className="flex flex-col justify-center items-center  w-1/2">
          <h1 className="text-[150px] font-medium">Hello</h1>
          <div className="flex flex-col items-start">
            <p className="text-lg font-semibold">I'm a passionate developer.</p>
            <p className="text-2xl font-bold mt-2">Martin</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-1/2">
          <img src="/Avatar.png" alt="Martin" />
        </div>
      </div>
    </main>
  );
}
