import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Order {
  ativo: 'PETR4' | 'VALE3' | 'VIIA4';
  lado: 'C' | 'V';
  quantidade: number;
  preco: number;
}

export interface OrderResponse {
  ativo: string;
  lado: string;
  quantidade: number;
  preco: number;
  sucesso: boolean;
  exposicao_atual?: number;
  msg_erro?: string;
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://localhost:5000/api/order';

  constructor(private http: HttpClient) {}

  createOrder(order: Order): Observable<OrderResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<OrderResponse>(this.apiUrl, order, { headers });
  }
}
