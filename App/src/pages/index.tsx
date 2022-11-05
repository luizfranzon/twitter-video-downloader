import { CaretDoubleRight, DownloadSimple } from "phosphor-react";
import { FormEvent, useState } from "react";

export default function Home() {
  const [videoLink, setVideoLink] = useState("");
  const [videoData, setVideoData] = useState([{url: ""}]);
  const [hasData, setHasData] = useState(false)

  const fetchVideoData = async (event: FormEvent) => {
    event.preventDefault();
    const response = await fetch(`/api/video?videoUrl=${videoLink}`);
    const data = await response.json();
    const downloadLinks = data.download
    setVideoData(downloadLinks);
    setHasData(true);
  };

  return (
    <form
      onSubmit={fetchVideoData}
      className="flex flex-col items-center"
    >
      <h1 className="text-blueTwitter text-5xl font-bold mt-8 flex items-center justify-center gap-4">
        Twitter video downloader <DownloadSimple weight="bold" size={50} />
      </h1>
      <div className="mt-8 flex items-center flex-col">
        <input
        required
          value={videoLink}
          onChange={(event) => setVideoLink(event.target.value)}
          className="text-gray-100 px-6 py-4 rounded bg-[#202024] border border-[#323238] text-sm outline-none focus:outline-blueTwitter w-[500px]"
          type="text"
        />
        <button className="text-2xl flex items-center gap-1 bg-blueTwitter py-2 px-8 rounded mt-6 text-white font-bold hover:bg-[#0F85D4] transition-colors">
          Baixar <CaretDoubleRight size={28} color="#ecf0f3" weight="bold" />
        </button>
        <div className="mt-6 flex gap-2">
          {hasData ? videoData.map(video => {
            console.log(video)
            return (
              <div className="flex items-center flex-col bg-blueTwitter p-3 rounded">
                <a href={video.url} className="text-white text-lg font-bold hover:underline" target="_blank" rel="noreferrer">Baixar em {video.dimension}</a>
              </div>
              
            )
          }) : <></>}
        </div>
      </div>
    </form>
  );
}
