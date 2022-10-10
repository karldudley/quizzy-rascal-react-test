import React, {useEffect, useState} from 'react'
import io from 'socket.io-client'
import { Link } from 'react-router-dom'

const socket = io.connect("http://localhost:8080")
// const socket = io.connect("https://quizzy-rascal-server.herokuapp.com/")

function Welcome() {

  //Room state
  const [playerName, setPlayerName] = useState('')
  const [roomName, setRoomName] = useState('')

  //Message states
  const [message, setMessage] = useState('')
  const [messageReceived, setMessageReceived] = useState('')

  const handleCreate = () => {
    // implement check room name is available
    if (roomName !== "") {
      socket.emit("join", roomName)
    }
  }

  const handleJoin = () => {
    // implement check room name is available
    if (roomName !== "") {
      socket.emit("join", roomName)
    }
  }

//   useEffect(() => {
//     socket.on("receiveMessage", (data) => {
//       setMessageReceived(data.message)
//     })
//   }, [socket])

  return (
    <div className="Welcome">
      {/* <input placeholder="Room Number..." onChange={(e) => {
        setRoom(e.target.value)
      }} />
      <button onClick={joinRoom}>Join Room</button>
      <input placeholder="Message..." onChange={(e) => {
        setMessage(e.target.value)
      }}/>
      <button onClick={sendMessage}>Send Message</button>
      <h1>Message:</h1>
      {messageReceived} */}

    
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
    
      <Link to="/create">
        <button onClick={handleCreate}>Create</button>
      </Link>
      <Link to="/lobby">
        <button onClick={handleJoin}>Join</button>
      </Link>

    </div>
  )
}

export default Welcome
