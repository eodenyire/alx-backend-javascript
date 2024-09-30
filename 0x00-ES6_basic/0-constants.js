// Use const for task in taskFirst
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

// Use let for combination in taskNext
export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();
  return combination;
}
