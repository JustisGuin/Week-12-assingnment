'use client'
import {addVideo} from "@/app/connection"



export default function addPage() {
  return (
    <form action={addVideo} className="flex flex-col m-4 justify-items-center">
      <label className={"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}>
        Title:
        <input name="videoname" className={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"} placeholder="Title of Video Name" ></input>
      </label> 

      <label className={"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}>
       Votes:
        <input name="votes" className={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"} placeholder="Votes"></input>
      </label>

      <label className={"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}>
        Length of Video:
        <input name="length" className={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"} placeholder="Length of video"></input>
      </label>

      <button type="submit" className="bg-grey-50 p-4 w-48 my-4 mx-auto rounded-lg">
        Add video
      </button>
    </form>
  )
}