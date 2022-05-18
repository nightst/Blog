import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post9Component } from './post9.component';

describe('Post9Component', () => {
  let component: Post9Component;
  let fixture: ComponentFixture<Post9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Post9Component]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Post9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
