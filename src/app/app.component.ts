import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Joaquim';
  userAge = 19;
  userJob = 'Vendedor';
  userData = {email: 'joaquimsilva98@hotmail.com',
   role: 'Gerente',
   };

  title = 'curso-angular';
}
