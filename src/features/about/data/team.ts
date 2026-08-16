import { CDN, hover, portrait } from '@/features/about/data/media'

export type AboutTeamMember = {
  name: string
  role: string
  image: string
  hoverImages?: string[]
  linkedin?: string
  profileHref?: string
  isPlaceholder?: boolean
}

export const aboutTeam: AboutTeamMember[] = [
  {
    name: 'Andy',
    role: 'Co-Founder',
    image: portrait('Group-461.jpg', '1705050203', 'f4eb0ba70df536ec5c5cc81977e0dca3'),
    linkedin: 'https://www.linkedin.com/in/andygolpys',
    profileHref: 'https://madebyshape.co.uk/about/andy-golpys/',
    hoverImages: [
      hover('profile-images-2024/hover-images/andy/andy-4.png', '1704887804', '0ab1706115fb5536f8bec13610b3e50c', 100),
      hover('profile-images-2024/hover-images/andy/andy-5.png', '1704887803', '542f8cc87631ad1bd8a52811ca00fcea', 100),
      hover('profile-images-2024/hover-images/andy/andy-6.png', '1704887804', '024f2fcdf008ed0fb36f5a2bef141a88', 100),
      hover(
        'profile-images-2024/hover-images/andy/230279f1-e731-4003-a514-38732dba0ea1.JPG',
        '1704887804',
        '9b227955cbfcc5acc36ad1a8dce92787',
      ),
      hover(
        'profile-images-2024/hover-images/andy/king-eric-cantona.jpeg',
        '1704887805',
        '7789a34c952596993035354870add0a2',
      ),
      hover(
        'profile-images-2024/hover-images/andy/juicy-fat-steak.jpeg',
        '1704887806',
        'd4beb18c4d880ab24c746309fa341a39',
      ),
    ],
  },
  {
    name: 'Jason',
    role: 'Co-Founder',
    image: portrait('Group-462.jpg', '1705050194', '6adcb59253a1139b5f0b12965f74cfaf'),
    profileHref: 'https://madebyshape.co.uk/about/jason-mayo/',
    hoverImages: [
      hover('profile-images-2024/hover-images/jason/jason-7.jpg', '1704887811', 'a256d87ef2560e8367d05312312b4a46'),
      hover('profile-images-2024/hover-images/jason/jason-1.png', '1704887811', 'c80f1bbea2f808594db546d22cba7cbd', 100),
      hover('profile-images-2024/hover-images/jason/jason-2.png', '1704887812', 'c6d6accb3c5381c8a024ba9141b3f9bf', 100),
      hover('profile-images-2024/hover-images/jason/jason-3.png', '1704887811', '0713f19e0633a9d1a77fc9f71334cd4f', 100),
      hover('profile-images-2024/hover-images/jason/jason-4.png', '1704887811', 'b2c9189094756ee43a6b85aab1b89796', 100),
      hover('profile-images-2024/hover-images/jason/jason-6.png', '1704887811', 'ac695649d16ac22fe88a9a94137a39ec', 100),
      hover('profile-images-2024/hover-images/jason/jason-5.png', '1704887812', '761da34b62b4523c0699a3d922ad362a', 100),
    ],
  },
  {
    name: 'Tom',
    role: 'Web Developer',
    image: portrait('Group-463.jpg', '1705050191', 'c1f205fba057e236bd084792a49dc787'),
    linkedin: 'https://www.linkedin.com/in/tom-pickering-5134a4151/',
    profileHref: 'https://madebyshape.co.uk/about/tom-pickering/',
    hoverImages: [
      hover('F30DDB5B-0050-440E-B4CE-DC86871BEE31.JPG', '1702994802', '4e9c7b1130c0a88391f50d5ea51cb13f'),
      hover('9EFE5673-550F-4B55-8B0C-E9914AEE5ED3.JPG', '1702994799', '2a998524340203b80eba5d76b8072edb'),
      hover('9A74D9FD-77F3-470F-B445-DE8E545FD338.JPG', '1702994796', '544fd656ca4b4537eba0334d1b8f6eaf'),
      hover('D712C7B2-BF24-4F80-9592-F108A2216E59.JPG', '1702994794', '83d02ab5ab5f5c038e9ce505da76b0b2'),
      hover('63DA0AC3-C482-4688-B91E-5A4CD3E72E1C.JPG', '1702994793', '7caa214733425cfcc91fe1a305ec0a94'),
      hover('0442DF34-EBC1-4CD2-AD9E-EDA85DE1E582.JPG', '1702994791', '962571be19a89cf49052bb836483e590'),
      hover('5B74D208-30B5-4100-B47F-167F4252BB2C.JPG', '1702994788', '180c7ad5722321ea877141f22e8bd1de'),
    ],
  },
  {
    name: 'Jo',
    role: 'Web Developer',
    image: portrait('Group-458.jpg', '1705050192', 'a7929bffae0364a5b142122abfd0966b'),
    profileHref: 'https://madebyshape.co.uk/about/jo-edwards/',
    hoverImages: [
      hover('profile-images-2024/hover-images/jo-e/IMG_3602.JPG', '1704892410', '2e777d4f81c7621ed871a1386344faf8'),
      hover('profile-images-2024/hover-images/jo-e/IMG_3603.JPG', '1704892410', 'c79f529ef6b1b5e814a6a98c496b5041'),
      hover('profile-images-2024/hover-images/jo-e/IMG_2743.jpeg', '1704892407', 'c294556ef5520719fcae4c419c747ea3'),
      hover('profile-images-2024/hover-images/jo-e/IMG_1821.jpeg', '1704892404', '67cacfa6adadd71640cd199da39a9923'),
      hover(
        'profile-images-2024/hover-images/jo-e/b1d6b814-9fb9-4030-84e1-629d1f26b22c.jpg',
        '1704892402',
        '0dd8cb9343c2dffb6d4b6315eef88261',
      ),
      hover(
        'profile-images-2024/hover-images/jo-e/FB_IMG_1600603637141.jpg',
        '1704892401',
        '1c05d03019b33515c376e70f361d93e1',
      ),
    ],
  },
  {
    name: 'Mike',
    role: 'Designer',
    image: portrait('Group-464.jpg', '1705050258', 'fe7baf44f7b98215c91b3ef68df4b84f'),
    profileHref: 'https://madebyshape.co.uk/about/mike-ashurst/',
    hoverImages: [
      hover('profile-images-2024/hover-images/mike/IMG_2375.jpeg', '1704892527', '579649907c9cd80469be8c843664d2aa'),
      hover('profile-images-2024/hover-images/mike/IMG_6083.jpeg', '1704892525', 'bd6c4caf77c585abff33df8e6545fcd2'),
      hover('profile-images-2024/hover-images/mike/IMG_9061.jpeg', '1704892521', 'a72ab45729f836b4c59bc5c83f49ff2c'),
      hover('profile-images-2024/hover-images/mike/IMG_5522.jpeg', '1704892516', '0183c3d2d80c735b0556ac72972af71a'),
      hover('profile-images-2024/hover-images/mike/IMG_5062.jpeg', '1704892507', 'bbdb2c50e43e54583a6de2a946effafb'),
      hover('profile-images-2024/hover-images/mike/IMG_1639.jpeg', '1704892501', 'a20b58a5bee4ddfb86d407810c3c5de5'),
      hover('profile-images-2024/hover-images/mike/IMG_1041.jpeg', '1704892497', '24b32be716166123253a46b1e9c65232'),
    ],
  },
  {
    name: 'Ella',
    role: 'Brand Designer',
    image: portrait('Group-460.jpg', '1705050197', 'cd4e8e7b530392cbd434c11d31100a24'),
    linkedin: 'https://www.linkedin.com/in/ella-dawson-732bb519b/',
    profileHref: 'https://madebyshape.co.uk/about/ella-dawson/',
    hoverImages: [
      hover('profile-images-2024/hover-images/ella/Walking.jpeg', '1704892051', '6945ee323d792c76c457f9504cd75d0f'),
      hover('profile-images-2024/hover-images/ella/Sexy-Food.jpeg', '1704892070', 'd7068417ab3f4b991e718f2ed13eb42a'),
      hover('profile-images-2024/hover-images/ella/Rejjie.jpeg', '1704892011', '2b35ddc6db82397252f790a2a25a579d'),
      hover('profile-images-2024/hover-images/ella/Piper.jpeg', '1704892088', 'e7fc19f8df230890bc23985231e517f7'),
      hover('profile-images-2024/hover-images/ella/New-York.jpeg', '1704892004', '32c91685153d9a9b6fb893d3ef08fdc4'),
      hover('profile-images-2024/hover-images/ella/Hiking.JPG', '1704891996', 'e0b9057d76190c60d0aee3bf4b2214dd'),
      hover('profile-images-2024/hover-images/ella/Fall.jpeg', '1704892110', '3b911aac3d8ac3e12ddf41ec586c80b8'),
      hover('profile-images-2024/hover-images/ella/Lakes.JPG', '1704891988', 'e3b3e073c02fde24641fe0b3cd23c701'),
    ],
  },
  {
    name: 'Mark',
    role: 'Search Engine Optimisation',
    image: portrait('profile-placeholder-male.jpg', '1705050411', '904d94fdb9e6449b062145600cd3f17d'),
    profileHref: 'https://madebyshape.co.uk/about/mark-hayes/',
  },
  {
    name: 'Natasia',
    role: 'Content Writer',
    image: portrait('Group-448.jpg', '1705050210', '2ed9ac059a1fcb05278f1715ac9ee551'),
    linkedin: 'https://www.linkedin.com/in/natasiarubin/',
    profileHref: 'https://madebyshape.co.uk/about/natasia-rubin/',
    hoverImages: [
      hover('profile-images-2024/hover-images/natasia/witches.jpg', '1704892559', '51ea64c9b8fa458ca4e4f06d03c47216'),
      hover(
        'profile-images-2024/hover-images/natasia/misty-mountain.jpg',
        '1704892558',
        'fe3f38f56110d61f489a4067a9aadcff',
      ),
      hover('profile-images-2024/hover-images/natasia/howard.jpg', '1704892557', '43544490d531714ef06443c5ed629bb5'),
      hover('profile-images-2024/hover-images/natasia/dad.jpg', '1704892556', '5f70ca3647ae7f93470f0798f3fb98e9'),
      hover('profile-images-2024/hover-images/natasia/cosy-fire.jpg', '1704892555', '636cea2865f0646194e0e6e400be9144'),
      hover('profile-images-2024/hover-images/natasia/food.jpg', '1704892554', 'be7670ea4fc7cb03c96f2b656c4947e8'),
    ],
  },
  {
    name: 'Joe',
    role: 'Web developer',
    image: portrait('Group-457.jpg', '1705050192', 'd2c1ea44507870cc5785ae8dcd19cb8d'),
    linkedin: 'https://uk.linkedin.com/in/joseph-buckley-a5453659',
    profileHref: 'https://madebyshape.co.uk/about/joe-buckley/',
    hoverImages: [
      hover('profile-images-2024/hover-images/joe/united.JPG', '1704892450', 'ff242d11af66144b609fa173e2a68656'),
      hover(
        'profile-images-2024/hover-images/joe/me-and-jess-canada.jpeg',
        '1704892448',
        '654b38cb41a441f53d91cd34e67075d4',
      ),
      hover('profile-images-2024/hover-images/joe/me-and-dave.jpeg', '1704892445', '411a78ed5ec6e67815fbdf98642c0f46'),
      hover('profile-images-2024/hover-images/joe/glastonbury.JPG', '1704892444', '8b755e94fcfe98a2923f1268e879eda2'),
      hover('profile-images-2024/hover-images/joe/cheese.jpeg', '1704892440', '5a720f1a841c57a8b30b352ca0070a37'),
      hover('profile-images-2024/hover-images/joe/Canada.jpeg', '1704892437', '74faa240e7633a2b2d8b3746f64a15ca'),
      hover('profile-images-2024/hover-images/joe/beer.JPG', '1704892436', 'b7419d991bdf04a51e4a1be0b72d44ab'),
      hover('profile-images-2024/hover-images/joe/football.JPG', '1704892435', 'c4e7f5c8438fd274a60989cb67aff76c'),
    ],
  },
  {
    name: 'Chris',
    role: 'Accounts & Finance',
    image: portrait('Group-455.jpg', '1705050198', '33f31969b6dc67d53f1f4b7b2a57fa41'),
    profileHref: 'https://madebyshape.co.uk/about/chris-golpys/',
    hoverImages: [
      hover('profile-images-2024/hover-images/chris/IMG_4901.jpeg', '1704892140', 'bbb5311723a8c1f7acd45674f7bba685'),
      hover('profile-images-2024/hover-images/chris/-.jpeg', '1704892151', 'd680bc43e47294a9e30463fa1d4fb6f6'),
      hover(
        'profile-images-2024/hover-images/chris/5be8c4da-4d22-434b-99ef-69f82ca8a52c.JPG',
        '1704891957',
        '9dd5c3e874d92114cf9153fa9811e6df',
      ),
      hover('roxie-small.jpg', '1709633600', 'fba933d6e7b4d70c48ae11a69c39ceea'),
    ],
  },
  {
    name: 'Ruby',
    role: 'Design Intern',
    image: portrait('Group-456.jpg', '1705050201', '16790fe91bb98c5920eebf04519b208f'),
    profileHref: 'https://madebyshape.co.uk/about/ruby-jayne/',
    hoverImages: [
      hover('profile-images-2024/hover-images/ruby/IMG_7564.jpeg', '1704892964', 'd2de4b73607c1d294ca339a8ffa4b3bd'),
      hover('profile-images-2024/hover-images/ruby/IMG_6676.jpeg', '1704892961', '7fdb921529e682a53456c1176285d72e'),
      hover('profile-images-2024/hover-images/ruby/IMG_5962.jpeg', '1704892958', '0d721ff3a19c59145b0f804140e19949'),
      hover('profile-images-2024/hover-images/ruby/IMG_5651.jpeg', '1704892955', 'afa0765a8785189096c6f4a1bf3233f1'),
      hover('profile-images-2024/hover-images/ruby/IMG_5631.jpeg', '1704892952', 'bb5edf4deee17c52bcabf0764a9a6f8c'),
      hover('profile-images-2024/hover-images/ruby/IMG_2710.jpeg', '1704892949', 'eec424085ac450ee21f0e47bf8809f7a'),
      hover('profile-images-2024/hover-images/ruby/IMG_2482.jpeg', '1704892946', '3051df09a23ecad9ad3496b3bfb45ac4'),
      hover('profile-images-2024/hover-images/ruby/IMG_4191.jpeg', '1704892943', 'f2fe608d2e397291dc30f924c9f580c5'),
    ],
  },
  {
    name: 'Dipper',
    role: 'Client Relations',
    image: portrait('Group-451.jpg', '1705050202', '313c8abddd89c09d8e659ef34a9ed448'),
    profileHref: 'https://madebyshape.co.uk/about/dipper/',
    hoverImages: [
      hover(
        'profile-images-2024/hover-images/dipper/28f469bb-4cc1-43fa-b02b-72f367f1f64e.JPG',
        '1704891872',
        'bd615b8108cc24c960a56b3e86a4f7a0',
      ),
      hover('profile-images-2024/hover-images/dipper/IMG_3341.jpeg', '1704892280', '80dde2dad2e268e1cf10e78a5f2bc7f6'),
      hover('profile-images-2024/hover-images/dipper/IMG_3465.jpeg', '1704892334', '09ac10450ea92b81d0209232a240c921'),
      hover('profile-images-2024/hover-images/dipper/IMG_3207.jpeg', '1704892350', 'b93d6efc28c9baa112e4d4d4924a4221'),
      hover('profile-images-2024/hover-images/dipper/IMG_3565.jpeg', '1704892374', 'c58fd66de4d1a414cc012368f70daf54'),
    ],
  },
  {
    name: 'Nick',
    role: 'Web Developer',
    image: portrait('Group-453.jpg', '1705050194', 'e91c44f1cf11c0773bcaea228086ab7d'),
    profileHref: 'https://madebyshape.co.uk/about/nick-kingan/',
    hoverImages: [
      hover('profile-images-2024/hover-images/nick/playtime.jpeg', '1704892607', '47b617839c1dd0c19baacc4321950000'),
      hover('profile-images-2024/hover-images/nick/halloween.jpg', '1704892606', '015114067e8a2cd065dc46b1c3cd615c'),
      hover('profile-images-2024/hover-images/nick/kareoke-wide.jpg', '1704892605', 'a4b009ef93b1ff894b839e284586739c'),
      hover('profile-images-2024/hover-images/nick/mates.jpeg', '1704892603', '5556ce4ee26cef0995ab065b31d15fd0'),
      hover('profile-images-2024/hover-images/nick/music.jpg', '1704892602', '2b9c620d1278f0e6cea3e64880d7c359'),
      hover(
        'profile-images-2024/hover-images/nick/family-birthday.jpeg',
        '1704892600',
        'e525306603b915f0b6b22a2d5b4d2bef',
      ),
      hover('profile-images-2024/hover-images/nick/betty.jpeg', '1704892597', '3f823ac05f75aed5a0376d64a2cbf2df'),
    ],
  },
  {
    name: 'Roxie',
    role: 'Security',
    image: portrait('Group-450.jpg', '1705050207', 'cc175f76b24c1d096c7f0b14e90ad6ca'),
    profileHref: 'https://madebyshape.co.uk/about/roxie-rose/',
    hoverImages: [
      hover('profile-images-2024/hover-images/roxie/IMG_6148.jpeg', '1704892868', '48e682dd65d355c4573cf53eec4b7cbe'),
      hover('profile-images-2024/hover-images/roxie/IMG_6001.jpeg', '1704898981', '7da03f2cf8cdc65b4126cfb54d275629'),
      hover('profile-images-2024/hover-images/roxie/IMG_5423.jpeg', '1704899004', '6a93adb3569baba91f754e2e1cd56e90'),
      hover('profile-images-2024/hover-images/roxie/IMG_4352.jpg', '1704892859', '30e09178bd85f2be1a2a333d9f1b3199'),
      hover('profile-images-2024/hover-images/roxie/IMG_1226.jpeg', '1704899027', '2ec0b43b4ce321a129614d65c454fb35'),
    ],
  },
  {
    name: 'Kerry',
    role: 'Content Writer',
    image: portrait('Group-449.jpg', '1705050205', 'dc3a6f651eb740d7d0dc06d4b8c0f04f'),
    linkedin: 'https://www.linkedin.com/in/kerry-hounslea/',
    profileHref: 'https://madebyshape.co.uk/about/kerry-hounslea/',
    hoverImages: [
      hover('profile-images-2024/hover-images/kerry/IMG_7733.jpg', '1704898516', 'b82cbaa36d14ecc7218b62728a8274f2'),
      hover('profile-images-2024/hover-images/kerry/IMG_8324.JPG', '1704898513', '3b842a1843a195cb8838f8326fc9cd97'),
      hover('profile-images-2024/hover-images/kerry/IMG_6339.jpeg', '1704898509', '56d15fb089c3b86b6e48c67edddef197'),
      hover('profile-images-2024/hover-images/kerry/IMG_3266.jpeg', '1704898506', '1e12456b49ca26fc7f2cb00edfab1b5a'),
      hover(
        'profile-images-2024/hover-images/kerry/IMG_7509-2.jpeg',
        '1704898502',
        'a4c2daf5cabfca852cd924c15c28d185',
      ),
      hover('profile-images-2024/hover-images/kerry/IMG_8531.JPG', '1704898501', '15480b60917bdac16c7f8f03f4dc1c49'),
      hover('IMG_6446.jpeg', '1706099777', 'a890acff3ec9b00687e6612135ccd92c'),
    ],
  },
  {
    name: 'You',
    role: 'Want to work at Northern Digital?',
    image: `${CDN}/Male-Profile-Placeholder.jpg?w=400&h=533&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1706004348&s=347928037c7bcb7846e8fd704a321982`,
    profileHref: 'https://madebyshape.co.uk/careers/',
    isPlaceholder: true,
  },
]

export const aboutTeamCopy = {
  eyebrow: 'Our Team',
  heading: ['Multiple personalities,', 'No egos.'] as const,
  cta: 'Meet the whole Team',
}

