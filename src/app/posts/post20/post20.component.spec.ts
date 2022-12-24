import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post20Component } from './post20.component';

describe('Post20Component', () => {
  let component: Post20Component;
  let fixture: ComponentFixture<Post20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Post20Component]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Post20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
