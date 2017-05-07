import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MdToolbarModule } from '@angular/material';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        MdToolbarModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  }));

  it(`should have as title 'eSaude Admin'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app.title).toEqual('eSaude Admin');
  }));

  it('should render title in navbar', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('md-toolbar > div > \
      md-toolbar-row > span:nth-child(1)'));
    const el = de.nativeElement;

    expect(el.textContent).toContain('eSaude Admin');
  }));

  it('should provide links to the expected pages', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const pages = [
        { title: "Apps", route: "/apps" },
        { title: "Backups", route: "/backups" },
        { title: "Native Upgrade", route: "#" },
        { title: "About", route: "/about" },
    ];
    const links = fixture.debugElement.queryAll(By.css('md-toolbar > div > \
      md-toolbar-row > button'));

    // Make sure navigation links are exactly what we expect
    links.forEach((val, i) => {
        expect(val.attributes["ng-reflect-router-link"]).toEqual(
          pages[pages.findIndex((e) => { return e.title == val.nativeElement.innerText })].route);
    });

    console.log('ohai'); // asd
  }));
});
