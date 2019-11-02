export class Work {
  public slug: string
  public title: string
  public link: string
  public type: string
  public screens: number
  public linkLabel: string
  public tags: Array<string>

  constructor({
    slug,
    title,
    link,
    type,
    tags,
    screens,
    linkLabel
  }: {
    slug?: string,
    type?: string,
    link?: string,
    title?: string,
    tags?: Array<string>,
    screens?: number,
    linkLabel?: string
  }) {
    if (slug) { this.slug = slug }
    if (tags) { this.tags = tags}
    if (type) { this.type = type}
    if (link) { this.link = link}
    if (title) { this.title = title}
    if (screens) { this.screens = screens}
    if (linkLabel) { this.linkLabel = linkLabel}
  }

  /**
   * Generate Work object from json list.
   */
  public static fromJsonList(data: any): Array<Work> {
    return (data as Array<any>).map(item => new Work(item))
  }
}
