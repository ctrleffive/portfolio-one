import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { WelcomeComponent } from './welcome.component'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    WelcomeComponent
  ],
  providers: [],
  bootstrap: [WelcomeComponent]
})
export class WelcomeModule { }
