import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { RootComponent } from './root.component'
import { HeaderComponent } from '../partials/header/header.component'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('../pages/welcome/welcome.module').then(file => file.WelcomeModule)
      },
      {
        path: 'works',
        loadChildren: () => import('../pages/works/works.module').then(file => file.WorksModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('../pages/blog/blog.module').then(file => file.BlogModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../pages/about/about.module').then(file => file.AboutModule)
      }
    ]
  },
]

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    RootComponent,
    HeaderComponent,
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
