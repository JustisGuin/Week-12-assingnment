"use client"
import { useState, useEffect } from "react"

import { getVideo, Video, updateVideo } from "@/app/connection"



export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  const [video, setVideo] = useState<Video | null>(null)

  useEffect(() => {
    async function queryVercel() {
      const videoId = parseInt((await params).slug)
      const fetchedVideo = await getVideo(videoId)
      if(fetchedVideo){
        const videosWithVisibility: Video = {
          ...fetchedVideo,
          isVisible: true
        }
        setVideo(videosWithVisibility)
      } else {
        setVideo(null)
      }
      
    }
    queryVercel()
  }, [params])

  if (video == null) {
    return <div>Fetching video information...</div>
  }

  


  return (
    <div>
      <h1>Edit {video.name}</h1>
      <form action={updateVideo} className="flex flex-col m-4 justify-items-center">
        <input name="id" type="hidden" value={video.id}></input>
        <label className={"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}>
          Title:
          <input name="name" defaultValue={video.name} className={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}></input>
        </label> 
        <label className={"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}>
          Votes:
          <input name="votes" defaultValue={video.votes} className={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}></input>
        </label>
        <label className={"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}>
          Length Of Video:
          <input name="length" defaultValue={video.length} className={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}></input>
        </label>
        <button type="submit" className="bg-secondary p-4 w-48 my-4 mx-auto rounded-lg">
          Save Changes
        </button>
      </form>
    </div>
  )
}