// This line defines an array called keys containing a 
// list of string values representing keyboard keys or commands. 
const keys = [
    "7",
    "8",
    "9",
    "del",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "x",
    "reset",
    "=",

    // assertion is used to inform TypeScript that the keys array should be treated as 
    // a tuple with immutable values. This means that TypeScript will infer the exact 
    // string literal types for each element in the array, making them read-only.
  ] as const;
  
//     This line defines a TypeScript type KeyType. It uses the typeof keys
//    expression to obtain the type of the keys array, which is a tuple of string literals. 
// The [number] index type is used to obtain a union type representing all possible values of the keys array, effectively
//    creating a type that can only be one of the values in the keys array.
  export type KeyType = typeof keys[number];
  