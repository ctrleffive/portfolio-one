import { BrowserModule } from '@angular/platform-browser'
import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { HeaderComponent } from './partials/header/header.component'

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/welcome/welcome.module').then(file => file.WelcomeModule)
      },
      {
        path: 'works',
        loadChildren: () => import('./pages/works/works.module').then(file => file.WorksModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./pages/about/about.module').then(file => file.AboutModule)
      }
    ]
  },
]

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
