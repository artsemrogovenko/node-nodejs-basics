import { createReadStream, createWriteStream } from "node:fs";
import {  createGzip } from "node:zlib";

const compress = async () => {
  const src = "src/zip/files/fileToCompress.txt";
  const target = "src/zip/archive.gz";
  const reader = createReadStream(src,{autoClose:true});
  const write = createWriteStream(target,{autoClose:true});
  const gzip = createGzip( );

reader.pipe(gzip).pipe(write)
};

await compress();
