import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute, Router } from '@angular/router'
import { Blog } from 'src/app/models/blog'
import { SystemService } from 'src/app/shared/system.service'

import 'prismjs'

import 'clipboard'

import 'prismjs/plugins/toolbar/prism-toolbar'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard'

import 'prismjs/components/prism-markup-templating'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-php'
import 'prismjs/components/prism-dart'
import 'prismjs/components/prism-yaml'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-json'

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.scss']
})
export class BlogSingleComponent implements OnInit {
  public meta: Blog
  public isVisible: boolean

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private systemService: SystemService
    ) {
      this.isVisible = false
    }

  private async getData(): Promise<void> {
    this.systemService.loader = true
    const slug: string = this.route.snapshot.paramMap.get('slug')
    const apiResponse: any = await this.http.get('/assets/data/blog.json').toPromise()
    const blog: Array<Blog> = Blog.fromJsonList(apiResponse).filter(item => item.slug === slug)
    if (blog.length) {
      this.meta = blog[0]
      this.systemService.appTitle = this.meta.title
    } else {
      this.router.navigate(['/blog'])
    }
    this.systemService.loader = false
  }

  public mdLoaded(): void {
    this.isVisible = true
  }

  ngOnInit(): void {
    this.getData()
  }
}
