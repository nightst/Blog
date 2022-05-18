import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post18Component } from './post18.component';

describe('Post18Component', () => {
  let component: Post18Component;
  let fixture: ComponentFixture<Post18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Post18Component]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Post18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
