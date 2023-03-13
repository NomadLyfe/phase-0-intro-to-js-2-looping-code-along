const firstNames = [];
function writeCards(firstNames, eventName) {
    const message = [];
    for (let i = 0; i < firstNames.length; i++){
        message.push(`Thank you, ${firstNames[i]}, for the wonderful ${eventName} gift!`);
    }
    console.log(message);
    return message;
}
writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(){
    let num = 10
    while (num >= 0){
        console.log(num);
        num--;
    }
}
