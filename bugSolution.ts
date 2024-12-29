function printName(name: string | null | undefined): void {
  if (name === null) {
    console.log('No name provided');
  } else if (name === undefined) {
    console.log('No name provided');
  } else {
    console.log(name.toUpperCase());
  }
}

printName(null); // Works as expected
printName('John'); // Works as expected
printName(undefined); // Works as expected