
const msg = "Hello world!";

// console.log(msg.startsWith("Hello"));
// console.log(msg.endsWith("!"));
// console.log(msg.includes("o"));

// console.log(msg.startsWith("o",4));
// console.log(msg.endsWith("o",8));
// console.log(msg.includes("o",7));

// console.log(msg.repeat(5));

var stringVal = `Hello world!`;
console.log(stringVal);
console.log(typeof stringVal);
console.log(stringVal.length);

stringVal = `\`Hello\` world!`
console.log(stringVal);

var multiline_string = `I want to be 
aware who is he ...`;

console.log(multiline_string);

multiline_string = "Damn He is a \n\
 monster";

 console.log(multiline_string);

 console.log(`I want to be 
 aware who is he ... ${multiline_string}`);

 var name = 'IsuruK';
 var title = 'programmer';

 console.log(`${name} is a ${title}`);


const originalPrice = 25;
const discountedPrice = 10;

console.log(`You saved ${(originalPrice-discountedPrice)/originalPrice*100}% on this sale`);

const text = `Join the 'Happy Learning' Team in slack`;
console.log(text.startsWith('Join'));
console.log(text.startsWith('Happy'));
console.log(text.endsWith('Learning'));
console.log(text.endsWith('slack'));
console.log(text.includes('Join Now'));
console.log(text.includes('Happy Learning'));
console.log(text.startsWith('Happy',10));
console.log(text.startsWith('Learning',10));
console.log(text.includes('Happy Learning',4));

const hello = 'Hello';
const how = 'How';
const are = 'are';
const dot = '.';
const you = 'you';
const questionMark = '?';

const result = hello+dot.repeat(3)+how+dot.repeat(3)+are+dot.repeat(3)
        +you+dot.repeat(3)+you+dot.repeat(3)+you+questionMark.repeat(3);
console.log(result);
console.log();
console.log();