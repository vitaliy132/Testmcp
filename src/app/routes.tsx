import { Navigate, Route, Routes } from 'react-router-dom'
import App from '@/app/App'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { ContactPage } from '@/pages/ContactPage'
import { FaqsPage } from '@/pages/FaqsPage'
import { PlannerPage } from '@/pages/PlannerPage'
import { PrivacyPage } from '@/pages/PrivacyPage'
import { ServicePage } from '@/pages/ServicePage'
import { routes } from '@/config/links'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<App />}>
        <Route index element={<HomePage />} />
        <Route path={routes.about} element={<AboutPage />} />
        <Route path={routes.contact} element={<ContactPage />} />
        <Route path={routes.privacy} element={<PrivacyPage />} />
        <Route path={routes.planner} element={<PlannerPage />} />
        <Route path={routes.faqs} element={<FaqsPage />} />
        <Route path={routes.faqsAlias} element={<Navigate to={routes.faqs} replace />} />
        <Route path={routes.branding} element={<ServicePage serviceKey="branding" />} />
        <Route path={routes.webDesign} element={<ServicePage serviceKey="webDesign" />} />
        <Route path={routes.seo} element={<ServicePage serviceKey="seo" />} />
        <Route path={routes.craftCms} element={<ServicePage serviceKey="craftCms" />} />
        <Route path={routes.shopify} element={<ServicePage serviceKey="shopify" />} />
        <Route path="*" element={<Navigate to={routes.home} replace />} />
      </Route>
    </Routes>
  )
}
