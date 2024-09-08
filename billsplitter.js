// Task 1: Calculating the Tip
let bill = 247;
let tip = (bill >=50) && (bill <= 300) ? bill * .15 : bill * .2 ;
console.log(tip); // Desired Output: 37.05 (247 * .15 = )

// Task 2: Output Details
let totalAmount = bill + tip; 
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value is $${totalAmount}`);
// Desired Output: "The bill was $247, the tip was $37.05, and the total value is $284.05"

// Task 3: Creating Function calculateTip
function calculateTip(bill) {
    return (bill >=50) && (bill <= 300) ? bill * .15 : bill * .2 ;
}

console.log(`Tip for a bill value of $100: $${calculateTip(100)}`); 
// Desired Output: Tip for a bill value of $100: $15