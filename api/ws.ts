import { createServer } from "http"
import { io } from "@razzia/socket/index"

const server = createServer()

io.attach(server)

export default server