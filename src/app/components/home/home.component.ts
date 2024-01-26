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
  constructor(private reqresService: ReqresService) {this.getUsers()}
  getUsers() {
    this.reqresService.getUsers().subscribe(
      (res: User[]) => {
        console.log(res)
      },
      (err) => {
        console.error(err)
      }
    )
  }
}
