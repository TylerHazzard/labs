const name1 = "deadpool";
const name2 = "batman";
const name3 = "vader";

const length1 = name1.length;
const length2 = name2.length;
const length3 = name3.length;

if (length1 === length2 && length1 === length3) {
    console.log("all given names are the same length")
} else if (length1 === length2 && length1 >= length3) {
    console.log(`${name1} and ${name2} are the same length`)
} else if (length1 === length3 && length1 >= length2) {
    console.log(`${name1} and ${name3} are the same length`)
} else if (length2 === length3 && length2 >= length1) {
    console.log(`${name2} and ${name3} are the same length`)
} else if (length1 > length2 && length1 > length3) {
    console.log(name1)
} else if (length2 > length1 && length2 > length3) {
    console.log(name2)
} else if (length3 > length1 && length3 > length2) {
    console.log(name3)
}