import { IClass } from '../../models/iclass';
import { IPost } from '../../models/ipost';
import { PostsService } from './../../services/posts.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrl: './post-attivi.component.scss'
})
export class PostAttiviComponent {
  posts:IPost[] = [];
  newPost:Partial<IPost> = {
    active: true,
  }
  constructor(private postsService:PostsService){}

  creaPost:boolean = false;
  creaUser:boolean = false;
  onLoad:boolean = false;
  windowOnLoad:boolean = false;

  async ngOnInit(){
    this.windowOnLoad = true;
    await this.getPosts();
    this.windowOnLoad = false;
  }

  creaPostHandle(){
    this.creaPost = !this.creaPost;
    this.creaUser = false;
  }

  creaUserHandle(){
    this.creaUser = !this.creaUser;
    this.creaPost = false;
  }

  async getPosts(){
    this.onLoad = true;
    this.posts = await this.postsService.getAll(true);
    console.log(this.posts);
    this.onLoad = false;
  }

  async createPost():Promise<void>{
    this.onLoad = true;
    const postRes:IPost = await this.postsService.create(this.newPost);
    this.posts.push(postRes)
    this.newPost = {
      active: true,
    }
    this.onLoad = false;
  }

  async deletePost(id:number|undefined):Promise<void>{
    this.windowOnLoad = true;
    if (id) await this.postsService.delete(id);
    this.posts = this.posts.filter(p => p.id != id);
    this.windowOnLoad = false;
  }

  async deactivatePost(id:number|undefined){
    let obj:{
      active:boolean|null;
    } = {
      active: null,
    }

    obj.active = false;

    if (id) {
      this.windowOnLoad = true;
      await this.postsService.update(id, obj);
      this.posts = this.posts.filter(p => p.id != id);
      this.windowOnLoad = false;
    }
  }

  classHandle(p:IPost):IClass{
    const classObj = {
      "text-bg-warning": p.category === "news",
      "text-bg-dark": p.category === "politic",
      "text-bg-primary": p.category === "education",
    }

    return classObj;
  }
}
