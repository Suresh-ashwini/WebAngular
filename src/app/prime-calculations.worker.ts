import isPrimeNumber from 'prime-number';
import primeNumberList from 'prime-number/list';

declare function postMessage(message: any): void;

/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const arePrimeList = primeNumberList.map((prime) => {
    return isPrimeNumber(prime);
  });
  postMessage(arePrimeList);
});
