import { Component } from '@angular/core';

@Component({
  selector: 'app-sport-teams',
  standalone: true,
  imports: [],
  templateUrl: './sport-teams.component.html',
  styleUrl: './sport-teams.component.scss'
})
export class SportTeamsComponent {

  name: string = 'Inter Miamia';
  description: string = 'A collection of sports teams and their details.';

}
