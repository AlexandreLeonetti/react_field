function letterFromMag(letter, magazine) {
    let isPossible = false;

    const magazineCounter = new Map();

    // Count occurrences of each character in magazine
    for (const char of magazine) {
        magazineCounter.set(char, (magazineCounter.get(char) || 0) + 1);
    }

    // Subtract occurrences of each character in letter from magazine
    for (const char of letter) {
        if (magazineCounter.has(char)) {
            magazineCounter.set(char, magazineCounter.get(char) - 1);
            if (magazineCounter.get(char) === 0) {
                magazineCounter.delete(char);
            }
        } else {
            isPossible = false;
            break;
        }
    }

    // If the magazineCounter is empty, all characters in the letter are present in the magazine
    isPossible = magazineCounter.size === 0;

    return isPossible;
}

// Test case
const aLetter = "hello i am one";
const mag = "eno mai oh lle";

console.log(letterFromMag(aLetter, mag));
