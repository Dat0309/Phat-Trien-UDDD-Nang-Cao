import { Injectable } from '@angular/core';
import { KeyboardStyle } from '@capacitor/keyboard';
import { User } from 'src/model/user';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  public users: User[] = [];
  constructor(private storageService: StorageService){}

  async addAccount(email: string, password: string): Promise<void>{
    this.storageService.set('email', email);
    this.storageService.set('password', password);
  }

  async getAccount(email: string): Promise<void>{
    return this.storageService.get(email);
  }

  getAllAccount(){
    const items = this.storageService.getAll();
    items.forEach((e)=>{
      this.users.push(e);
    });
    console.log(this.users.length);
  }
}
