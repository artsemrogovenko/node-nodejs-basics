import { stdout   } from 'node:process';
import{createReadStream  } from 'node:fs'

const read = async () => {
const src = "src/streams/files/fileToRead.txt";
 const reader = createReadStream(src, { encoding: 'utf8' });

  reader.on('data', (data) => {
      stdout.write(data);
  }); 
  reader.on('end', ( ) => {
      console.log('');
  }); 
 
};

await read();
