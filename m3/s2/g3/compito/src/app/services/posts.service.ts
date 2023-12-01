import { Injectable } from '@angular/core';
import { IPost } from '../models/ipost';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts:IPost[] = [
    {
      id: 1,
      title: "Lorem ipsum",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit nemo odio quod recusandae placeat, vel magni voluptatibus. Itaque eius quos ducimus. Earum dolorem a doloribus unde debitis quam in?",
      category: "news",
      active: true,
    },
    {
      id: 2,
      title: "Lorem ipsum",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit nemo odio quod recusandae placeat, vel magni voluptatibus. Itaque eius quos ducimus. Earum dolorem a doloribus unde debitis quam in?",
      category: "politic",
      active: false,
    },
    {
      id: 3,
      title: "Lorem ipsum",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit nemo odio quod recusandae placeat, vel magni voluptatibus. Itaque eius quos ducimus. Earum dolorem a doloribus unde debitis quam in?",
      category: "politic",
      active: true,
    },
    {
      id: 4,
      title: "Lorem ipsum",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit nemo odio quod recusandae placeat, vel magni voluptatibus. Itaque eius quos ducimus. Earum dolorem a doloribus unde debitis quam in?",
      category: "news",
      active: false,
    },
    {
      id: 5,
      title: "Lorem ipsum",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit nemo odio quod recusandae placeat, vel magni voluptatibus. Itaque eius quos ducimus. Earum dolorem a doloribus unde debitis quam in?",
      category: "education",
      active: true,
    },
    {
      id: 6,
      title: "Lorem ipsum",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit nemo odio quod recusandae placeat, vel magni voluptatibus. Itaque eius quos ducimus. Earum dolorem a doloribus unde debitis quam in?",
      category: "education",
      active: true,
    },
    {
      id: 7,
      title: "Lorem ipsum",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit nemo odio quod recusandae placeat, vel magni voluptatibus. Itaque eius quos ducimus. Earum dolorem a doloribus unde debitis quam in?",
      category: "news",
      active: false,
    },
    {
      id: 8,
      title: "Lorem ipsum",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit nemo odio quod recusandae placeat, vel magni voluptatibus. Itaque eius quos ducimus. Earum dolorem a doloribus unde debitis quam in?",
      category: "politic",
      active: false,
    },
    {
      id: 9,
      title: "Lorem ipsum",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit nemo odio quod recusandae placeat, vel magni voluptatibus. Itaque eius quos ducimus. Earum dolorem a doloribus unde debitis quam in?",
      category: "politic",
      active: true,
    },
    {
      id: 10,
      title: "Lorem ipsum",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit nemo odio quod recusandae placeat, vel magni voluptatibus. Itaque eius quos ducimus. Earum dolorem a doloribus unde debitis quam in?",
      category: "education",
      active: false,
    },
  ];

  getActivePosts(){
    return this.posts.filter(p => p.active);
  }

  getNotActivePosts(){
    return this.posts.filter(p => !p.active);
  }
}
