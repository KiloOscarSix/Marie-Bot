import http from "http"
import {Axel} from "../client";

export default function init(client: Axel) {
    const server = http.createServer((request) => {
        console.log("Got request!")

        if (request.method == "POST") {
            let body = ""
            request.on("data", data => {
                body += data
            })
            request.on("end", () => {
                console.log(body)
                // const jsonContent: ILovenseConnection = JSON.parse(body)
                // client.connectedUsers.set(jsonContent.uid, jsonContent)
            })
        }
    })

    server.listen(8443)
    console.log("Server running on port 8443")
}

