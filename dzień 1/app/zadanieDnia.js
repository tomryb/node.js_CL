//Twój kod

const array = process.argv.slice(2);

array.forEach(element => {
    const value = element
    setTimeout(() => {
        console.log(element)
    }, value * 1000);
});

