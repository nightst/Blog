import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post15Component } from './post15.component';

describe('Post15Component', () => {
  let component: Post15Component;
  let fixture: ComponentFixture<Post15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Post15Component]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Post15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
