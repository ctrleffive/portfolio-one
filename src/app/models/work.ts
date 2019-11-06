export class Work {
  public slug: string
  public title: string
  public link: string
  public type: string
  public screens: number
  public linkLabel: string
  public lastUpdated: string
  public description: string
  public tags: Array<string>

  constructor({
    slug,
    title,
    link,
    type,
    tags,
    screens,
    linkLabel,
    lastUpdated,
    description
  }: {
    slug?: string,
    type?: string,
    link?: string,
    title?: string,
    tags?: Array<string>,
    screens?: number,
    lastUpdated?: string,
    description?: string,
    linkLabel?: string
  }) {
    if (slug) { this.slug = slug }
    if (tags) { this.tags = tags}
    if (type) { this.type = type}
    if (link) { this.link = link}
    if (title) { this.title = title}
    if (screens) { this.screens = screens}
    if (linkLabel) { this.linkLabel = linkLabel}
    if (lastUpdated) { this.lastUpdated = lastUpdated}
    if (description) { this.description = description }
  }

  /**
   * Generate Work object from json list.
   */
  public static fromJsonList(data: any): Array<Work> {
    return (data as Array<any>).map(item => new Work(item))
  }
}
