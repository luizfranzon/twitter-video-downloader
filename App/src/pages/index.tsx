import { ArrowLineDown, CaretDoubleRight } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Button } from "../components/Button";
import { urlVideoDimensionFormater } from "../utils/urlVideoDimensionFormater";

export default function Home() {
  const [videoLink, setVideoLink] = useState("");
  const [videoData, setVideoData] = useState([{ url: "" }]);
  const [hasData, setHasData] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  const fetchVideoData = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true)

    try {
      const response = await fetch(`/api/video?videoUrl=${videoLink}`);
      const data = await response.json();
      const downloadLinks = data.download;
      setVideoData(downloadLinks);
      setHasData(true);
      setIsLoading(false)
    } catch {
      alert("Erro! Verifique o link e tente novamente.");
    }
  };
  return (
    <form
      onSubmit={fetchVideoData}
      className="flex flex-col items-center justify-center"
    >
      <h1 className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent text-3xl md:text-5xl lg:text-6xl font-bold mt-12 flex items-center justify-center gap-2 md:gap-4">
        Twitter video downloader{" "}
        <ArrowLineDown
          className="text-blueTwitter hidden md:inline lg:inline"
          weight="bold"
        />
      </h1>
      <div className="mt-8 flex items-center flex-col w-full">
        <input
          required
          placeholder="https://twitter.com/video/status/1589019979158479584"
          value={videoLink}
          onChange={(event) => setVideoLink(event.target.value)}
          className="text-gray-100 text-sm lg:text-xl px-6 py-4 rounded bg-[#202024] border border-[#323238] outline-none focus:outline-blueTwitter w-[90%] md:w-[500px] lg:w-[600px]"
          type="text"
        />
        
        <Button type="submit" isLoading={isLoading}/>
        <div className="mt-6 flex gap-2 flex-col md:flex-row">
          {hasData
            ? videoData.map((video) => {
                return (
                  <div
                    key={video.url}
                    className="flex items-center flex-col bg-blueTwitter p-3 rounded"
                  >
                    <a
                      href={video.url}
                      className="text-white text-lg font-bold hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Baixar em {urlVideoDimensionFormater(video.url)}
                    </a>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </form>
  );
}
