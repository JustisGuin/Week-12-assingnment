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
  isVisible: boolean
  
}





export async function updateVideo(formData: FormData) {
  await prisma.video.update({
    where: {
      id: Number(formData.get("id"))
    },
    data: {
      name: String(formData.get("name")),
      votes: Number(formData.get("votes")),
      length: Number(formData.get("runtime")),
    }
  })

  redirect("/videos")
}




export async function addVideo(formData: FormData){

  const prisma = new PrismaClient()
  await prisma.video.create({
    data: {
        name: String(formData.get('videoname')),
        url: '/videos/test.mp4',
        votes: 0,
        length: Number(formData.get('runtime') ),
    }

  })
  redirect('/videos')
}

export async function getVideos() {
  const videos = await prisma.video.findMany()

  return videos
}

export async function getVideo(id: number) {
  const video = await prisma.video.findFirst({
    where: {
      id: id,
    }
  })

  return video
}

export async function removeVideo(id: number) {
  await prisma.video.delete({
    where: {
      id: id,
    }
  })
}

