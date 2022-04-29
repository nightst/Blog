import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post0Component } from './post0.component';

describe('Post0Component', () => {
  let component: Post0Component;
  let fixture: ComponentFixture<Post0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Post0Component]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Post0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
