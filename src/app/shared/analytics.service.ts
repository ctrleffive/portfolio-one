import { Injectable } from '@angular/core'

// tslint:disable-next-line: ban-types
declare let gtag: Function

@Injectable()
export class AnalyticsService {
  constructor() { }

  public eventEmitter(
    eventName: string,
    eventCategory: string,
    eventAction: string,
    eventLabel: string = null,
    eventValue: number = null) {
    gtag('event', eventName, { eventCategory, eventLabel, eventAction, eventValue })
  }
}
