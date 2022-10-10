import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

import { socket } from '../../socket/index.js';


function Welcome() {
  const navigate = useNavigate()
  const [socketId, setSocketId] = useState('')

  //Room state
  const [playerName, setPlayerName] = useState('')
  const [roomName, setRoomName] = useState('')


  const handleCreate = () => {
    // also have question details here
    const gameDetails =  {
      roomName,
      playerName
    }
    
    // implement check room name is available
    if (roomName !== "") {
      // socket.emit("join", roomName)
      socket.emit("create", gameDetails, (res) => {

        console.log("socket response", res);

        if (res.code === "success") {
          navigate('/lobby')
        } else {
            setRoomName('');
        }
      });
    }
  }

  const handleJoin = () => {
    const gameDetails =  {
      roomName,
      playerName
    }
    
    // implement check room name is available
    if (roomName !== "") {
      socket.emit("join", gameDetails, (res) => {
        
        console.log("socket response", res);

        if (res.code === "success") {
          navigate('/lobby')
        } else {
            setRoomName('');
        }
      })

      navigate('/lobby')
    }
  }

  useEffect(() => {
    socket.on('assign-id', id => setSocketId(id))
  }, [])

  return (
    <div className="Welcome">
      <h1>Connected to socket: {socketId.id}</h1>

      <label htmlFor="playerName">Name</label>
      <input 
        id="playerName" 
        value={playerName} 
        onChange={(e) => {
            setPlayerName(e.target.value)
            }
        }
        type="text" />

      <label htmlFor="roomName">Room</label>
      <input 
        id="roomName" 
        value={roomName} 
        onChange={(e) => {
            setRoomName(e.target.value)
            }
        }
        type="text" />
    
        <button onClick={handleCreate}>Create</button>
        <button onClick={handleJoin}>Join</button>

    </div>
  )
}

export default Welcome
