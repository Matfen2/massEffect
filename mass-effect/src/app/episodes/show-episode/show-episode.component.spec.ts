import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEpisodeComponent } from './show-episode.component';

describe('ShowEpisodeComponent', () => {
  let component: ShowEpisodeComponent;
  let fixture: ComponentFixture<ShowEpisodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowEpisodeComponent]
    });
    fixture = TestBed.createComponent(ShowEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
