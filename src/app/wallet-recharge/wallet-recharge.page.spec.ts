import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletRechargePage } from './wallet-recharge.page';

describe('WalletRechargePage', () => {
  let component: WalletRechargePage;
  let fixture: ComponentFixture<WalletRechargePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletRechargePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletRechargePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
