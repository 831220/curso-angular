import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[]=['spiderman', 'hulk', 'thor', 'batman'];
  heroedeleted: string  = '';

borrarHeroe(){
  const heroeborrado = this.heroes.shift();
  this.heroedeleted = heroeborrado?.toString() || '';
}

}
