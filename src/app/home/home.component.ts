import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  infinitNumbersSubscription: Subscription;
  customObservableSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.simpleNumberObservable();
    this.createStringObservable();
  }

  createStringObservable() {
    /**
     * Create a new observerable, note the observer is the pass as aurgument.
     * it create the data source.
     */
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);

      // you can use error OR completed method to finish the observer.
      // NOTE: but not both of them 
      setTimeout(() => {
        observer.error('this is not working');
      }, 5000);      
      setTimeout(() => {
        observer.complete();
      }, 6000);

    });

    /**
     * Create the Observer (the receiver). It define 3 methods, the data, the error and the complation.
     */
    this.customObservableSubscription = myObservable.subscribe(
      (data: string) => { console.log(data) },
      (error: string) => { console.log(error) },
      () => { console.log('completed')}
    );
  }

  simpleNumberObservable() {
       /**
     * define the data source is a timer generate a numbers with 1000MS interval
     */
    const myNumbers = Observable.interval(1000);

    /**
     * The observer able to define 3 methods, one for the data, other for the error and last for complation
     */
    this.infinitNumbersSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );
  }
  
  ngOnDestroy() {
    this.infinitNumbersSubscription.unsubscribe();
    this.customObservableSubscription.unsubscribe();
  }
}
