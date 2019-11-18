import { Component } from '@angular/core'
import { SystemService } from 'src/app/shared/system.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private systemService: SystemService) {}

  public get service(): SystemService {
    return this.systemService
  }
}
