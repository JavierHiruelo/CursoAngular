import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Block } from '@angular/compiler';

@Component({
  selector: 'content-block',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './content-block.component.html',
  styleUrl: './content-block.component.css'
})
export class ContentBlockComponent implements OnInit{

  constructor() { }

  @Input() blocks: { title: string, description: string, src: string, alt: string }[] = [];
  ngOnInit(): void { }

}
