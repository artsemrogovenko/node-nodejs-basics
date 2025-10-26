import { fork } from "node:child_process";
import { stdout,stdin} from 'node:process';

const spawnChildProcess = async (args) => {
  const modulePath='src/cp/files/script.js'
  fork(modulePath,args)
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['rs', 'node', 2025] );
