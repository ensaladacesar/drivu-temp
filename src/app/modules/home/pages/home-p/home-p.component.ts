import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-p',
  templateUrl: './home-p.component.html',
  styleUrls: ['./home-p.component.scss'],
})
export class HomePComponent implements OnInit {
  images: any;
  responsiveOption: any;
  masonryItems: any;

  constructor() {
    this.responsiveOption = [
      {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 3,
      },
    ];
  }

  ngOnInit(): void {
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
