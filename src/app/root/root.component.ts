import { Component, Inject } from '@angular/core'
import { fadeAnimation } from '../animations/fade.animation'
import { Router, NavigationEnd } from '@angular/router'
import { DOCUMENT } from '@angular/common'
import { SystemService } from '../shared/system.service'
import { SafeHtml } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
  animations: [fadeAnimation]
})
export class RootComponent {
  public isPageBgVisible: boolean
  public pageBg: SafeHtml

  constructor(private systemService: SystemService) {
    this.systemService.listenToNavigation()
    this.listenForPageBg()
  }

  private listenForPageBg(): void {
    this.systemService.pageBg.subscribe(svgContent => {
      if (svgContent) {
        this.pageBg = svgContent
        setTimeout(() => this.isPageBgVisible = true, 200)
      } else {
        this.isPageBgVisible = false
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
