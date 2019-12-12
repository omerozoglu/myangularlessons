import { Injectable } from '@angular/core';
declare let alertify:any;
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  success(messagge:string){
    alertify.success(messagge)
  }
}
