import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Blog } from 'src/app/models/blog'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  public blogs: Array<Blog>

  constructor(private http: HttpClient) {
    this.blogs = []
  }

  private async getData(): Promise<void> {
    const apiResponse: any = await this.http.get('/assets/data/blog.json').toPromise()
    this.blogs = Blog.fromJsonList(apiResponse)
  }

  ngOnInit(): void {
    this.getData()
  }
}
