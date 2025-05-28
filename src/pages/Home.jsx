export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8 shadow-lg">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-yellow-400 drop-shadow-lg">
            Omini Anime News Hub
          </h1>
          <p className="text-base sm:text-lg text-gray-200 mt-3 max-w-xl">
            Stay updated with the latest anime news, releases, and reviews!
          </p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto mt-8 sm:mt-14 px-4 sm:px-8">
        <section className="mb-10">
          <h2 className="text-xl sm:text-3xl font-semibold mb-6 text-yellow-400">
            Latest Headlines
          </h2>
          <ul className="grid gap-6 sm:grid-cols-2">
            <li className="bg-gradient-to-r from-gray-800 to-gray-900 p-5 rounded-xl shadow-md border border-gray-700 hover:from-gray-900 hover:to-gray-800 transition-colors">
              <span className="block text-lg font-medium text-white drop-shadow">
                Attack on Titan Final Season airs this Fall!
              </span>
            </li>
            <li className="bg-gradient-to-r from-gray-800 to-gray-900 p-5 rounded-xl shadow-md border border-gray-700 hover:from-gray-900 hover:to-gray-800 transition-colors">
              <span className="block text-lg font-medium text-white drop-shadow">
                Demon Slayer: New movie announced for 2024!
              </span>
            </li>
            <li className="bg-gradient-to-r from-gray-800 to-gray-900 p-5 rounded-xl shadow-md border border-gray-700 hover:from-gray-900 hover:to-gray-800 transition-colors sm:col-span-2">
              <span className="block text-lg font-medium text-white drop-shadow">
                My Hero Academia Season 7 confirmed!
              </span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}