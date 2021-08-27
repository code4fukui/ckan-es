import { Server } from "https://js.sabae.cc/Server.js";
//import { Server } from "./Server.js";

class CKANServer extends Server {
  async api(req, data) {
    console.log(req, data);
  }
  async handleNotFound(req) {
    req.path = "/";
    return await this.handleWeb(req);
  }
}

new CKANServer(8081);
