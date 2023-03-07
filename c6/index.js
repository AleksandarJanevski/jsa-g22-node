const http = require("http");

const handler = (req, res) => {
  //2 parametri
  //   console.log(req.url);
  //   console.log(req.method);
  //   console.log(req.headers["user-agent"]);
  //   console.log("hello from server");
  //   let path = req.url;
  //   res.end(`Hello from path ${path}`);

  const [_, op, a, b] = req.url.split("/");
  console.log(op, a, b);

  let o;

  switch (op) {
    case "sobiranje":
      o = Number(a) + Number(b);
      res.end(`${o}`);
      break;
    case "odzemanje":
      o = a - b;
      res.end(`${o}`);
      break;
    case "mnozenje":
      o = a * b;
      res.end(`${o}`);
      break;
    case "delenje":
      o = a / b;
      res.end(`${o}`);
      break;
    default:
      res.end("Ok");
  }
};

const server = http.createServer(handler);

server.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log("Server successfully started");
});

// servis parno ime ili neprano
//parno: da , soglaski 2, samoglaski, karakteri 5 res end
