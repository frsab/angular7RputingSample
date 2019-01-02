import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';

import { AutretableauComponent } from './autretableau.component';

describe('AutretableauComponent', () => {
  let component: AutretableauComponent;
  let fixture: ComponentFixture<AutretableauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutretableauComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutretableauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
