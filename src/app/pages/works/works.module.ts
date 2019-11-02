import { NgModule } from '@angular/core'
import { WorksComponent } from './works.component'
import { NgxMasonryModule } from 'ngx-masonry'
import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

const routes: Routes = [
  {
    path: '',
    component: WorksComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxMasonryModule
  ],
  declarations: [
    WorksComponent
  ],
  providers: [],
  bootstrap: [WorksComponent]
})
export class WorksModule { }
