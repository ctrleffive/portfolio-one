import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Blog } from 'src/app/models/blog'
import { SystemService } from 'src/app/shared/system.service'
import { BlogData } from 'src/app/data/blog'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  public blogs: Array<Blog>

  constructor(private http: HttpClient, private systemService: SystemService) {
    this.blogs = []
  }

  ngOnInit(): void {
    this.blogs = BlogData.all
    this.systemService.appTitle = 'Blog of Chandu'
    this.systemService.setBg('blog.svg')
  }
}
