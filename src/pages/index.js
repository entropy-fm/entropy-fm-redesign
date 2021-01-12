import React from "react"

import Calendar from "../components/calendar"
import Player from "../components/player"

export default function Home() {
  return (
    <div>
      <div>Entropy FM</div>
      <Player />
      <Calendar />
    </div>
  )
}
