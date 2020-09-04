import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OptionsConPage } from './options-con.page';

describe('OptionsConPage', () => {
  let component: OptionsConPage;
  let fixture: ComponentFixture<OptionsConPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsConPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OptionsConPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
