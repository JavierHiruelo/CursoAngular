import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockImageComponent } from './block-image.component';

describe('BlockImageComponent', () => {
  let component: BlockImageComponent;
  let fixture: ComponentFixture<BlockImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
