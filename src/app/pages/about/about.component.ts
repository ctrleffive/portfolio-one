import { Component, OnInit } from '@angular/core'
import { SystemService } from 'src/app/shared/system.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(private systemService: SystemService) {}

  ngOnInit(): void {
    this.systemService.appTitle = 'About Chandu'
  }
}
