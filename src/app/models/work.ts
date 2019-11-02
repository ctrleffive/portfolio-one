export class Work {
  public slug: string
  public title: string
  public tags: Array<string>

  constructor({
    slug,
    title,
    tags
  }: {
    slug?: string,
    title?: string
    tags?: Array<string>
  }) {
    if (slug) { this.slug = slug }
    if (tags) { this.tags = tags}
    if (title) { this.title = title}
  }

  /**
   * Generate Work object from json list.
   */
  public static fromJsonList(data: any): Array<Work> {
    return (data as Array<any>).map(item => new Work(item))
  }
}
