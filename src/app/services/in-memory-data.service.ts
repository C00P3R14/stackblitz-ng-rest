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
      {id: 11, first_name:'Linda',last_name:'Ngubane',avatar:'assets/img/me.jpg'},
      {id:12, first_name:'Sinazo',last_name:'Ngubane',avatar:'assets/img/me.jpg'}
    ]

    return {users}
  }

  genId(users:User[]):number {
    return users.length > 0 ? Math.max(...users.map(
      user => user.id
    )) + 1 : 11
  }
}
