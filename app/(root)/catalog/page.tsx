import React from "react"
import clsx from "clsx"

import { DiscoverContent, Sidebar, Topbar } from "@/shared/components/modules"

import styles from "./CatalogPage.module.scss"

const CatalogPage = ({
  searchParams
}: {
  searchParams: { category: string | string[] | undefined }
}) => {
  return (
    <main>
      <div className={clsx(styles.tab)}>
        <div className={clsx("container")}>
          <Topbar />
        </div>
      </div>
      <div className={clsx("container")}>
        <div className={clsx(styles.content)}>
          <Sidebar />
          <DiscoverContent searchParams={searchParams} />
        </div>
      </div>
    </main>
  )
}

export default CatalogPage
