import dotenv from "dotenv";
import { getClient } from "utils/discord";

dotenv.config();

function application() {
  const client = getClient();
  client.login(process.env.TOKEN || "");
}

application();

export default application;
