import { Component } from '@angular/core';
import { Order, OrderService, OrderResponse } from './order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  order: Order = {
    ativo: 'PETR4',
    lado: 'C',
    quantidade: 0,
    preco: 0,
  };

  response: OrderResponse | null = null;

  constructor(private orderService: OrderService) {}

  onSubmit(): void {
    this.orderService.createOrder(this.order).subscribe({
      next: (data: OrderResponse) => {
        this.response = data;
      },
      error: (error) => {
        console.error('Erro ao enviar o pedido:', error);
        this.response = {
          ativo: '',
          lado: '',
          quantidade: 0,
          preco: 0,
          sucesso: false,
          msg_erro: 'Erro ao enviar o pedido',
        };
      },
    });
  }
}
