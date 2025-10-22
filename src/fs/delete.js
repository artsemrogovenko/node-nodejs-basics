import { unlink } from "fs/promises";

const remove = async () => {
  const fileName = "src/fs/files/fileToRemove.txt";
  try {
    await unlink(fileName);
  } catch (error) {
    const catchMessage = "no such file or directory";
    if (error instanceof Error && error.message.includes(catchMessage)) {
      throw Error("FS operation failed");
    }
  }
};

await remove();
