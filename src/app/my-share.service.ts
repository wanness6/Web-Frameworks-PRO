import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyShareService {

  constructor(private _http :HttpClient) { }

  get Lijst(): Observable<Object>{
    return this._http.get("https://datasets7.antwerpen.be/leegstandsregister/2019");
  }
}
