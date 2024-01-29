import { Component } from '@angular/core';
import { User } from '../../user';
import { ReqresService } from '../../services/reqres.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  users:User[] = []
  constructor(
    private reqresService: ReqresService,
    private router:Router
    )
   {this.getUsers()}
  userDetails(id:number) {
    this.router.navigate(['user',id])
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
