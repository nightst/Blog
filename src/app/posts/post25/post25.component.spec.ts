import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post25Component } from './post25.component';

describe('Post25Component', () => {
  let component: Post25Component;
  let fixture: ComponentFixture<Post25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Post25Component]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Post25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
