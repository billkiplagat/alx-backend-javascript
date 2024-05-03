/**
 * This Node.js program reads input from the standard input (stdin) stream
 * It prompts the user to enter their name and then displays it back to them
 * After the user ends the program, it displays a closing message
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if ((chunk)) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
