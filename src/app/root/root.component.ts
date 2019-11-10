import { Component, Inject } from '@angular/core'
import { fadeAnimation } from '../animations/fade.animation'
import { Router, NavigationEnd } from '@angular/router'
import { DOCUMENT } from '@angular/common'

// tslint:disable-next-line: ban-types
declare let gtag: Function

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
  animations: [fadeAnimation]
})
export class RootComponent {
  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
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

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : ''
  }

  public onActivate(event) {
    const scrollToTop = window.setInterval(() => {
      const position = window.pageYOffset
      if (position > 0) {
        window.scrollTo(0, position - 20)
      } else {
        window.clearInterval(scrollToTop)
      }
    }, 16)
  }
}
