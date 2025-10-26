import { stdin, stdout } from "node:process";
import { Transform } from "node:stream";

const transform = async () => {
  const transformer = new Transform({
    transform(data, _, callback) {
      callback(null, String(data).split("").reverse().join("") + "\n");
    },
  });
  stdin.pipe(transformer).pipe(stdout);
};

await transform();
