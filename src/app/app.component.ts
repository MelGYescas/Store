import { Component } from '@angular/core';
import { Product } from './product.moedel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'store';

  register = {
    name: '',
    email: '',
    password: ''
  }

  products:Product[] = [
    {
      name: 'Toalla medio cuerpo',
      price:135,
      image:"../assets/images/toa.jpg",
    },
    {
      name:'Pie de arbol mikey',
      price:400,
      image:"../assets/images/pie.jpg"
    },
    {
      name: 'Conjunto de toallas',
      price: 100,
      image:"../assets/images/toalla.jpg"
    },
    {
      name:'Bordado Pikachu',
      price:300,
      image:"../assets/images/pika.jpg"
    }
  ];
  onRegister(){
    console.log(this.register)
  }
}
