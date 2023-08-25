export class Log{

    static success(msg:string){
        console.log(`%c ${msg}` , 'color: green');
        
    }
    static danger(msg:string){
        console.log(`%c ${msg}` , 'color: crimson');


    }
    static info(msg:string){
        console.log(`%c ${msg}` , 'color: red ; background-color: yellow' );

    }


}