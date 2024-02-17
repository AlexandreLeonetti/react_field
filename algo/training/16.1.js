/* write an algo that count score combinations */

function combs(finalScore, s){
    //one way to reach 0
    const matrix = new Array(s.length).fill(0)
                                      .map(()=> [1].concat(new Array(finalScore).fill(0)));
    for(let i = 0; i<s.length; i++){
        for(let j=1; j<=finalScore; j++){ // import that j start at 1
            const withoutThisPlay = (i>=1?matrix[i-1][j]:0);
            const withThisPlay    = (j>=s[i]?matrix[i][j-s[i]]:0);
            matrix[i][j]= withoutThisPlay + withThisPlay;
        }
    }
    //console.log(matrix);
    return matrix[s.length - 1][finalScore];
}

const res = combs(12, [2,3,7]);
console.log(res);
