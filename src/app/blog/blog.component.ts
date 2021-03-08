import { Component, OnInit } from '@angular/core';
import { blog } from './blog.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs: blog[] = [];
  id = 1;
  constructor() { }

  ngOnInit(): void {
  }

  submit(blog) {
    let newBlog = { id: this.id++, post: blog.value, date: new Date() }
    this.blogs.push(newBlog)
    blog.value = "";
  }

  remove(blogId){
    this.blogs = this.blogs.filter(blog => blog.id !== blogId)
  }

}
