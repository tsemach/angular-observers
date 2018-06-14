import { Subject } from 'rxjs/Subject';

export class UserService {
  /**
   * A Subject is an Observable and Observer in the same time 
   * (the one that generate the data and one that receive it)
   */
  userActivated = new Subject();

}