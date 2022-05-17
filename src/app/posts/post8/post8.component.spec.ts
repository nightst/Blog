import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post8Component } from './post8.component';

describe('Post8Component', () => {
  let component: Post8Component;
  let fixture: ComponentFixture<Post8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Post8Component]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Post8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
