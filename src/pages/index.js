import Image from "next/image"
import { Montserrat } from "next/font/google"
import Form from "@/components/Form"
import Button from "@/components/Button"
import Input from "@/components/Input"
import logo from "@/assets/logo.svg"
import { useEffect, useState } from "react"
import Loader from "@/components/Loader"
import { usePlayerContext } from "@/context/player"
import Room from "@/components/game/join/Room"
import Username from "@/components/game/join/Username"
import { useSocketContext } from "@/context/socket"
import toast from "react-hot-toast"
import { useRouter } from "next/router"

export default function Home() {
  const { player, dispatch } = usePlayerContext()
  const { socket } = useSocketContext()
  const router = useRouter()

  useEffect(() => {
    socket.on("game:errorMessage", (message) => {
      toast.error(message)
    })

    const onRejoinSuccess = ({ username, room }) => {
      dispatch({ type: "JOIN", payload: room })
      dispatch({ type: "LOGIN", payload: username })
      router.replace("/game")
    }

    socket.on("game:rejoinSuccess", onRejoinSuccess)

    return () => {
      socket.off("game:errorMessage")
      socket.off("game:rejoinSuccess", onRejoinSuccess)
    }
  }, [])

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center">
      <div className="absolute h-full w-full overflow-hidden">
        <div className="absolute -left-[15vmin] -top-[15vmin] min-h-[75vmin] min-w-[75vmin] rounded-full bg-white/10"></div>
        <div className="absolute -bottom-[15vmin] -right-[15vmin] min-h-[75vmin] min-w-[75vmin] rotate-45 bg-white/10"></div>
      </div>

      <Image src={logo} className="mb-6 h-32" alt="logo" />

      {!player ? <Room /> : <Username />}
    </section>
  )
}
