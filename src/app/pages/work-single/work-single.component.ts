import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute, Router } from '@angular/router'
import { Work } from 'src/app/models/work'
import { SystemService } from 'src/app/shared/system.service'

@Component({
  selector: 'app-work-single',
  templateUrl: './work-single.component.html',
  styleUrls: ['./work-single.component.scss']
})
export class WorkSingleComponent implements OnInit {
  public work: Work

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private systemService: SystemService
    ) {}

  private async getData(): Promise<void> {
    this.systemService.loader = true
    const slug: string = this.route.snapshot.paramMap.get('slug')
    const apiResponse: any = await this.http.get('/assets/data/works.json').toPromise()
    const works: Array<Work> = Work.fromJsonList(apiResponse).filter(item => item.slug === slug)
    if (works.length) {
      this.work = works[0]
      this.systemService.appTitle = `${this.work.title} | ${this.work.type}`
    } else {
      this.router.navigate(['/works'])
    }
    this.systemService.loader = false
  }

  ngOnInit(): void {
    this.getData()
  }
}
