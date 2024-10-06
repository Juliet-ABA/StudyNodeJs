import {EventEmitter} from 'events';
import { copyFileSync } from 'fs';

const myEmitter = new EventEmitter();

function greetHandler(name){
    console.log('Hello World' + name);
}

function goodbyeHandler(name){
    console.log('Goodbye'+ name);
}

//Register event listeners
myEmitter.on('greet',greetHandler);
myEmitter.on('goodbye',goodbyeHandler);

//Emit events
myEmitter.emit('greet','John');
myEmitter.emit('goodbye','John');

//Error handling
myEmitter.on('error',(err)=>{
    console.log('An error occured', err);
})

//Simulate error
myEmitter.emit('error',new Error('Something went wrong'));