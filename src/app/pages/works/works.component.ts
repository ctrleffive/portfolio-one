import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Work } from 'src/app/models/work'
import { SystemService } from 'src/app/shared/system.service'

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

  private async getData(): Promise<void> {
    this.systemService.loader = true
    const apiResponse: any = await this.http.get('/assets/data/works.json').toPromise()
    this.works = Work.fromJsonList(apiResponse)
    this.systemService.loader = false
  }

  ngOnInit(): void {
    this.getData()
    this.systemService.appTitle = 'Portfolio of Chandu'
  }
}
