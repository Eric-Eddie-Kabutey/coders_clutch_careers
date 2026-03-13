import PageSitemap from '@/components/sitemap/page-sitemap'
import { getRoutes } from '@/lib/getRoutes';
import React from 'react'


function PageSitemapPage() {
    const routes = getRoutes();
  return (
    <div>
        <PageSitemap sites_maps={routes} />
    </div>
  )
}

export default PageSitemapPage