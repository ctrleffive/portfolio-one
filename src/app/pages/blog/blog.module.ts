import { NgModule } from '@angular/core'
import { BlogComponent } from './blog.component'
import { NgxMasonryModule } from 'ngx-masonry'
import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: BlogComponent
      },
      {
        path: ':slug',
        loadChildren: () => import('../blog-single/blog-single.module').then(file => file.BlogSingleModule)
      },
    ]
  },
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    NgxMasonryModule
  ],
  declarations: [
    BlogComponent
  ],
  providers: [],
  bootstrap: [BlogComponent]
})
export class BlogModule { }
