import { existsSync, renameSync } from "fs";

const rename = async () => {
  const from = "src/fs/files/wrongFilename.txt";
  const to = "src/fs/files/properFilename.md";
  if (!existsSync(from) || existsSync(to)) {
    throw Error("FS operation failed");
  }
  renameSync(from, to);
};

await rename();
