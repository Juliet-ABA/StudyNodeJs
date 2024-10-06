// import fs from 'fs';

// //readFile()-callback

// fs.readFile('./text.txt','utf8',(err,data)=>{
// if(err) throw err;
// console.log(data);
// });

// //readFileSync- Sync version
// const data =fs.readFileSync('./text.txt','utf8');
// console.log(data);

import fs from 'fs/promises';
//readFile() - Promise .then()
// fs.readFile('./text.txt','utf8')
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err));

//readFile() -  async/await
const readFile = async() =>{
try{
    const data =await fs.readFile('./text.txt','utf8');
    console.log(data);       
    } catch (error) {
    console.log(error);
    }
};
readFile();

const writeFile= async ()=>{
    try{
    await fs.writeFile('./text.txt','Hello I am writing to this file');
    console.log('File written to...');
    }
    catch(error)
    {
        console.log(error);
    }
};
//appendFile()

const appendFile = async ()=>{
    try {
        await fs.appendFile('./text.txt','\n Hello I am appending this File');
        console.log('File appended to...')

        
    } catch (error) {
        console.log(error);
        
    }
}

writeFile();
appendFile();
