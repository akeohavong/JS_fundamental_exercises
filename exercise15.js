function myFunction(message){
    for(let i = 0; i < message.length; i++){
        console.log(message[i].padStart(10));
    }
}

myFunction([ "one", "two hundred", "fifty" ]);
myFunction([ "yes", "no"]);
myFunction([ "merciful", "cold", "beyond reproach", "brighter", "sad"]);
