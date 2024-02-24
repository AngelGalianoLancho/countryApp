import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styles: ``
})
// export class PropagadorComponent {
//   mensaje: string;

//   @Output() propagar = new EventEmitter<string>();

//   onPropagar() {
//     this.emisor.emit(this.mensaje);
//   }
// }
export class SearchBoxComponent {
  @Input() placeholder:string='';
  mensaje!: string;

  @Output() public emisor = new EventEmitter<string>();

  onPropagar(mensaje:string) {
    this.emisor.emit(mensaje);
  }
}
