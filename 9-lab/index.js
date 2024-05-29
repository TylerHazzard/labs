const submissions = [
    person1 = {
        name: "jane",
        score: 95,
        passed: true
    },
    person2 = {
        name: "joe",
        score: 77,
        passed: true
    },
    person3 = {
        name: "jack",
        score: 59,
        passed: false
    },
    person4 = {
        name: "jill",
        score: 88,
        passed: true
    }
];

const addSubmission = (array, newName, newScore) => {
    passed = newScore >= 60 ? true:false;
    array.push({ name: newName, score: newScore, passed: passed });
};

addSubmission(submissions, "Tyler", 100);
console.log(submissions);

const deleteSubmissionByIndex = (array, index) => array.splice(index,1);

deleteSubmissionByIndex(submissions, 2);
console.log(submissions);

const deleteSubmissionByName = (array, name) => {
    index = array.findIndex(submission => submission.name === name);
    if (index !== -1) {
        array.splice(index, 1);
    }
};

deleteSubmissionByName(submissions, "jill");
console.log(submissions);

const editSubmission = (array, index, score) => {
    array[index].score = score;
    array[index].passed = score >= 60 ? true:false;
};

editSubmission(submissions, 0, 99);
console.log(submissions);


const findSubmissionByName = (array, name) => array.find(submission => submission.name === name);

console.log(submissions, "Tyler")

const findLowestScore = array => array.reduce((min, submission) => submission.score < min.score ? submission : min, array[0]);

console.log(findLowestScore(submissions))

const findAverageScore = array => {
    const totalScore = array.reduce((total, submission) => total + submission.score, 0);
    return totalScore / array.length;
};

console.log(findAverageScore(submissions))

const filterPassing = array => array.filter(submission => submission.score >= 60);

console.log(filterPassing(submissions))

const filter90AndAbove = array => array.filter(submission => submission.score >= 90);

console.log(filter90AndAbove(submissions))