import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-table',
  standalone: true,
  imports: [],
  templateUrl: './country-table.component.html',
  styles: ``
})
export class CountryTableComponent {
  @Input() countries: Country[] = [];
}
