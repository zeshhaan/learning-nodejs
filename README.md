#### Intro

- JavaScript uses C++ to access computers internal features
- Node is simply a wrapper on top of C++ which we call in JS using some labels (or syntactic sugar) that in turn calls C++ functions/libraries such as
  `libuv` to access computers internal

#### Computer's Internal, Node/C++ and JS does these things...

1. Setup the actual HTTP feature of the **Node** that sets up **open socket** in the **computers internal**.

```javascript
const http = require("http");
http.createServer();
```

2. Several functions to auto run by passing it into createServer into **Node**, it will auto run if an inbound message arrives.

```javascript
function doOnIncoming(incomingData, functionsToSetOutgoingData) {
  // ...
}
```

3. Setup in the JS label, `server`, an object full of edit functions, that are Node edits, and when we run one of them, it directly links back to Node to setup port 80 which effects **computers internal**

```javascript
const server = http.createServer(doOnIncoming);
server.listen(80);
```

#### Links for future reference

[Net](https://nodejs.org/api/net.html#net_server_listen)  
[http](https://nodejs.org/api/http.html#http_http_createserver_options_requestlistener)  
[Streams](https://nodejs.org/api/stream.html#stream_types_of_streams)
