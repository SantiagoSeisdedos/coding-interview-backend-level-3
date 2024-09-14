import { startServer } from "./server";

const start = async () => {
  await startServer();
};


// TODO: Remove this comment
process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

start();
