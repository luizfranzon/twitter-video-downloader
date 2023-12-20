import { ArrowLineDown, CaretDoubleRight } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Button } from "../components/Button";
import axios from "axios";

export default function Home() {
  const [videoLink, setVideoLink] = useState("");
  const [videoData, setVideoData] = useState({});
  const [hasData, setHasData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchVideoData = async (event: FormEvent) => {
    event.preventDefault();

    try {
      setIsLoading(true)
      const response = await axios({
        method: 'post',
        url: "/api/video",
        data: {
          videoLink
        }
      });

      console.log(response.data)

      if (response.data.found == true) {
        setVideoData(response.data)
        window.location.href = response.data.media[0].url
      } else {
        alert("Vídeo não encontrado.")
      }

      setIsLoading(false)

    } catch {
      alert("Erro! Verifique o link e tente novamente.");
      setIsLoading(false)
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
          placeholder="https://twitter.com/i/status/1777593287627178151"
          value={videoLink}
          onChange={(event) => setVideoLink(event.target.value)}
          className="text-gray-100 text-sm lg:text-xl px-6 py-4 rounded bg-[#202024] border border-[#323238] outline-none focus:outline-blueTwitter w-[90%] md:w-[500px] lg:w-[600px]"
          type="text"
        />

        <Button type="submit" isLoading={isLoading} />
        <div className="mt-6 flex gap-2 flex-col md:flex-row">

        </div>
      </div>
    </form>
  );
}
