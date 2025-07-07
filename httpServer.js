import http from "http";
import routes from "./routes/riddleRoutes.js";

const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log("11",routes[req.method][req.url]);
    

    if (routes[req.method][req.url]) {
        routes[req.method][req.url](req, res);
    }
});
server.listen(3000);



