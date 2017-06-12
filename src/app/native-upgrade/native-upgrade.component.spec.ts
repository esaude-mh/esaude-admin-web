import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeUpgradeComponent } from './native-upgrade.component';
import { TestRunningComponent } from './test-running/test-running.component';
import {  MdCardModule,
  MdGridListModule,
  MdTooltipModule } from '@angular/material';

describe('NativeUpgradeComponent', () => {
  let component: NativeUpgradeComponent;
  let fixture: ComponentFixture<NativeUpgradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NativeUpgradeComponent,
        TestRunningComponent
      ],
      imports: [
        MdCardModule,
        MdGridListModule,
        MdTooltipModule
      ],
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
