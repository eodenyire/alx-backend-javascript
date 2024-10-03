import signUpUser from './4-user-promise'; // Ensure the correct import path
import uploadPhoto from './5-photo-reject'; // Ensure the correct import path

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const res = [];

  // Use Promise.allSettled to wait for all promises to settle
  const results = await Promise.allSettled([
    signUpUser(firstName, lastName), 
    uploadPhoto(fileName),
  ]);

  // Process the results
  results.forEach((result) => {
    if (result.status === 'fulfilled') {
      res.push({
        status: 'fulfilled',
        value: result.value,
      });
    } else {
      res.push({
        status: 'rejected',
        value: `Error: ${fileName} cannot be processed`,
      });
    }
  });

  return res;
}
