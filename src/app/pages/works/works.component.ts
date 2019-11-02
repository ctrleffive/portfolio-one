import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Work } from 'src/app/models/work'

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  public works: Array<Work>

  constructor(private http: HttpClient) {
    this.works = []
  }

  private async getData(): Promise<void> {
    const apiResponse: any = await this.http.get('/assets/data/works.json').toPromise()
    this.works = Work.fromJsonList(apiResponse)
  }

  ngOnInit(): void {
    this.getData()
  }
}
