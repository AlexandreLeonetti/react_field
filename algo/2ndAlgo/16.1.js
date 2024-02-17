function numCombinationsForFinalScore(finalScore, individualPlayScores) {
    // One way to reach 0
    const numCombinationsForScore = new Array(individualPlayScores.length)
        .fill(0)
        .map(() => [1].concat(new Array(finalScore).fill(0)));

    for (let i = 0; i < individualPlayScores.length; i++) {
        for (let j = 1; j <= finalScore; j++) {
            const withoutThisPlay = (i >= 1 ? numCombinationsForScore[i - 1][j] : 0);
            const withThisPlay = (j >= individualPlayScores[i] ? numCombinationsForScore[i][j - individualPlayScores[i]] : 0);
            numCombinationsForScore[i][j] = withoutThisPlay + withThisPlay;
        }
    }

    return numCombinationsForScore[individualPlayScores.length - 1][finalScore];
}

const res = numCombinationsForFinalScore(12, [2, 3, 7]);
console.log(res);

