/**
 * Calculates the age of a student based on their birth year.
 * @param age - The birth year of the student.
 * @returns The age of the student as a string.
 */
export const getAgeOfStudent = (age: Date): string => {
  const currentYear = new Date().getFullYear();
  return (currentYear - new Date(age).getFullYear()).toString();
};
