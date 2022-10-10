import io from 'socket.io-client'

const socket = io.connect("http://localhost:8080")
// const socket = io.connect("https://quizzy-rascal-server.herokuapp.com/")

socket.on("connect", () => {
    // const dispatch = useDispatch()
    console.log(`user connected to the socket id ${socket.id}`);
    const socketId = socket.id; 
    // dispatch(setID(socketId));
});

export { socket };
