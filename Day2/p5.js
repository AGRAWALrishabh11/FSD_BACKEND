const http = require("http");
const fs = require("fs/promises");

const server = http.createServer(async (reg, res) => {
    const data = await fs.readFile("./data.json", "utf-8");
    const users = JSON.parse(data);
    const names = users.map(user => user.name);
  
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(names));
});

server.listen(9010, (err) => {
  if (err) console.log("Error: " + err);
  console.log("Server is running at http://localhost:9010/");
});