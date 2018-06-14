import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user1Activated = false;
  user2Activated = false; 

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.userActivated.subscribe(
      (id: number) => {
        if (id === 1) {
          this.user1Activated = true;
        }
        else if (id === 2) {
          this.user2Activated = true;
        }
      }
    );
  }

  /**
   * make sure to unsubscribe to avoid memory leaks.
   */
  ngOnDestroy() {
    this.userService.userActivated.unsubscribe();
  }
}
