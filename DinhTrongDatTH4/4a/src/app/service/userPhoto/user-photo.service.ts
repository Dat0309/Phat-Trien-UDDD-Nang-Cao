import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPhotoService {
  filepath: string;
  webviewPath: string;

  constructor() { }
}
