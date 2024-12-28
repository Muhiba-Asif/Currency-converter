import inquirer from "inquirer";
// Define the list of currencies and thier exchange rates
const currency = {
    "USD": 1, // BASE CURRENCY
    "EUR": 0.9, //EUROPEAN CURRENCY (Euro)
    "GBP": 113, // JAPENESE CURRENCY (Yen)
    "INR": 1.3, // AUSTRALIAN DOLLAR ()
    "PKR": 289
};
let user_answer = await inquirer.prompt([
    {
        //@ts-ignore
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        //@ts-ignore
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        //@ts-ignore
        name: "amount",
        message: "Enter Your Amount",
        type: "number",
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
console.log(Math.round(convertedAmount));
