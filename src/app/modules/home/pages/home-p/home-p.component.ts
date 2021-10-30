import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-p',
  templateUrl: './home-p.component.html',
  styleUrls: ['./home-p.component.scss'],
})
export class HomePComponent implements OnInit {
  images: any;
  masonryItems: any;

  constructor() {

  }

  ngOnInit(): void {
    this.items();
  }

  items(){
    this.images = [
      {
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit minima quaerat quas odio, perferendis, voluptates nisi a ',
        picture: '../../../../../assets/images/perfil.png',
        nombre:'Cindy Syahriani',
        ciudad: 'Jakarta, Indonesia',
        rank: 3.1
      },
      {
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit minima quaerat quas odio, perferendis, voluptates nisi a ',
        picture: '../../../../../assets/images/perfil.png',
        nombre:'Cindy Syahriani',
        ciudad: 'Jakarta, Indonesia',
        rank: 3.1
      },
      {
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit minima quaerat quas odio, perferendis, voluptates nisi a ',
        picture: '../../../../../assets/images/perfil.png',
        nombre:'Cindy Syahriani',
        ciudad: 'Jakarta, Indonesia',
        rank: 3.1
      },
      {
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit minima quaerat quas odio, perferendis, voluptates nisi a ',
        picture: '../../../../../assets/images/perfil.png',
        nombre:'Cindy Syahriani',
        ciudad: 'Jakarta, Indonesia',
        rank: 3.1
      },
      {
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit minima quaerat quas odio, perferendis, voluptates nisi a ',
        picture: '../../../../../assets/images/perfil.png',
        nombre:'Cindy Syahriani',
        ciudad: 'Jakarta, Indonesia',
        rank: 3.1
      },
      {
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit minima quaerat quas odio, perferendis, voluptates nisi a ',
        picture: '../../../../../assets/images/perfil.png',
        nombre:'Cindy Syahriani',
        ciudad: 'Jakarta, Indonesia',
        rank: 3.1
      },
    ];
    this.masonryItems = [
      { title: '../../../../../assets/images/perfil.png' },
      { title: '../../../../../assets/images/perfil.png' },
    ];

  }
}
