import { Component } from '@angular/core';
import { IPosts } from '../../models/iposts';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrl: './post-attivi.component.scss'
})
export class PostAttiviComponent {
  posts:IPosts[] = [];

  constructor(private postsService:PostsService){};

  ngOnInit(){
    this.posts = this.postsService.activePosts;
  }
}
