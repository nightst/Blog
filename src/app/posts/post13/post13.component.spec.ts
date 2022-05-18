import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post13Component } from './post13.component';

describe('Post13Component', () => {
  let component: Post13Component;
  let fixture: ComponentFixture<Post13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Post13Component]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Post13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
