import { award } from '@/features/about/data/media'

export type AwardLogo = {
  src: string
  alt: string
}

const awardSources = [
  award('certificate-area-hm.png', '1664875085', '3d7e0ce8728f377cd37450bb7acae920'),
  award('certificate-iet-mobile_excellence.png', '1628684934', '0fa24a4fef47aff3f90763d5e53d1b4e'),
  award('certificate-MadeByShape-jury.png', '1628684945', 'f660d5c267fcc0e06e23447477e0e8a4'),
  award('cssda-special-kudos-MadeByShape.png', '1628685021', '95486a98b0208532d78ff40f9792c6d0'),
  award('THIS-IS-DIGITAL.png', '1672932174', '8e516c91b9a796c18fa8a95552879352'),
  award('certificate-iet-hm.png', '1628684931', '57de9c3684152e0066037bb11ce9fa6c'),
  award('certificate-shape-christmas-sotd.png', '1628684966', 'f5d57ea451a266efe10dd359b2ca879b'),
  award('cssda-ux-MadeByShape.png', '1628685026', '1996548ee4a621921c0498239f69e6a7'),
  award('certificate-this-is-digital-hm.png', '1664875084', 'e4dbae6219a476d22b6eea20b20133f2'),
  award(
    'certificate-three-little-words-mobile_excellence.png',
    '1664875094',
    'e2eacbccaa6bdbb5c8ba720620e97a9d',
  ),
  award('Made-By-Shape-site.png', '1672932146', 'e2ff0d3d55f369e9e422f6b537387326'),
  award('certificate-madebyshape-1-hm.png', '1628684937', '8d49ddfb779b342fb8cd7a1050c741c6'),
  award(
    'certificate-mysa-skincare-mobile_excellence.png',
    '1628684951',
    '284b7133ff623e9391666c8491bc94fb',
  ),
  award('certificate-riley-studio-hm.png', '1628684957', 'f3698c741b0a3a324d1dd41a587cb120'),
  award('cssda-ui-MadeByShape.png', '1628685024', '2d3c3024b23451c24cd0ea2366113216'),
  award(
    'certificate-riley-studio-mobile_excellence.png',
    '1628684960',
    '9f988f61deaed4ba68a4a1564d5d1cb3',
  ),
  award('certificate-boys-by-girls-hm.png', '1628684911', '4a435ab7a47ae9f9374e8eed568c1c71'),
  award('certificate-njorun-active-hm.png', '1628684954', 'd58bb0beaec69f6726d97a20d4f2a55b'),
  award('certificate-co-co-mobile_excellence.png', '1628684920', 'e626e5a33bc43cabbd1dcbe0a43b6b0a'),
  award('certificate-three-little-words-hm.png', '1664875104', '7c8b5120fa1a6828f40c6b1591f2df7b'),
  award('certificate-shape-design-studio-sotd.png', '1628684969', '8da9051dab0de9adfcf8d6b2aead731e'),
  award('certificate-hex-test-hm.png', '1628684924', '633a8a8a2670f3260857324ae3acef4d'),
  award(
    'certificate-madebyshape-1-mobile_excellence.png',
    '1628684940',
    '5faeac8e3ddf402e798cb81deebabce5',
  ),
  award('certificate-alphabet-hm.png', '1664875086', '1d5065a626ddf4dd0bb0a958cab65b32'),
  award(
    'certificate-hex-test-mobile_excellence.png',
    '1628684928',
    '24de62a987b16ec81a1c66c003b058cf',
  ),
  award('certificate-madebyshape-hm.png', '1628684942', 'b192f1e2e3c47210f1ae4ff34c0dc5d3'),
]

export const aboutAwards = awardSources.filter(
  (src) => !/madebyshape|made-by-shape/i.test(src),
)

export const aboutAwardLogos: AwardLogo[] = aboutAwards.slice(0, 5).map((src) => ({
  src,
  alt: 'Industry award',
}))

export const aboutAwardsCopy = {
  eyebrow: 'We don’t pay for awards',
  heading: 'We win awards and get recognised for our work',
  cta: 'You could be next',
}

