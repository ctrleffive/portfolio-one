import { Component, OnInit } from '@angular/core'
import { SystemService } from 'src/app/shared/system.service'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  constructor(
    private systemService: SystemService,
    private http: HttpClient
    ) {}

  private setBg(): void {
    const num: number = Math.ceil((Math.random() * (10 - 1) + 1))
    this.systemService.setBg(`welcome/${num}.svg`)
  }

  ngOnInit(): void {
    this.systemService.appTitle = null
    this.setBg()
  }
}
