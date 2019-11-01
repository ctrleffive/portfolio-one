import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { WorksComponent } from './works.component'

const routes: Routes = [
  {
    path: '',
    component: WorksComponent,
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [
    WorksComponent
  ],
  providers: [],
  bootstrap: [WorksComponent]
})
export class WorksModule { }
