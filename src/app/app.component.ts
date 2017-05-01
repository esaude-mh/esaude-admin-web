import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  //   <h1>{{title}}</h1>
  //   <nav>
  //     <a routerLink="/about">About</a>
  //     <a routerLink="/apps">Apps</a>
  //   </nav>
  //   <router-outlet></router-outlet>
  // `
})
export class AppComponent {
  title = 'eSaude Admin';
}


// import { Component, OnInit } from '@angular/core';
//
// import { About } from './about/about';
//
// import { AboutService } from './about/about.service';
//
// // const APPS: EsaudeApp[] = [
// //   { id: 1, name: 'eSaude Platform' },
// //   { id: 2, name: 'eSaude POC' },
// //   { id: 3, name: 'eSaude LIS' },
// //   { id: 4, name: 'eSaude Admin' }
// // ];
// //
// // export class EsaudeApp {
// //   id: number;
// //   name: string;
// //   // descrition: string;
// //   // version: string;
// //   // installed: boolean;
// //   // running: boolean;
// //   // homepage: string;
// //   // docs;
// // }
// //
// // export class About {
// //   version: string;
// //   description: string;
// // }
// //
// // export class NativeInstall {
// //   mysql_port: number;
// //   tomcat_port: number;
// // }
//
// // const ABOUT: About = {
// //   description: 'eSaude Admin',
// //   version: '1.0.0'
// // };
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   styles: [`
//   .selected {
//     background-color: #CFD8DC !important;
//     color: white;
//   }`],
//   providers: [AboutService]
// })
// export class AppComponent implements OnInit {
//
//   title = 'eSaude Admin';
//   about: About;
//   // native: NativeInstall = {
//   //   mysql_port: 3306,
//   //   tomcat_port: 8080
//   // };
//   // apps = APPS;
//   // selectedApp: EsaudeApp;
//   // onSelect(app: EsaudeApp): void {
//   //   this.selectedApp = app;
//   // }
//
//   constructor(private aboutService: AboutService) { }
//
//   ngOnInit(): void {
//     this.getAbout();
//   }
//
//   getAbout(): void {
//     this.aboutService.getAboutSlowly().then(about => {
//       console.log('about....: ');
//       console.log(about);
//       this.about = about;
//     })
//   }
// }
