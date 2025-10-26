import { cpus } from 'node:os';
import { exitCode } from 'node:process';
import { isMainThread, Worker } from 'node:worker_threads';

const performCalculations = async () => {
  const threads = cpus().length;
  const startNumber = 10;
  const filename = './src/wt/worker.js';
  const workers=[]

  const results = Array(threads); 
  let completed = 0;

  for (let i = 0; i < threads; i++) {
    if(isMainThread){
    const worker = new Worker(filename);

    worker.on('message', (message) => {
      const { id } = message;
      results[id] = message; 

       if (++completed === threads) {
         workers.forEach(w => w.terminate());
         console.log(results);
      }
    });

    worker.on('error', (error) => {
      const { id } = error;
      results[id] =error; 
    });

    worker.postMessage({ id:i, number: startNumber + i });
    workers.push(worker);
  }
}
 
};

await performCalculations();
