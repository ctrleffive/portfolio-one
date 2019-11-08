import { NgModule } from '@angular/core'
import { BlogSingleComponent } from './blog-single.component'
import { NgxMasonryModule } from 'ngx-masonry'
import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'

const routes: Routes = [
  {
    path: '',
    component: BlogSingleComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
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
