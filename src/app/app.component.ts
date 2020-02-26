import isPrimeNumber from 'prime-number';
import primeNumberList from 'prime-number/list';
const arePrimeList = primeNumberList.map((prime) => {
    return isPrimeNumber(prime);
});
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'worker-web';

  runWorker() {
    const worker = new Worker('./prime-calculations.worker', {
        type: 'module'
    });
    worker.onmessage = ({ data }) => {
        console.log('From Web Worker:', data);
    };
    worker.postMessage({});
 }
 runThread() {
     const arePrimeList = primeNumberList.map((prime) => {
         return isPrimeNumber(prime);
     });
     console.log('From Javascript Thread', arePrimeList);
 }
}
