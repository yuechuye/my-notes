import { PageLayout, SharedLayout } from "quartz/cfg"
import * as Component from "quartz/components"

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.PageTitle(),
    Component.Darkmode(),
  ],
  afterBody: [
    Component.Graph({
      localGraph: {
        drag: true,
        zoom: true,
        depth: 1,
        scale: 1.1,
        repelForce: 0.5,
        centerForce: 0.3,
        linkDistance: 30,
        fontSize: 0.6,
        opacityScale: 1,
        removeTags: [],
        showTags: true,
      },
      globalGraph: {
        drag: true,
        zoom: true,
        depth: -1,
        scale: 0.9,
        repelForce: 0.5,
        centerForce: 0.3,
        linkDistance: 30,
        fontSize: 0.6,
        opacityScale: 1,
        removeTags: [],
        showTags: true,
      },
    }),
  ],
  beforeBody: [
    Component.Breadcrumbs(),
    Component.Search(),
    Component.TagList(),
  ],
  left: [
    Component.DesktopOnly(Component.Explorer({
      folderClickBehavior: "link",
      filterFn: (node: any) => {
        return node.name !== "templates" && node.name !== "archive" && node.name !== ".gitkeep"
      },
    })),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  afterBody: [],
  left: [
    Component.DesktopOnly(Component.Explorer({
      folderClickBehavior: "link",
      filterFn: (node: any) => {
        return node.name !== "templates" && node.name !== "archive" && node.name !== ".gitkeep"
      },
    })),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
    Component.RecentNotes({ limit: 5 }),
  ],
}
