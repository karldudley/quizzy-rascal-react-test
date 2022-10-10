import React, { useState, useEffect } from 'react'
import { socket } from '../../socket/index.js';

function Lobby() {
  const [gameDetails, setGameDetails] = useState([])
  const [playerDetails, setPlayerDetails] = useState([])

  useEffect(() => {
    socket.emit("lobby")
    socket.on("gameData", quiz => {
      setGameDetails(quiz.games)
      setPlayerDetails(quiz.players)
    })
  }, [])

  const lobbyPlayers = (player) => {
    return (
      <div key={player.playerName}>
        {player.playerName}
      </div>
    )
  }

  return (
    <div>
      <h1>Lobby</h1>
      <h2>The following players are currently waiting in the lobby:</h2>
      {playerDetails.map(lobbyPlayers)}
    </div>
  )
}

export default Lobby
