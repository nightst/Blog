import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post12Component } from './post12.component';

describe('Post12Component', () => {
  let component: Post12Component;
  let fixture: ComponentFixture<Post12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Post12Component]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Post12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
