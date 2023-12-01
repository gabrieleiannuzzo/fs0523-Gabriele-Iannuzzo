import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { IPost } from '../../models/ipost';
import { IClass } from '../../models/iclass';

@Component({
  selector: 'app-post-non-attivi',
  templateUrl: './post-non-attivi.component.html',
  styleUrl: './post-non-attivi.component.scss'
})
export class PostNonAttiviComponent {
  posts:IPost[] = [];

  constructor(private postsService:PostsService){}

  ngOnInit(){
    this.posts = this.postsService.getNotActivePosts();
  }

  postsToggle(p:IPost){
    p.active = !p.active;
    this.posts = this.postsService.getNotActivePosts();
  };

  setClass(p:IPost):IClass{
    const classObj:IClass = {
      "text-bg-warning": false,
      "text-bg-dark": false,
      "text-bg-primary": false,
    }

    if (p.category == "news") classObj["text-bg-warning"] = true;
    else if (p.category == "politic") classObj["text-bg-dark"] = true;
    else classObj["text-bg-primary"] = true;

    return classObj;
  };
}
