import { Injectable, Inject } from '@angular/core'
import { DOCUMENT } from '@angular/common'
import { Router, NavigationEnd, NavigationStart } from '@angular/router'

// tslint:disable-next-line: ban-types
declare let gtag: Function

@Injectable()
export class SystemService {
  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) {}

  public listenToNavigation(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loader = true
      } else if (event instanceof NavigationEnd) {
        this.loader = false
        gtag('config', 'G-5HYWSQFG6F', { page_path: event.urlAfterRedirects })

        const firstPart: string = event.url.split('/')[1]
        if (firstPart === 'blog') {
          this.document.body.classList.add('lights-on')
        } else {
          this.document.body.classList.remove('lights-on')
        }
      }
    })
  }

  public set loader(value: boolean) {
    if (value) {
      this.document.body.classList.add('loading')
    } else {
      this.document.body.classList.remove('loading')
    }
  }
}
