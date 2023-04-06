function writeCards(names, adjective) {
    const thankYouMessages = [];
    for (let name in names) {
        thankYouMessages[name] = `Thank you, ${names[name]}, for the wonderful ${adjective} gift!`;
    }
    return thankYouMessages;
}
function countDown(number) {
    let i = number;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}
