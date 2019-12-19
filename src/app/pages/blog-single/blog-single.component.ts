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
import { BlogData } from 'src/app/data/blog'

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

  private getData(): void {
    try {
      const slug: string = this.route.snapshot.paramMap.get('slug')
      this.meta = BlogData.single(slug)
      this.systemService.appTitle = this.meta.title
    } catch (error) {
      this.router.navigate(['/blog'])
    }
  }

  public mdLoaded(): void {
    this.isVisible = true
  }

  ngOnInit(): void {
    this.getData()
  }
}
