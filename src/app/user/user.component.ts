import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute, private usersService: UserService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );
  }

  /**
   * UserService is using Observer. the userActivated.next method create a data source of "this.id"
   */
  onActivate() {
    console.log("UserComponent:onActivate: is called, id = " + this.id);
    this.usersService.userActivated.next(this.id);
  }
}
