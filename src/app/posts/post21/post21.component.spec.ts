import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post21Component } from './post21.component';

describe('Post21Component', () => {
  let component: Post21Component;
  let fixture: ComponentFixture<Post21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Post21Component]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Post21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
