import { NgModule } from '@angular/core'
import { WorkSingleComponent } from './work-single.component'
import { NgxMasonryModule } from 'ngx-masonry'
import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'

const routes: Routes = [
  {
    path: '',
    component: WorkSingleComponent
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
    WorkSingleComponent
  ],
  providers: [],
  bootstrap: [WorkSingleComponent]
})
export class WorkSingleModule { }
