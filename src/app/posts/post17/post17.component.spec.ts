import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post17Component } from './post17.component';

describe('Post17Component', () => {
  let component: Post17Component;
  let fixture: ComponentFixture<Post17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Post17Component]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Post17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
