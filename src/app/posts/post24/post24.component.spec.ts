import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post24Component } from './post24.component';

describe('Post24Component', () => {
  let component: Post24Component;
  let fixture: ComponentFixture<Post24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Post24Component]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Post24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
