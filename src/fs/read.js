import { createReadStream } from "node:fs";

const read = async () => {
  const fileName = "src/fs/files/fileToRead.txt";
  const reader = createReadStream(fileName, {
    autoClose: true,
    encoding: "utf-8",
  });
  reader.on("error", () => {
    throw new Error("FS operation failed");
  });

  reader.on("data", (data) => {
    console.log(data);
  });
};

await read();
