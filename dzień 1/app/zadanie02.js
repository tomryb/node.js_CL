//Twój kod
const array = {
    4000: "Node.js",
    1000: "się",
    0: "Witam",
    6000: "i korzystam",
    5000: "w konsoli",
    7000: "z funkcji czasu",
    2000: "z",
    3000: "programem"
}
for (const i in array) {
    setTimeout(() => {
        console.log(array[i]);
    }, i)
}
