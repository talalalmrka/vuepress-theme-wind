export type AuthorName = string

export interface AuthorInfo {
  /**
   * Author name
   */
  name: string

  /**
   * Author website
   */
  url?: string

  /**
   * Author email
   */
  email?: string
}

export type Author = AuthorName | AuthorName[] | AuthorInfo | AuthorInfo[]
