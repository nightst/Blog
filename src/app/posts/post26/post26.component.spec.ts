import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post26Component } from './post26.component';

describe('Post26Component', () => {
  let component: Post26Component;
  let fixture: ComponentFixture<Post26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Post26Component]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Post26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
