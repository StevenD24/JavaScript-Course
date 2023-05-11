const scores = [10, 30, 15, 25, 50, 40, 5];

// does not alter the original array
const filteredScores = scores.filter((score) => {
    return score > 20;
});

console.log(filteredScores);