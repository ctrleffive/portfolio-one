import { Component, Inject } from '@angular/core'
import { fadeAnimation } from '../animations/fade.animation'
import { Router, NavigationEnd } from '@angular/router'
import { DOCUMENT } from '@angular/common'
import { SystemService } from '../shared/system.service'

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
  animations: [fadeAnimation]
})
export class RootComponent {
  constructor(private systemService: SystemService) {
    this.systemService.listenToNavigation()
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
