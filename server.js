import http from "http";

const server = http.createServer((rquest, rsponse) => {
    rsponse.statusCode = 200;
    rsponse.setHeader("Content-Type", "text/plain");
    rsponse.end("Greetings, Earthlings! Take me to your leader.\n");
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
