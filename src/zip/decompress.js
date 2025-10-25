import { createReadStream, createWriteStream } from "node:fs";
import {  createGunzip } from "node:zlib";

const decompress = async () => {
  const src = "src/zip/archive.gz";
  const target = "src/zip/fileToCompress.txt";
  const reader = createReadStream(src,{autoClose:true});
  const write = createWriteStream(target,{autoClose:true});
  const unzip = createGunzip( );

  reader.pipe(unzip).pipe(write)
};

await decompress();
