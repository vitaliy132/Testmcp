import { Navigate, Route, Routes } from 'react-router-dom'
import App from '@/app/App'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { ContactPage } from '@/pages/ContactPage'
import { FaqsPage } from '@/pages/FaqsPage'
import { PlannerPage } from '@/pages/PlannerPage'
import { PrivacyPage } from '@/pages/PrivacyPage'
import { CareersPage } from '@/pages/CareersPage'
import { ServicePage } from '@/pages/ServicePage'
import { WorkPage } from '@/pages/WorkPage'
import { routes } from '@/config/routes'
import { serviceList } from '@/features/service'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<App />}>
        <Route index element={<HomePage />} />
        <Route path={routes.about} element={<AboutPage />} />
        <Route path={routes.contact} element={<ContactPage />} />
        <Route path={routes.careers} element={<CareersPage />} />
        <Route path={routes.privacy} element={<PrivacyPage />} />
        <Route path={routes.planner} element={<PlannerPage />} />
        <Route path={routes.faqs} element={<FaqsPage />} />
        <Route path={routes.faqsAlias} element={<Navigate to={routes.faqs} replace />} />
        <Route path={routes.workPattern} element={<WorkPage />} />
        {serviceList.map((service) => (
          <Route
            key={service.key}
            path={service.path}
            element={<ServicePage serviceKey={service.key} />}
          />
        ))}
        <Route path="*" element={<Navigate to={routes.home} replace />} />
      </Route>
    </Routes>
  )
}
