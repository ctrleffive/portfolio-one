import { Component, HostBinding, OnInit } from '@angular/core'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'
import { SystemService } from 'src/app/shared/system.service'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  @HostBinding('style.background-image') public background: SafeStyle

  constructor(private sanitizer: DomSanitizer, private systemService: SystemService) { }

  private setBg(): void {
    const num: number = Math.ceil((Math.random() * (10 - 1) + 1))
    this.background = this.sanitizer.bypassSecurityTrustStyle(`url('assets/images/bgs/welcome/${num}.svg')`)
  }
  ngOnInit(): void {
    this.setBg()
    this.systemService.appTitle = 'Chandu J S 💻 Full Stack Developer'
  }
}
