import {  stdin } from 'node:process';
import { createWriteStream } from 'node:fs'

const write = async () => {
const target = "src/streams/files/fileToWrite.txt";
 const writer = createWriteStream(target, { encoding: 'utf8' });

  stdin.on('data', (data) => {
      writer.write(data);
  }); 
};

await write();
