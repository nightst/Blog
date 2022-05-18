import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post10Component } from './post10.component';

describe('Post10Component', () => {
  let component: Post10Component;
  let fixture: ComponentFixture<Post10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Post10Component]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Post10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
