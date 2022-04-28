import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private storage: Storage) {
    this.getData().then((data) =>{
      console.log(data);
    });
   }

   getData(): any{
     return this.storage.get('users');
   }
   save(data): void{
     this.storage.set('users', data);
   }
}
