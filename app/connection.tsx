"use server"
import { redirect } from "next/navigation"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


export interface Video {
  id: number
  name: string
  url: string
  votes: number
  length: number
}


export async function getVideos() {
  const videos = await prisma.video.findMany()

  return videos
}


export async function addVideo(formData: FormData) {
  await prisma.video.create({
    data: {
      name: formData.get("name") as string,
      url: "/videos/test.mp4",
      votes: parseInt(formData.get("votes") as string),
      length: parseInt(formData.get("length") as string),
    }
  })

  redirect("/videos")
}


export async function getVideo(id: number) {
  const video = await prisma.video.findFirst({
    where: {
      id: id,
    }
  })

  //redirect
  return video
}


export async function updateVideo(formData: FormData) {
  await prisma.video.update({
    where: {
      id: parseInt(formData.get("id") as string),
    },
    data: {
      name: formData.get("name") as string,
      votes: parseInt(formData.get("votes") as string),
      length: parseInt(formData.get("length") as string),
    }
  })

  redirect("/videos")
}


export async function removeVideo(id: number) {
  await prisma.video.delete({
    where: {
      id: id,
    }
  })
}


// For debugging purposes
export async function printForm(formData: FormData) {
  console.log("Form submitted: ")
  console.log(formData)
}