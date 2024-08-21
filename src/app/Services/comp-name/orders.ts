import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private apiUrl = 'https://dummyapi.io/data/api/orders'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getUserOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/me/orders`); // Assuming this endpoint returns user orders
  }

  cancelOrder(orderId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/orders/${orderId}`); // Assuming this endpoint cancels an order
  }
}
