"use client"
import Link from "next/link"
import { useEffect, useState } from "react"

import { getVideos, removeVideo, Video } from "@/app/connection"


function VideoList() {
  const [videos, setVideos] = useState<Video[]>([])

  useEffect(() => {
    async function waitForVideos() {
      const videos = await getVideos()

      if (videos) {
        setVideos(videos)
      }
    }
    waitForVideos()
  },
  []
  )

  function hideVideo(id: number) {
    setVideos(videos.filter((video) => video.id != id))
  }

  if (!videos) {
    return (
      <div>
        <p>
          Videos loading, please wait...
        </p>
      </div>
    )
  }

  const videoEditUrl = "/videos/edit/"

  return (
    <div className="mx-4">
      <ul>
        {videos.map((video: Video) => (
          <li key={video.id} className="mx-2 flex border-b border-secondary">
            <Link href={videoEditUrl + video.id} className="flex-grow">
              {video.name}
            </Link>
            <button onClick={
              async () => {
                hideVideo(video.id)
                await removeVideo(video.id)
              }
            }>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default function Home() {
  return (
    <div>
      <h1 className="text-center font-semibold text-xl my-4">
        Video List
      </h1>
      <VideoList />
    </div>
  );
}