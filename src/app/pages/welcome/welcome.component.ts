import { Component, HostBinding, OnInit } from '@angular/core'
import { SystemService } from 'src/app/shared/system.service'
import { HttpClient } from '@angular/common/http'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public background: SafeHtml

  constructor(
    private systemService: SystemService,
    private sanitizer: DomSanitizer,
    private http: HttpClient
    ) {}

  private async setBg(): Promise<void> {
    const num: number = Math.ceil((Math.random() * (10 - 1) + 1))
    const apiResponse: any = await this.http.get(`assets/images/bgs/welcome/${num}.svg`, { responseType: 'text' }).toPromise()
    this.background = this.sanitizer.bypassSecurityTrustHtml(apiResponse)
  }
  ngOnInit(): void {
    this.setBg()
    this.systemService.appTitle = 'Chandu J S 💻 Full Stack Developer'
  }
}
