import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post19Component } from './post19.component';

describe('Post19Component', () => {
  let component: Post19Component;
  let fixture: ComponentFixture<Post19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Post19Component]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Post19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
