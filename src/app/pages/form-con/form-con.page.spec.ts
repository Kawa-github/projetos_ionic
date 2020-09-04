import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormConPage } from './form-con.page';

describe('FormConPage', () => {
  let component: FormConPage;
  let fixture: ComponentFixture<FormConPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormConPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormConPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
