"use client"
import { addVideo } from "@/app/connection"


export default function Home() {
  const inputClass = "block mx-8 px-1 bg-secondary"
  const labelClass = "block text-center flex flex-col p-4"

  return (
    <form action={addVideo} className="flex flex-col m-4 justify-items-center">
      <label className={labelClass}>
        Title:
        <input name="name" className={inputClass}></input>
      </label> 
      <label className={labelClass}>
        Initial Votes:
        <input name="votes" className={inputClass}></input>
      </label>
      <label className={labelClass}>
        Runtime (in seconds):
        <input name="length" className={inputClass}></input>
      </label>
      <button type="submit" className="bg-secondary p-4 w-48 my-4 mx-auto rounded-lg">
        Add video
      </button>
    </form>
  )
}