import { parentPort} from 'node:worker_threads';
// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread
  const randomInt = () => {
    const min = Math.ceil(0);
    const max = Math.floor(2);
    return Math.floor(Math.random() * (max - min) + min);
  };

  parentPort.on("message", (message) => {
    const { id, number } = message;
    try {

    if(id === randomInt()) throw Error()

      const result = nthFibonacci(number)
      parentPort.postMessage({ id:id, status: "resolved", data: result })
    } catch (error) {
      parentPort.postMessage({ id:id, status: "error", data: null })
    }
  });
};

sendResult();
