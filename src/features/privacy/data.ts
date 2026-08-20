import { brand } from '@/config/brand'

const addressLine = brand.address.lines.join(', ')

export const privacyContent = {
  eyebrow: 'The boring legal stuff',
  title: 'Privacy Policy',
  subtitle: 'Because your privacy is important to us.',
  clauses: [
    'The information provided by you to us during your use of the services, or otherwise when using the website will be held by us on our servers and computers and used by us to review, develop and improve the website and online services and to enable us to provide you with relevant information as requested by you and also information concerning our marketing programmes.',
    `We may inform you from time to time about latest news, features and services which we believe may be of interest to you. Should you not wish to receive such information from ${brand.legalName} or from an affiliated third party you may so elect by indicating on the enquiry reply form or otherwise when using the website your desire not to receive such additional information.`,
    'We will not sell your personal information. However, we may disclose information or data which is provided by you on the enquiry reply form or otherwise when using the website to other companies or organisations, carefully selected by us, who may send information to you from time to time. If you do not want your information or data to be used or disclosed in this way, you may so elect by indicating on the enquiry reply form or otherwise when using the website your desire not to receive such additional information.',
    'Due to the nature of the Internet, the information and data provided by you may be transferred outside the country where it is submitted to us. If you are submitting such information or data from a country within the European Economic Area (“EEA”) it is possible that it will be transferred outside the EEA.',
    'We will not hold such information or data for any longer than is necessary for the purposes set out in this policy statement.',
    'The website may include hyperlinks to other websites. Your use of such hyperlinks is subject to this policy statement. If you use the hyperlinks then you will be leaving the website. Your access and use of other websites will not be governed by this policy statement and it is your responsibility to check the other websites and the privacy policies that may govern those sites to ascertain how your information and data will be treated if you access and use them.',
    'You have the right to request access to and/or the correction or deletion of any personal information about you held by us.',
    `If you have any questions concerning this Data Protection and Privacy Policy please contact us at ${brand.legalName}, ${addressLine}, or email ${brand.email}.`,
    'By accepting this policy statement you consent to the use (including processing and storage), transfer and disclosure of your information and data referred to in this policy statement for the purposes set out in this policy statement.',
  ],
  cookiesTitle: 'Cookies',
  cookiesBody: `${brand.legalName} will not use cookies to collect personally identifiable information about you. You can use your browser settings to restrict or block cookies set by our website. If you decide you wish to do this simply use the help function in your browser. If you do decide to restrict or block cookies this may impact the functionality of our website. For a more comprehensive guide visit www.aboutcookies.org. If you want to delete cookies on a mobile phone refer to your handset manual.`,
} as const
