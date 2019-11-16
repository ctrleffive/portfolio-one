import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Blog } from 'src/app/models/blog'
import { SystemService } from 'src/app/shared/system.service'

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

  private async getData(): Promise<void> {
    this.systemService.loader = true
    const apiResponse: any = await this.http.get('/assets/data/blog.json').toPromise()
    this.blogs = Blog.fromJsonList(apiResponse)
    this.systemService.loader = false
  }

  ngOnInit(): void {
    this.getData()
    this.systemService.appTitle = 'Blog of Chandu'
  }
}
