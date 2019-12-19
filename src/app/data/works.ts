import { Work } from '../models/work'

export class WorksData {
  static single(slug: string): Work {
    const data: Array<Work> = WorksData.all.filter(item => item.slug === slug)
    if (data.length) { return data[0] }
    throw new Error('Work entry not found!')
  }

  static get all() {
    return Work.fromJsonList([
      {
        slug: 'qcs',
        title: 'QCS',
        type: 'Mobile Application',
        link:
          'https://play.google.com/store/apps/details?id=com.inometrics.qcs',
        lastUpdated: '2019-11-01T20:00:00.000Z',
        description:
          // tslint:disable-next-line: max-line-length
          'Quality Control System (QCS) application for infection prevention. Designed & developed logo, screens, and app myself. App still in beta.',
        linkLabel: 'Go To Playstore',
        tags: ['logo', 'design', 'nodejs', 'mobile-app', 'flutter'],
        screens: 3
      },
      {
        slug: 'chandujs-website',
        title: 'Chandu J S\'s Website',
        type: 'Portfolio Website',
        link: '/',
        lastUpdated: '2019-11-01T20:00:00.000Z',
        description:
          'A webiste for displaying my portfolio. I tried to keep it minimal. Not much fancy stuff. Website is done in Angular.',
        linkLabel: 'Go To Website',
        tags: ['case-study', 'website', 'angular'],
        screens: 2
      }
    ])
  }
}
