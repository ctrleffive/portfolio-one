import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { AboutComponent } from './about.component'

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [
    AboutComponent
  ],
  providers: [],
  bootstrap: [AboutComponent]
})
export class AboutModule { }
