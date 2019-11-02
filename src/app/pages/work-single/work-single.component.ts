import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Work } from 'src/app/models/work'

@Component({
  selector: 'app-work-single',
  templateUrl: './work-single.component.html',
  styleUrls: ['./work-single.component.scss']
})
export class WorkSingleComponent implements OnInit {
  constructor(private http: HttpClient) {
  }

  private async getData(): Promise<void> {
    const apiResponse: any = await this.http.get('/assets/data/works.json').toPromise()
    // this.works = Work.fromJsonList(apiResponse)
  }

  ngOnInit(): void {
    this.getData()
  }
}
