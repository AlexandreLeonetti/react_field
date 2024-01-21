function simpleParity(x) {
  // Initialize the parity to 0 (even parity).
  let parity = 0;

  // Loop until x becomes 0 (all set bits have been counted).
  while (x) {
    // Toggle the parity if the rightmost bit (LSB) is set (equals 1).
    if (x & 1) {
      parity ^= 1;
    }

    // Shift x to the right to check the next bit.
    x >>= 1;
  }

  return parity;
}

// Example usage
const result = simpleParity(12); // Replace 13 with your desired input
console.log(result); // Output will be 1 or 0 (odd or even parity)


function createParityLookup() {
  // Create a lookup table to store the parity values for all possible 16-bit integers (0 to 65535).
  const lookupTable = new Array(1 << 16);

  for (let i = 0; i < (1 << 16); i++) {
    // Calculate the parity for each 16-bit integer.
    // We use the simpleParity function to calculate the parity for 16 bits.
    lookupTable[i] = simpleParity(i);
  }

  return lookupTable;
}

// Example usage
const parityLookup = createParityLookup();
console.log(parityLookup);

function parity(x) {
  const INT_SIZE = 16;
  const BIT_MASK = 0xFFFF;
  const lookupTable = createParityLookup();

  // Calculate the parity for four 16-bit parts of the 32-bit integer x.
  const part_1 = (x >> (3 * INT_SIZE)) & BIT_MASK;
  const part_2 = (x >> (2 * INT_SIZE)) & BIT_MASK;
  const part_3 = (x >> INT_SIZE) & BIT_MASK;
  const part_4 = x & BIT_MASK;

  console.log(lookupTable[part_1]);
  console.log(part_1);
  console.log(part_2);
  console.log(part_3);
  console.log(part_4);

  // Lookup the precomputed parity values for each part and combine them using XOR (^).
  return lookupTable[part_1] ^ lookupTable[part_2] ^ lookupTable[part_3] ^ lookupTable[part_4];
}

// Example usage
const result2 = parity(123456789); // Replace 123456789 with your desired input
console.log(result2);
const res3 = parity(8);
console.log(res3);
