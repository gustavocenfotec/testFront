import { Component } from '@angular/core';
import { GustavoComponent } from '../gustavo/gustavo.component';
import { JoseComponent } from '../jose/jose.component';
import { LuisCarlosComponent } from '../luis-carlos/luis-carlos.component';
import { FalonComponent } from '../falon/falon.component';

@Component({
  selector: 'app-companeros',
  standalone: true,
  imports: [GustavoComponent, JoseComponent, LuisCarlosComponent, FalonComponent],
  templateUrl: './companeros.component.html',
  styleUrl: './companeros.component.scss'
})
export class CompanerosComponent {

}
