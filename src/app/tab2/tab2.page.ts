import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public item: object;

  constructor() {
    this.item = [
      {
        img: "https://cdn.pixabay.com/photo/2020/06/01/22/23/eye-5248678__340.jpg",
        title: "Travel 1",
        subTitle: "Around the world",
        content: "Go to your destination."
      },
      {
        img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        title: "Travel 2",
        subTitle: "Around the world",
        content: "Go to your destination."
      },
      {
        img: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
        title: "Travel 3",
        subTitle: "Around the world",
        content: "Go to your destination."
      },
      {
        img: "https://www.w3schools.com/w3css/img_lights.jpg",
        title: "Travel 4",
        subTitle: "Around the world",
        content: "Go to your destination."
      }
    ];
  }

  }

