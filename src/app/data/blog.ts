import { Blog } from '../models/blog'

export class BlogData {
  static single(slug: string): Blog {
    const data: Array<Blog> = BlogData.all.filter(item => item.slug === slug)
    if (data.length) { return data[0] }
    throw new Error('Blog entry not found!')
  }

  static get all(): Array<Blog> {
    return Blog.fromJsonList([
      {
        slug: 'catch-exceptions-in-flutter-with-catcher-sentry',
        title: '🐞 Catch Exceptions in Flutter With Catcher & Sentry',
        thumbnail:
          // tslint:disable-next-line: max-line-length
          'https://res.cloudinary.com/practicaldev/image/fetch/s--pn00asuU--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--i336GjOL--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/1pgtfwduaka4zuc2ggqb.png',
        tags: ['flutter', 'dart', 'sentry', 'catcher', 'exceptions'],
        dateCreated: '2019-11-28T18:02:39.160Z',
        lastUpdated: '2019-12-13T17:26:39.002Z'
      },
      {
        slug: 'hot-module-replacement-in-angular',
        thumbnail:
          // tslint:disable-next-line: max-line-length
          'https://res.cloudinary.com/practicaldev/image/fetch/s--FP9yzz3F--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/efyr3v85x8kfefvvl39d.png',
        dateCreated: '2019-11-26T18:02:39.160Z',
        lastUpdated: '2019-11-26T18:02:39.160Z',
        title: '⚡️ Hot Module Replacement in  Angular',
        tags: ['angular', 'hmr', 'typescript']
      },
      {
        slug: 'my-first-blog',
        thumbnail: null,
        dateCreated: '2019-11-09T11:32:11.624Z',
        lastUpdated: '2019-11-13T11:32:11.624Z',
        title: '📝 My First Blog',
        tags: ['first', 'blog']
      }
    ])
  }
}
