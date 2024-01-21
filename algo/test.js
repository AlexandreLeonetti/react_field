const printPyramid = (height) => {
    for (let i = 1; i <= height; i++) {
      const spaces = ' '.repeat(height - i);
      const stars = '*'.repeat(2 * i - 1);
      console.log(spaces + stars + spaces);
    }
  };
  
  // Change the argument to set the height of the pyramid
  printPyramid(5);
  