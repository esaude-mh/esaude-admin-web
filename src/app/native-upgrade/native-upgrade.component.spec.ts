import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeUpgradeComponent } from './native-upgrade.component';

describe('NativeUpgradeComponent', () => {
  let component: NativeUpgradeComponent;
  let fixture: ComponentFixture<NativeUpgradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeUpgradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeUpgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
