let phrase = "JavaScript is fun!";

for (let i = 0; i < phrase.length; i++) {
    console.log(phrase[i]);
}

let counter = 0;
for (let i = 0; i < phrase.length; i++) {
    if (phrase[i].toLowerCase() === 'a') {
        counter++;
    }
}
console.log(`A letra 'a' aparece ${counter} vezes na frase.`);

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}