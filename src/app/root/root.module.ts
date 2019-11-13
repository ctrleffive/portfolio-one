import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DisqusModule, DISQUS_SHORTNAME } from 'ngx-disqus'

import { environment as ENV } from 'src/environments/environment'

import { RootComponent } from './root.component'
import { HeaderComponent } from '../partials/header/header.component'
import { AnalyticsService } from '../shared/analytics.service'
import { SystemService } from '../shared/system.service'

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
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    DisqusModule.forRoot(ENV.disqusId)
  ],
  declarations: [
    RootComponent,
    HeaderComponent,
  ],
  providers: [
    SystemService,
    AnalyticsService,
    { provide: DISQUS_SHORTNAME, useValue: ENV.disqusId }
  ],
  bootstrap: [RootComponent]
})
export class RootModule { }
