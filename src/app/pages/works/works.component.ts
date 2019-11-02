import { Component } from '@angular/core'
import { Work } from 'src/app/models/work'
import { NgxMasonryOptions } from 'ngx-masonry'

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {
  public works: Array<Work>
  public masonryOptions: NgxMasonryOptions

  constructor() {
    this.masonryOptions = {

    }
    this.works = [
      new Work({ slug: 'work-1' }),
      new Work({ slug: 'work-2' }),
      new Work({ slug: 'work-3' }),
      new Work({ slug: 'work-4' }),
      new Work({ slug: 'work-5' }),
      new Work({ slug: 'work-6' }),
      new Work({ slug: 'work-7' }),
      new Work({ slug: 'work-8' }),
    ]
  }
}
