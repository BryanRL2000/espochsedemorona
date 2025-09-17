"use client"

import { useState, useEffect } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const eventDate = new Date("2025-10-14T00:00:00-05:00") // 14 de octubre 2025

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = eventDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const boxStyles = [
    "bg-red-600 text-white",
    "bg-green-600 text-white",
    "bg-white text-gray-800",
    "bg-red-600 text-white",
  ]

  return (
    <div className="relative bg-[#f1eded] text-white p-6 rounded-xl shadow-xl overflow-hidden">
      {/* Fondo de imagen local */}
      <div className="absolute inset-0 bg-[url('/investigacion-cientifica-en-laboratorio-moderno.jpg')] bg-cover bg-center opacity-60"></div>

      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-center mb-4 text-green-800 bg-white/95 rounded-lg py-2 px-4 shadow-md">
          Faltan para el evento:
        </h3>
        <div className="grid grid-cols-4 gap-4 text-center">
          {[
            { value: timeLeft.days, label: "Días", index: 0 },
            { value: timeLeft.hours, label: "Horas", index: 1 },
            { value: timeLeft.minutes, label: "Min", index: 2 },
            { value: timeLeft.seconds, label: "Seg", index: 3 },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`
                ${boxStyles[item.index]}
                backdrop-blur-sm rounded-lg p-3 border border-white/30 shadow-lg
                transition-all duration-300 ease-in-out
                hover:scale-105 hover:shadow-2xl hover:brightness-110
                cursor-pointer
              `}
            >
              <div className="text-2xl font-bold">{item.value}</div>
              <div className="text-sm font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}