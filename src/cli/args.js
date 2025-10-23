import { argv } from 'node:process';

const parseArgs = () => {
 const args=argv.slice(2)
 const result=args.reduce((acc,value,index,arr)=>{
  if(index%2===0){
    acc.push(`${value} is ${arr[index+1]}`)
  } 
  return acc
 },[]);
 console.log(result.join(', '));
};

parseArgs();
