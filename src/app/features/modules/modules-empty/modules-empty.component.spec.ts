import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesEmptyComponent } from './modules-empty.component';

describe('ModulesEmptyComponent', () => {
  let component: ModulesEmptyComponent;
  let fixture: ComponentFixture<ModulesEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulesEmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
