import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RootComponent } from './root.component';

describe('RootComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        RootComponent
      ],
    }).compileComponents();
  }));

  it('should create the root app', () => {
    const fixture = TestBed.createComponent(RootComponent);
    const root = fixture.debugElement.componentInstance;
    expect(root).toBeTruthy();
  });

  it(`should have as title 'cms'`, () => {
    const fixture = TestBed.createComponent(RootComponent);
    const root = fixture.debugElement.componentInstance;
    expect(root.title).toEqual('cms');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(RootComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to cms!');
  });
});
