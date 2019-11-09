import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute, Router } from '@angular/router'
import { Blog } from 'src/app/models/blog'

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.scss']
})
export class BlogSingleComponent implements OnInit {
  public meta: Blog
  public data: any

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  private async getData(): Promise<void> {
    const slug: string = this.route.snapshot.paramMap.get('slug')
    const apiResponse: any = await this.http.get('/assets/data/blog.json').toPromise()
    const blog: Array<Blog> = Blog.fromJsonList(apiResponse).filter(item => item.slug === slug)
    if (blog.length) {
      this.meta = blog[0]
      this.data = await this.http.get(`/assets/data/blog/${slug}.md`, {
        responseType: 'text'
      }).toPromise()
    } else {
      this.router.navigate(['/blog'])
    }
  }

  ngOnInit(): void {
    this.getData()
  }
}
