import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// The Fisher-Yates shuffle algorithm
export function shuffleArray(array: String[]) {
  for (let i = array.length - 1; i > 0; i--) {
    let randomPosition = Math.floor(Math.random() * (i + 1));
    let temp = array[i];

    // Swap elements
    array[i] = array[randomPosition];
    array[randomPosition] = temp;
  }

  return array;
}
