import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { IPost } from '../../models/ipost';
import { IClass } from '../../models/iclass';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrl: './post-attivi.component.scss'
})
export class PostAttiviComponent {

  posts:IPost[] = [];

  constructor(private postsService:PostsService){}

  ngOnInit(){
    this.posts = this.postsService.getActivePosts();
  }

  postsToggle(p:IPost){
    p.active = !p.active;
    this.posts = this.postsService.getActivePosts();
  };

  setClass(p:IPost):IClass{
    const classObj:IClass = {
      "text-bg-warning": false,
      "text-bg-dark": false,
      "text-bg-primary": false,
    }

    switch (p.category) {
      case "news":
        classObj["text-bg-warning"] = true;
        break;
      case "politic":
        classObj["text-bg-dark"] = true;
        break;
      default:
        classObj["text-bg-primary"] = true;
        break;
    }

    return classObj;
  };
}
