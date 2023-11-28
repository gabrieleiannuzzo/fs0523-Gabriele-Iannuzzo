import { Injectable } from '@angular/core';
import { IPosts } from './models/iposts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts:IPosts[] = [
    {
      id: 1,
      title: "lorem ipsum",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid asperiores officiis facere nesciunt minima molestiae, consectetur commodi ex deleniti quasi possimus eaque sed laudantium nulla porro, molestias atque laboriosam ipsa!",
      active: true,
    },
    {
      id: 2,
      title: "lorem ipsum",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid asperiores officiis facere nesciunt minima molestiae, consectetur commodi ex deleniti quasi possimus eaque sed laudantium nulla porro, molestias atque laboriosam ipsa!",
      active: true,
    },
    {
      id: 3,
      title: "lorem ipsum",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid asperiores officiis facere nesciunt minima molestiae, consectetur commodi ex deleniti quasi possimus eaque sed laudantium nulla porro, molestias atque laboriosam ipsa!",
      active: true,
    },
    {
      id: 4,
      title: "lorem ipsum",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid asperiores officiis facere nesciunt minima molestiae, consectetur commodi ex deleniti quasi possimus eaque sed laudantium nulla porro, molestias atque laboriosam ipsa!",
      active: true,
    },
    {
      id: 5,
      title: "lorem ipsum",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid asperiores officiis facere nesciunt minima molestiae, consectetur commodi ex deleniti quasi possimus eaque sed laudantium nulla porro, molestias atque laboriosam ipsa!",
      active: true,
    },
    {
      id: 6,
      title: "lorem ipsum",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid asperiores officiis facere nesciunt minima molestiae, consectetur commodi ex deleniti quasi possimus eaque sed laudantium nulla porro, molestias atque laboriosam ipsa!",
      active: true,
    },
    {
      id: 7,
      title: "lorem ipsum",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid asperiores officiis facere nesciunt minima molestiae, consectetur commodi ex deleniti quasi possimus eaque sed laudantium nulla porro, molestias atque laboriosam ipsa!",
      active: false,
    },
    {
      id: 8,
      title: "lorem ipsum",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid asperiores officiis facere nesciunt minima molestiae, consectetur commodi ex deleniti quasi possimus eaque sed laudantium nulla porro, molestias atque laboriosam ipsa!",
      active: false,
    },
    {
      id: 9,
      title: "lorem ipsum",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid asperiores officiis facere nesciunt minima molestiae, consectetur commodi ex deleniti quasi possimus eaque sed laudantium nulla porro, molestias atque laboriosam ipsa!",
      active: true,
    },
    {
      id: 10,
      title: "lorem ipsum",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid asperiores officiis facere nesciunt minima molestiae, consectetur commodi ex deleniti quasi possimus eaque sed laudantium nulla porro, molestias atque laboriosam ipsa!",
      active: false,
    }
  ]

  activePosts:IPosts[] = this.posts.filter(p => p.active);
  notActivePosts:IPosts[] = this.posts.filter(p => !p.active);
}
