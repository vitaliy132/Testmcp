import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import App from '@/app/App'
import { HomePage } from '@/pages/HomePage'
import { routes } from '@/config/routes'
import { serviceList } from '@/features/service'

const AboutPage = lazy(() =>
  import('@/pages/AboutPage').then((m) => ({ default: m.AboutPage })),
)
const ContactPage = lazy(() =>
  import('@/pages/ContactPage').then((m) => ({ default: m.ContactPage })),
)
const CareersPage = lazy(() =>
  import('@/pages/CareersPage').then((m) => ({ default: m.CareersPage })),
)
const PrivacyPage = lazy(() =>
  import('@/pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage })),
)
const PlannerPage = lazy(() =>
  import('@/pages/PlannerPage').then((m) => ({ default: m.PlannerPage })),
)
const FaqsPage = lazy(() =>
  import('@/pages/FaqsPage').then((m) => ({ default: m.FaqsPage })),
)
const WorkPage = lazy(() =>
  import('@/pages/WorkPage').then((m) => ({ default: m.WorkPage })),
)
const ServicePage = lazy(() =>
  import('@/pages/ServicePage').then((m) => ({ default: m.ServicePage })),
)
const BlogPage = lazy(() =>
  import('@/pages/BlogPage').then((m) => ({ default: m.BlogPage })),
)
const BlogPostPage = lazy(() =>
  import('@/pages/BlogPostPage').then((m) => ({ default: m.BlogPostPage })),
)

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
        <Route path={routes.blog} element={<BlogPage />} />
        <Route path={routes.blogPattern} element={<BlogPostPage />} />
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
