import React, { useState } from 'react'

const newsData = [
  {
    title: "New Anime Season Announced!",
    date: "2024-06-10",
    summary: "The highly anticipated new season of 'Samurai Quest' will premiere this fall.",
  },
  {
    title: "Award Winners Revealed",
    date: "2024-06-08",
    summary: "The annual Anime Awards crowned 'Starlight Dreams' as Anime of the Year.",
  },
  {
    title: "Exclusive Interview Released",
    date: "2024-06-05",
    summary: "Voice actor Yuki Tanaka shares insights on her latest role in 'Cyber Hearts'.",
  },
]

const News = () => {
  const [search, setSearch] = useState('')

  const filteredNews = newsData.filter(news =>
    news.title.toLowerCase().includes(search.toLowerCase()) ||
    news.summary.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="bg-[#181818] min-h-screen p-8 text-[#ffe066] font-sans">
      <h1 className="border-b-2 border-[#ffe066] pb-2 mb-8 text-[#ffe066] tracking-wider text-3xl font-bold">
        Anime News
      </h1>
      <input
        type="text"
        placeholder="Search news..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="p-3 rounded-md border-none mb-8 w-full max-w-md text-base bg-[#232323] text-[#ffe066] outline-none"
      />
      <div>
        {filteredNews.length === 0 ? (
          <div className="text-[#fffbe6]">No news found.</div>
        ) : (
          filteredNews.map((news, idx) => (
            <div
              key={idx}
              className="bg-[#232323] rounded-lg mb-6 p-6 shadow-md"
            >
              <h2 className="text-[#ffe066] mb-2 text-xl font-semibold">{news.title}</h2>
              <div className="text-[#bfae5a] text-sm mb-3">{news.date}</div>
              <p className="text-[#fffbe6]">{news.summary}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default News
