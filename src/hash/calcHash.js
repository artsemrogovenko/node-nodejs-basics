import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";

const calculateHash = async () => {
  const fileName = "src/hash/files/fileToCalculateHashFor.txt";
  const hash = createHash("sha256");

  const reader = createReadStream(fileName);
  reader.on("data", (data) => {
    hash.update(data);
  });

  reader.on("end", () => {
    console.log(hash.digest("hex"));
  });
};

await calculateHash();
