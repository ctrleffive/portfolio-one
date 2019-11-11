import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MarkdownModule, MarkedOptions } from 'ngx-markdown'
import { NgxMasonryModule } from 'ngx-masonry'
import { HttpClientModule } from '@angular/common/http'
import { Routes, RouterModule } from '@angular/router'
import { BlogSingleComponent } from './blog-single.component'
import { DisqusModule } from 'ngx-disqus'

const routes: Routes = [
  {
    path: '',
    component: BlogSingleComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    DisqusModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
        },
      }
    }),
    RouterModule.forChild(routes),
    NgxMasonryModule
  ],
  declarations: [
    BlogSingleComponent
  ],
  providers: [],
  bootstrap: [BlogSingleComponent]
})
export class BlogSingleModule { }
