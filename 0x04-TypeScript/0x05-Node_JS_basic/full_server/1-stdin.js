/**
 * A script that reads and processes user input using the `stdin` object.
 * - promts the user to input name
 * - reads the input from the user
 * -displays the input back to the user
 * - ends by displaying a message before closing
 */

const { stdin, stdout } = process;

stdout.write('Welcome to Holberton School, what is your name?\n');

stdin.setEncoding('utf8');
stdin.on('readable', () => {
  const name = stdin.read();
  if (name) {
    stdout.write(`Your name is: ${name}`);
  }
});

stdin.on('end', () => {
  stdout.write('This important software is now closing\n');
});
