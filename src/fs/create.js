import { writeFile, readFile } from "node:fs";

const fileName = "src/fs/files/fresh.txt";
const content = "I am fresh and young";
const failedMessage = "FS operation failed";

const create = async () => {
  try {
    isNotExistFile();
    writeFile(fileName, content, { signal }, (err) => {
      if (err) console.log(err);
    });
  } catch (error) {
    console.log(error);
  }
};

await create();

async function isNotExistFile() {
  readFile(fileName, (err, data) => {
    if (data) throw new Error(failedMessage);
  });
}
