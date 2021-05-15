import path from "path";
import Mali, { Context } from "mali";

const PROTO_PATH = path.resolve(__dirname, "../lib/protos/helloworld.proto");

async function sayHello(ctx: Context<any>) {
  ctx.res = { message: "Hello ".concat(ctx.req.name) };
}

function main() {
  const app = new Mali(PROTO_PATH, "Greeter");
  app.use({ sayHello });
  app.start("127.0.0.1:50051");
}

main();
