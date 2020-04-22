//Twój kod
const [ num1, num2, num3 ] = process.argv.slice(2,5);

console.log(`${num1} + ${num2} + ${num3} = ${parseInt(num1) + parseInt(num2) + parseInt(num3)}`);
