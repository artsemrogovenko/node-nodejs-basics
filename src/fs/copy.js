import { existsSync, cp } from "fs";

const copy = async () => {
  const target = "src/fs/files";
  const dest = "src/fs/files_copy";

  if (!existsSync(target) || existsSync(dest)) {
    throw Error("FS operation failed");
  }
  cp(target, dest, { recursive: true }, (error) => {
    if (error) throw err;
  });
};

await copy();
