
// Import required modules
const fs = require('mz/fs'); // Using 'mz/fs' for modernized file system operations with Promises
const path = require('path'); // Path module for working with file paths
const http = require('http'); // HTTP module for creating a simple web server
const url = require('url'); // URL module for parsing and formatting URLs
const { Readable } = require('stream'); // Stream module for handling streams of data
const colors = require('colors/safe'); // Colors module for console output with colors



const cors = require('cors'); // Import the 'cors' middleware
// Enable CORS for all routes
const corsOptions = {
  origin: '*' // You can set specific origins here instead of '*'
};
const corsMiddleware = cors(corsOptions);
// Setup frames in memory
let original; // Array to store the original frames
let flipped; // Array to store the flipped frames

// Asynchronous function to read frames from the 'frames' directory
(async () => {
  const framesPath = 'frames'; // Path to the directory containing frame files
  const files = await fs.readdir(framesPath); // Read the files in the directory

  // Read the content of each file and store it in the 'original' array
  original = await Promise.all(files.map(async (file) => {
    const frame = await fs.readFile(path.join(framesPath, file)); // Read the file content
    return frame.toString(); // Convert the buffer to a string and store in the array
  }));
  // Create the 'flipped' array by reversing each string in the 'original' array
  flipped = original.map(f => {
    return f
      .toString()
      .split('') // Convert the string to an array of characters
      .reverse() // Reverse the order of the characters
      .join(''); // Convert the array back to a string
  });
})().catch((err) => {
  console.log('Error loading frames'); // Handle errors during frame loading
  console.log(err);
});


const colorsOptions = [
  'red',
  'yellow',
  'green',
  'blue',
  'magenta',
  'cyan',
  'white'
];
const numColors = colorsOptions.length;
const selectColor = previousColor => {
  let color;

  do {
    color = Math.floor(Math.random() * numColors);
  } while (color === previousColor);

  return color;
};

const one = ["one\n","two\n","three\n"];

const streamer = (stream, opts) => {
  let index = 0;
  let lastColor;
  let frame = null;
  const frames = original //opts.flip ? flipped : original;

  return setInterval(() => {
    // clear the screen
    //stream.push('\033[2J\033[3J\033[H');

    const newColor = lastColor = selectColor(lastColor);
 
    //let test = stream.push(colors[colorsOptions[newColor]](frames[index]));
    if(index%3===0){
         stream.push(colors[colorsOptions[newColor]]("hello\n"));
    }else{

        stream.push(colors[colorsOptions[newColor]](one[index]));
    }

    index = (index + 1) % frames.length;
  }, 500);
};

const validateQuery = ({ flip }) => ({
  flip: String(flip).toLowerCase() === 'true'
});

const server = http.createServer((req, res) => {
    corsMiddleware(req, res, () => {
  if (req.url === '/healthcheck') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({status: 'ok'}));
  }else if (req.url=== '/stream') {
    // Stream endpoint

  const stream = new Readable();
  stream._read = function noop() {};
  stream.pipe(res);
  const interval = streamer(stream, validateQuery(url.parse(req.url, true).query));

    req.on('close', () => {
      stream.destroy();
      clearInterval(interval);
    });
  }

/*
  const stream = new Readable();
  stream._read = function noop() {};
  stream.pipe(res);
  const interval = streamer(stream, validateQuery(url.parse(req.url, true).query));

  req.on('close', () => {
    stream.destroy();
    clearInterval(interval);
  });*/
  });
});

const port = process.env.PARROT_PORT || 3000;
server.listen(port, err => {
  if (err) throw err;
  console.log(`Listening on localhost:${port}`);
});

