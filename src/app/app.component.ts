import {Component, OnInit} from '@angular/core';

export interface  Post {
  title:string
  text:string
  id?:number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{
  title= 'angular-components';

  posts: Post[] = [
    {
      text: '1hjksjk',
      title: 'Title 1',
      id:1
    }/*,
    {
      text: '2hjksjkcashkbhj hksbdhj sbsdash dhjsb dhjas',
      title: 'Title 2',
      id:2
    }*/
  ]
  ngOnInit(): void {
    setTimeout(()=>{
      console.log('timeout')
      this.posts[0].title = 'Changed'
    },5000)
  }

  updatePosts(post: Post){
    // add post in the begining
    const id = this.posts[this.posts.length-1].id++
    post.id = id
    this.posts.unshift(post)
  }

  removePost(id:number){
    this.posts = this.posts.filter(p=>p.id!==id)
  }
}
