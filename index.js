function writeCards(names, adjective) {
    const thankYouMessages = [];
    for (let name of names) {
        thankYouMessages.push(`Thank you, ${name}, for the wonderful ${adjective} gift!`);
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
