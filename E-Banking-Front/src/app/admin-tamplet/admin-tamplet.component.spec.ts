import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTampletComponent } from './admin-tamplet.component';

describe('AdminTampletComponent', () => {
  let component: AdminTampletComponent;
  let fixture: ComponentFixture<AdminTampletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminTampletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTampletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
