// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:
const has_balanced_parens = (str) => {
    let parenCount = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        if (char === '(') parenCount++;
        else if (char === ')') parenCount--;
    }
    return (parenCount === 0);
}

console.log(has_balanced_parens(sample1));
console.log(has_balanced_parens(sample2));
console.log(has_balanced_parens(sample3));
console.log(has_balanced_parens(sample4));
console.log(has_balanced_parens(')(()'));