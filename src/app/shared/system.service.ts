import { Injectable, Inject } from '@angular/core'
import { DOCUMENT } from '@angular/common'
import { Router, NavigationEnd, NavigationStart } from '@angular/router'
import { SafeHtml, DomSanitizer } from '@angular/platform-browser'
import { HttpClient } from '@angular/common/http'
import { environment as ENV } from 'src/environments/environment'
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'

// tslint:disable-next-line: ban-types
declare let gtag: Function

@Injectable()
export class SystemService {
  public pageBg: BehaviorSubject<SafeHtml>
  public isBlogPage: boolean

  private emails: Array<string>
  private emailIndex: number

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private http: HttpClient,
    private sanitizer: DomSanitizer
    ) {
    this.isBlogPage = false
    this.pageBg = new BehaviorSubject('')
    this.emails = ['hello', 'hola', 'bonjour', 'hi', 'hallo', 'ciao', 'namaste', 'salaam']
    this.emailIndex = Math.ceil((Math.random() * ((this.emails.length - 1) - 0) + 0))
  }

  public listenToNavigation(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.pageBg.next(null)
        this.loader = true
      } else if (event instanceof NavigationEnd) {
        this.loader = false
        gtag('config', ENV.analyticsId, { page_path: event.urlAfterRedirects })

        const firstPart: string = event.url.split('/')[1]
        this.isBlogPage = firstPart === 'blog'

        this.lights = localStorage.getItem('lights') ? true : this.isBlogPage
      }
    })
  }

  private set lights(value: boolean) {
    if (value) {
      this.document.body.classList.add('lights-on')
    } else if (!this.isBlogPage) {
      this.document.body.classList.remove('lights-on')
    }
  }

  private get lights(): boolean {
    return this.document.body.classList.contains('lights-on')
  }

  public listenSpecalClick(): void {
    this.document.addEventListener('click', event => {
      if (event.altKey) {
        this.lights = !this.lights
        if (this.lights) {
          localStorage.setItem('lights', null)
        } else {
          localStorage.removeItem('lights')
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

  public get email(): string {
    return `${this.emails[this.emailIndex]}@chandujs.dev`
  }
}
