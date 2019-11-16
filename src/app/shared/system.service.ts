import { Injectable, Inject } from '@angular/core'
import { DOCUMENT } from '@angular/common'
import { Router, NavigationEnd, NavigationStart } from '@angular/router'
import { BehaviorSubject } from 'rxjs'
import { SafeHtml, DomSanitizer } from '@angular/platform-browser'
import { HttpClient } from '@angular/common/http'

// tslint:disable-next-line: ban-types
declare let gtag: Function

@Injectable()
export class SystemService {
  public pageBg: BehaviorSubject<SafeHtml>

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private http: HttpClient,
    private sanitizer: DomSanitizer
    ) {
    this.pageBg = new BehaviorSubject('')
  }

  public listenToNavigation(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.pageBg.next(null)
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

  public set appTitle(value: string) {
    if (value && value !== '') {
      this.document.title = `${value} | Chandu J S`
    } else {
      this.document.title = 'Chandu J S 💻 Full Stack Developer'
    }
  }

  public async setBg(svgPath: string): Promise<void> {
    this.pageBg.next(null)
    const apiResponse: any = await this.http.get(`assets/images/bgs/${svgPath}`, { responseType: 'text' }).toPromise()
    const htmlContent: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(apiResponse)
    this.pageBg.next(htmlContent)
  }
}
