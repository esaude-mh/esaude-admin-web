import { Component, OnInit } from '@angular/core';

import { About } from './about';

import { AboutService } from './about.service';

@Component({
  selector: 'esaude-admin-about',
  templateUrl: './about.component.html',
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }`],
  providers: [AboutService]
})
export class AboutComponent implements OnInit {

  title = 'About';
  about: About;
  error: any;

  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    this.getAbout();
  }

  getAbout(): void {
    this.aboutService.getAbout().then(about => {
      this.about = about;
    })
  }
}
