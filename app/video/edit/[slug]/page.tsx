"use client"
import { useState, useEffect } from "react"

import { getVideo, updateVideo, Video } from "@/app/connection"


export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  const [video, setVideo] = useState<Video | null>(null)

  useEffect(() => {
    async function queryVideo() {
      const videoId = parseInt((await params).slug)
      setVideo(await getVideo(videoId))
    }
    queryVideo()
  }, [])

  if (video == null) {
    return <div>Fetching video information...</div>
  }


  const inputClass = "block mx-8 px-1 bg-secondary"
  const labelClass = "block text-center flex flex-col p-4"

  return (
    <div>
      <h1>Edit "{video.name}"</h1>
      <form action={updateVideo} className="flex flex-col m-4 justify-items-center">
        <input name="id" type="hidden" value={video.id}></input>
        <label className={labelClass}>
          Title:
          <input name="name" defaultValue={video.name} className={inputClass}></input>
        </label> 
        <label className={labelClass}>
          Votes:
          <input name="votes" defaultValue={video.votes} className={inputClass}></input>
        </label>
        <label className={labelClass}>
          Runtime (in seconds):
          <input name="length" defaultValue={video.length} className={inputClass}></input>
        </label>
        <button type="submit" className="bg-secondary p-4 w-48 my-4 mx-auto rounded-lg">
          Save Changes
        </button>
      </form>
    </div>
  )
}