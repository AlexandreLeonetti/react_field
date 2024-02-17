// Define constants for colors
const WHITE = 0;
const GREY = 1;

// Define the maze
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

// Define start and end points as coordinates (row, column)
const start = { x: 0, y: 0 };
const end = { x: 9, y: 9 };

function mazeSearch(maze, s, e) {
    const path = [];

    // Helper function to perform recursion
    function helper(cur) {
        // Check if current coordinate is white and within boundaries
        if (!((0 <= cur.x && cur.x < maze.length) 
            && (0 <= cur.y && cur.y < maze[cur.x].length) 
            && maze[cur.x][cur.y] === WHITE)) {
            return false;
        }

        // Add current to path and mark it as grey
        path.push(cur);
        maze[cur.x][cur.y] = GREY;

        // If we find the end, return true to indicate success
        if (cur.x === e.x && cur.y === e.y) {
            return true;
        }

        // Recursively check neighboring coordinates
        const neighbors = [{ x: cur.x - 1, y: cur.y }, { x: cur.x + 1, y: cur.y }, { x: cur.x, y: cur.y - 1 }, { x: cur.x, y: cur.y + 1 }];
        for (const neighbor of neighbors) {
            if (helper(neighbor)) {
                return true;
            }
        }

        // If no path found, backtrack
        path.pop();
        return false;
    }

    // Start the search from the start coordinate 's'
    if (!helper(s)) {
        return []; // No path found
    }

    return path;
}

console.log(mazeSearch(maze, start, end));

