const http = require("http");
const doOnIncoming = require("./routes");

const server = http.createServer(doOnIncoming);
server.listen(80, () => {
  console.log("server started and running...");
});
