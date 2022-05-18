import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post14Component } from './post14.component';

describe('Post14Component', () => {
  let component: Post14Component;
  let fixture: ComponentFixture<Post14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Post14Component]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Post14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
