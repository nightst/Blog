import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post16Component } from './post16.component';

describe('Post16Component', () => {
  let component: Post16Component;
  let fixture: ComponentFixture<Post16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Post16Component]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Post16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
