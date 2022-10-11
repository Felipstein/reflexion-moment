import { config } from "dotenv";

function setupDotenv() {
  config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
  });
}

export { setupDotenv }