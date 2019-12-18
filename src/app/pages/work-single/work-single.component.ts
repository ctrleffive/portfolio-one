import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute, Router } from '@angular/router'
import { Work } from 'src/app/models/work'
import { SystemService } from 'src/app/shared/system.service'
import { WorksData } from 'src/app/data/works'

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
  ) { }

  private getData(): void {
    try {
      const slug: string = this.route.snapshot.paramMap.get('slug')
      this.work = WorksData.single(slug)
    } catch (error) {
      this.router.navigate(['/works'])
    }
  }

  ngOnInit(): void {
    this.getData()
  }
}
