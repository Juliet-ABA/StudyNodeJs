import path from 'path';
import url from 'url';

const filePath='./dir1/dir2/text.txt';

//basename()
console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.extname(filePath));
console.log(path.parse(filePath));

const __filename= url.fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

console.log(__filename,__dirname);

//join()
const filePath2 =path.join(__dirname,'dir1','dir2','text.txt');
console.log(filePath2);
//resolve
const filePath3 =path.resolve(__dirname,'dir1','dir2','text.txt');
console.log(filePath3);