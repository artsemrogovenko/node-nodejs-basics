import { readdir } from "node:fs/promises";

const list = async () => {
  const filesFolder='src/fs/files'

  try {
    const files = await readdir(filesFolder);
    files.forEach((file) => console.log(file));
  } catch (err) {
    const catchMessage= 'no such file or directory'
    if (err instanceof Error && err.message.includes(catchMessage)) {
      throw Error("FS operation failed");
    }
  }
};

await list();
