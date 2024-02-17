function backtrack(target, currentScore, combination, individualPlayScores, result) {
    // Print the current state of the tracing tree
    console.log(`Target: ${target}, Current Score: ${currentScore}, Combination: [${combination}]`);

    // Base case: If the current score equals the target, add the combination to the result
    if (currentScore === target) {
        result.push([...combination]);
        return;
    }

    // Recursive case: Try adding each individual play score to the combination
    for (let playScore of individualPlayScores) {
        if (currentScore + playScore <= target) {
            combination.push(playScore);
            backtrack(target, currentScore + playScore, combination, individualPlayScores, result);
            combination.pop();
        }
    }
}

// Example usage
const targetScore = 15;
const playScores = [2, 3, 7];
const resultCombinations = [];

backtrack(targetScore, 0, [], playScores, resultCombinations);

// Print the final result
console.log("Result Combinations:");
for (let combination of resultCombinations) {
    console.log(combination);
}

