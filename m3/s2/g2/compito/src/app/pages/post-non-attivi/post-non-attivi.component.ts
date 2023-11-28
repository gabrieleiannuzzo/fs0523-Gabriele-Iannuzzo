import { PostsService } from './../../posts.service';
import { Component } from '@angular/core';
import {IPosts} from '../../models/iposts';

@Component({
  selector: 'app-post-non-attivi',
  templateUrl: './post-non-attivi.component.html',
  styleUrl: './post-non-attivi.component.scss'
})
export class PostNonAttiviComponent {
  posts:IPosts[] = [];

  constructor(private PostsService:PostsService){}

  ngOnInit(){
    this.posts = this.PostsService.notActivePosts;
  }
}
