import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post22Component } from './post22.component';

describe('Post22Component', () => {
  let component: Post22Component;
  let fixture: ComponentFixture<Post22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Post22Component]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Post22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
