import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Work } from 'src/app/models/work'
import { SystemService } from 'src/app/shared/system.service'
import { WorksData } from 'src/app/data/works'

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  public works: Array<Work>

  constructor(private http: HttpClient, private systemService: SystemService) {
    this.works = []
  }

  ngOnInit(): void {
    this.works = WorksData.all
    this.systemService.appTitle = 'Portfolio of Chandu'
    this.systemService.setBg('works.svg')
  }
}
