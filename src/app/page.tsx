export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-8 bg-cover bg-center bg-no-repeat"
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
      <header>
        <h1 className="text-9xl font">Hello</h1>
      </header>
    </main>
  );
}
