import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import { FeedOptions } from 'feed'
import { Rss } from 'lucide-react'

type Config = {
  title: string,
  description: string,
  enableComment: boolean
  github?: {
    owner: string
    repo: string
    editable?: boolean
    sha: string
  }
  feed?: Partial<FeedOptions>,
  docBasePath: string
  baseUrl: string
  fuma: {
    baseLayout: BaseLayoutProps
  }
}
const baseUrl = process.env.BASE_URL as string

export const config: Config = {
  enableComment: false,
  title: 'AutoDoc',
  description: 'AutoDoc',
  docBasePath: 'docs',
  github: { owner: 'ktkongtong', repo: 'auto-doc-template', sha: 'main' },
  baseUrl: baseUrl,
  feed: {
    title: 'AutoDoc',
    description: 'AutoDoc',
    id: baseUrl,
    link: baseUrl,
  } as FeedOptions,
  fuma: {
    baseLayout: {
      nav: {
        title: <>AutoDoc</>,
      },
      links: [
        {
          type: 'icon',
          url: `${baseUrl}/rss`,
          icon: <Rss />,
          label: 'RSS'
        }
      ]
    } as BaseLayoutProps,
  },
}