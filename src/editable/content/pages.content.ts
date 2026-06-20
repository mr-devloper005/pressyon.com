import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Media distribution, releases, and public updates',
      description: 'Explore media releases, announcement distribution, newsroom updates, and public coverage through a clean media distribution experience.',
      openGraphTitle: 'Media distribution, releases, and public updates',
      openGraphDescription: 'Discover press releases, announcements, and distribution-ready content through a focused media desk.',
      keywords: ['media distribution', 'press release', 'public updates', 'announcement platform'],
    },
    hero: {
      badge: 'Latest media distribution updates',
      title: ['A focused desk for', 'media releases and public updates.'],
      description: 'Browse press releases, company announcements, campaign coverage, and distribution-ready updates across live categories managed from the platform.',
      primaryCta: { label: 'Browse latest updates', href: '/updates' },
      secondaryCta: { label: 'Open News Media', href: '/updates?category=news-media' },
      searchPlaceholder: 'Search releases, companies, campaigns, and updates',
      focusLabel: 'Focus',
      featureCardBadge: 'latest cover rotation',
      featureCardTitle: 'Latest posts shape the visual identity of the homepage.',
      featureCardDescription: 'Recent images and stories stay at the center of the experience without changing any core platform behavior.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for reading, browsing, and connecting different kinds of content.',
      paragraphs: [
        'This site brings together article-style reading, visual browsing, and structured discovery so visitors can move naturally between different content types.',
        'Instead of separating stories, visuals, and supporting resources into disconnected surfaces, the platform keeps them connected in one place with consistent navigation and easier exploration.',
        'Whether someone starts with a story, an image-led post, a listing, or a resource page, they can keep discovering related content without friction.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Reading-first homepage with stronger emphasis on stories and imagery.',
        'Connected sections for articles, visuals, listings, and supporting resources.',
        'Cleaner browsing rhythm designed to make exploration feel easier.',
        'Lightweight interactions that keep the experience fast and readable.',
      ],
      primaryLink: { label: 'Browse articles', href: '/article' },
      secondaryLink: { label: 'See visuals', href: '/image' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Explore articles, visuals, and resources through one connected experience.',
      description: 'Move between articles, image-led posts, listings, and resources through one clearer and more connected visual system.',
      primaryCta: { label: 'Browse Articles', href: '/article' },
      secondaryCta: { label: 'Contact Sales', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our Media Desk',
    title: 'A clearer way to publish and discover distributed media.',
    description: `${slot4BrandConfig.siteName} helps organize press releases, public announcements, campaign updates, and media-ready stories into one consistent distribution experience.`,
    paragraphs: [
      'Media distribution works best when every release is easy to scan, easy to verify, and easy to route to the right audience. The site keeps those pieces connected with a clean archive, focused detail pages, and simple discovery tools.',
      'Whether someone arrives from a campaign, a newsroom link, a search result, or an internal publishing workflow, they can move from headline to context without losing the story.',
    ],
    values: [
      {
        title: 'Press-ready structure',
        description: 'Headlines, categories, summaries, and source details are arranged for fast scanning and credible distribution.',
      },
      {
        title: 'Live archive discovery',
        description: 'Real posts stay discoverable through archive cards, search, related updates, and category filters.',
      },
      {
        title: 'Audience-first clarity',
        description: 'The interface stays normal-width, readable, and calm so media updates feel useful instead of noisy.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Get in touch with the media distribution desk.',
    description: 'Send release questions, syndication requests, correction notes, campaign details, or partnership inquiries. We will route the message to the right workflow.',
    formTitle: 'Send your media request',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search media releases, topics, categories, and distributed updates across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Find releases, campaigns, companies, and coverage faster.',
      description: 'Use keywords, categories, and content types to discover every active media distribution post.',
      placeholder: 'Search by release, topic, company, or title',
    },
    resultsTitle: 'Latest media distribution content',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit new media distribution content for the site.',
    },
    locked: {
      badge: 'Distribution access',
      title: 'Login to create media updates.',
      description: 'Use your account to open the publishing workspace and prepare distribution-ready posts for the active sections of this site.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Create a distribution-ready media post.',
      description: 'Choose the content type, add source details, write a strong summary, and prepare a readable update for the live archive.',
    },
    formTitle: 'Content details',
    submitLabel: 'Submit content',
    successTitle: 'Content submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for media distribution access.',
      badge: 'Media desk access',
      title: 'Welcome back to your distribution workspace.',
      description: 'Login to continue creating media releases, managing submissions, and moving updates into the archive.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for media distribution access.',
      badge: 'Create access',
      title: 'Create your account and start distributing.',
      description: 'Create an account to access the publishing workspace, save release details, and submit distribution-ready content.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
