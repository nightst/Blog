import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post11Component } from './post11.component';

describe('Post11Component', () => {
  let component: Post11Component;
  let fixture: ComponentFixture<Post11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Post11Component]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Post11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
