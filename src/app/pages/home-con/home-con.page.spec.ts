import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeConPage } from './home-con.page';

describe('HomeConPage', () => {
  let component: HomeConPage;
  let fixture: ComponentFixture<HomeConPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeConPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeConPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
