import { Component } from '@angular/core';

@Component({
  selector: 'content-block',
  standalone: true,
  imports: [

  ],
  templateUrl: './content-block.component.html',
  styleUrl: './content-block.component.css'
})
export class ContentBlockComponent {

  constructor() { }

  ngOnInit(): void { }

  block_title: string = "Ejercicios"
  src: string = 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  alt: string = 'Image';
  description: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam excepturi in id consequuntur dolores possimus tempore. '

}
