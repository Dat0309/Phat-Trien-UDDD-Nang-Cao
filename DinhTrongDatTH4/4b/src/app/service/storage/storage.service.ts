import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
   }

  public async set(key: string, value: any): Promise<void> {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public async get(key: string): Promise<any> {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  }

  getAll(){
    // eslint-disable-next-line prefer-const
    let items = [];
    localStorage.forEach((v,k)=>{
      console.log('value',v);
      console.log('key',k);
      items.push(JSON.parse(v));
    });
    return items.length? items:null;  // this always returns null
  }
}
