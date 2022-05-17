import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post7Component } from './post7.component';

describe('Post7Component', () => {
  let component: Post7Component;
  let fixture: ComponentFixture<Post7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Post7Component]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Post7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
