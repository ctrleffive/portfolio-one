import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { WelcomeComponent } from './welcome.component'

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [
    WelcomeComponent
  ],
  providers: [],
  bootstrap: [WelcomeComponent]
})
export class WelcomeModule { }
