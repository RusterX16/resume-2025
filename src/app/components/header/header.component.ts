import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  name = "Eliott BARBET";
  title = "Junior Software Engineer";
  linkedinQRCodeURL = 'assets/images/linkedin.png';
  githubQRCodeURL   = 'assets/images/github.png';
}
