import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post23Component } from './post23.component';

describe('Post23Component', () => {
  let component: Post23Component;
  let fixture: ComponentFixture<Post23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Post23Component]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Post23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
