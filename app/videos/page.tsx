"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import { getVideos, Video } from "@/app/connection";

function VideoList() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    async function loadVideosFromVercel() {
      const fetchedVideos = await getVideos(); // Fetch videos from your API or source
      // Check if fetchedVideos is an array and map it to include isVisible
      const videosWithVisibility = (fetchedVideos || []).map(video => ({
        ...video,
        isVisible: true // Set isVisible to true for all fetched videos
      }));
      setVideos(videosWithVisibility); // Set the state with the updated videos
      setLoading(false); // Set loading to false after fetching
    }
    loadVideosFromVercel();
  }, []);

  // Render a loading state to avoid hydration errors
  if (loading) {
    return (
      <div>
        <p>Loading videos...</p> {/* Show loading message */}
      </div>
    );
  }

  const videoEditUrl = "/videos/edit/";
  
  function hideVideo(id: number) {
    setVideos(videos.map(video => 
      video.id === id ? { ...video, isVisible: false } : video
    ));
  }

  return (
    <div className="mx-4">
      <ul>
        {videos.filter(video => video.isVisible).map((video: Video) => (
          <li key={video.id} className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-black dark:divide-gray-700 mb-4 ">
            <div className="flex justify-between items-center ">
              <div className="relative group">
                <Link 
                  href={videoEditUrl + video.id}  
                  className="flex-grow pb-3 transition duration-200 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md p-2"
                >
                  {video.name}
                </Link>
                <span className="absolute left-1/2 transform -translate-x-1/2 mt-8 w-auto px-2 py-1 text-sm text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Click to edit
                </span>
              </div>
              <button onClick={() => hideVideo(video.id)} className="text-white-500 hover:text-red-500">
                Remove Video
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen">
      <h1 className="text-center font-semibold tracking-tight text-xl my-4">
        Video List
      </h1>
      <VideoList/>
    </div>
  );
}