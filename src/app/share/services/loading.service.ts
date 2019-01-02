import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }

    showloading():boolean {
      return true;
    }

    hideloading(): boolean {
        return false;
    }
}
