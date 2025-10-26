import { env } from 'node:process';

const parseEnv = () => {
  const entries=Object.entries(env);
  const prefix='RSS_'
const result=entries.reduce((acc,[key,value])=>{
  if(key.includes(prefix)) {
    acc.push(`${key}=${value}`)
  }
  return acc
},[])
  console.log(result.join('; '));
};

parseEnv();
