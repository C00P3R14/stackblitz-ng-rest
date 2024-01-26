import { Component } from '@angular/core';
import { User } from '../../user';
import { ReqresService } from '../../services/reqres.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  users:User[] = []
  constructor(private reqresService: ReqresService) {this.getUsers()}
  userDetails(id:number) {
    console.log('User ID: ',id)
  }
  getUsers() {
    this.reqresService.getUsers().subscribe(
      (res: User[]) => {
        this.users = res
      },
      (err) => {
        console.error(err)
      }
    )
  }
}
