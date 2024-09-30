export default function iterateThroughObject(reportWithIterator) {
  // Collect all employee names in an array
  const result = [];
  
  for (const item of reportWithIterator) {
    result.push(item);
  }

  // Join the employee names with " | " as a separator and return as a string
  return result.join(' | ');
}
