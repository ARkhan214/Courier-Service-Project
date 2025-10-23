import { Injectable } from '@angular/core';
import { environment } from '../api/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {
  
private apiUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) {}

  saveUser(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/save`, formData);
  }

}
