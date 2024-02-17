/* maze */
const WHITE = 0;
const GREY  = 1;

/* define the maze */

const maze = [
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
];

/* define start and end points row column */
const start = { x: 0, y: 0 };
const end = { x: 9, y: 9 };

function mazeSearch(maze, s, e){
    const path = [];

    function helper(cur){/* this function checks nodes just like in trees */
        /* check if current coords are white and within boundaries */
        /* if not return false */
        if(!((0<= cur.x && cur.x < maze.length)
            &&  (0<= cur.y && cur.y < maze[cur.x].length))){
            return false;
        }

        /* we check the value of the node after ensuring it is within boundaries.
         * note that && statements are evaluated from left to right;
         */
        if(maze[cur.x][cur.y]!==WHITE){
            return false;
        }

        /* add current node to path and mark as grey */
        path.push(cur);
        maze[cur.x][cur.y]=GREY;// turning the node grey in the original maze variable.
        

        /* if we find the end, return true to indicate success */
        if(cur.x==e.x && cur.y==e.y){
            return true;
        }

        /* recursively check neighboring coords */
        const neighbors = [{ x: cur.x -1, y : cur.y},
                            { x: cur.x +1, y : cur.y},
                            { x: cur.x   , y : cur.y-1},
                            { x: cur.x   , y : cur.y+1}];
        for ( const n of neighbors ){
            if(helper(n)){
                return true;
            }
        }

        /* if no path found */
        path.pop();
        return false;
    }
    
    if(!helper(s)){
        return [];
    }


    return path;

}




console.log(mazeSearch(maze, start, end));
