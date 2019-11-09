export class Blog {
  public slug: string
  public tags: Array<string>
  public title: string
  public thumbnail: string
  public dateCreated: Date
  public lastUpdated: Date

  constructor({
    slug,
    tags,
    title,
    thumbnail,
    dateCreated,
    lastUpdated
  }: {
    slug: string
    tags: Array<string>
    title: string
    thumbnail: string
    dateCreated: Date
    lastUpdated: Date
  }) {
    if (slug) { this.slug = slug }
    if (tags) { this.tags = tags }
    if (title) { this.title = title }
    if (thumbnail) { this.thumbnail = thumbnail }
    if (dateCreated) { this.dateCreated = dateCreated }
    if (lastUpdated) { this.lastUpdated = lastUpdated }
  }

  /**
   * Generate Blog object from json list.
   */
  public static fromJsonList(data: any): Array<Blog> {
    return (data as Array<any>).map(item => new Blog(item))
  }
}
