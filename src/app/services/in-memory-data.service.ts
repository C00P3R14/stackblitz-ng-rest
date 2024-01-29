import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const users:User[] = [
      {id: 11, first_name:'Linda',last_name:'Ngubane',avatar:'https://i.ibb.co/vjYw8fy/images.jpg'},
      {id:12, first_name:'Sinazo',last_name:'Ngubane',avatar:''}
    ]

    return {users}
  }

  genId(users:User[]):number {
    return users.length > 0 ? Math.max(...users.map(
      user => user.id
    )) + 1 : 11
  }
}
