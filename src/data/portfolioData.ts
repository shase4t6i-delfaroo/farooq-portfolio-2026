export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  tags: string[];
  metrics: string;
  deliverables: string[];
}

export interface MessyCleanRow {
  id: number;
  // Messy fields
  rawName: string;
  rawEmail: string;
  rawPhone: string;
  rawCompany: string;
  rawIssue: string;
  // Clean fields
  cleanName: string;
  cleanEmail: string;
  cleanPhone: string;
  cleanCompany: string;
  cleanStatus: 'Verified' | 'Deduplicated' | 'Standardized';
}

export const AGENCY_INFO = {
  name: 'Farooq Data Solution',
  founder: 'Farooq Raza',
  role: 'Excel & Data Cleaning Specialist',
  city: 'Bahawalpur',
  country: 'Pakistan',
  fullLocation: 'Bahawalpur, Punjab, Pakistan',
  experience: '2+ Years Experience',
  fiverrUrl: 'https://www.fiverr.com/s/aeeeGqg', // Official Fiverr Gig link
  facebookUrl: 'https://www.facebook.com/share/18tXiL6gDe/', // Official Facebook page link
  whatsappNumber: '03184861903',
  whatsappUrl: 'https://wa.me/923184861903',
  email: 'farooqsh843@gmail.com',
  turnaroundTime: '24 Hours Express',
  accuracyRate: '99.9%',
  leadsCleanedCount: '150,000+',
  satisfactionRate: '100%',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'lead-cleaning',
    title: 'Lead Cleaning',
    shortDesc: 'Scrub B2B & B2C sales leads, eliminate junk contacts, and prepare high-conversion outreach lists.',
    fullDesc: 'Transform cold prospect dumps into pristine, sales-ready lists. We enrich missing fields, standardize job titles, parse full names into first/last, and filter out disposable or invalid leads.',
    iconName: 'Sparkles',
    tags: ['B2B Sales', 'CRM Ready', 'High Deliverability'],
    metrics: '99.8% inbox rate',
    deliverables: [
      'Name split & Title Casing (First, Last)',
      'Company domain normalization',
      'Removal of spam traps & test leads',
      'CSV / Excel / Google Sheets format'
    ]
  },
  {
    id: 'remove-duplicates',
    title: 'Remove Duplicates',
    shortDesc: 'Eliminate duplicate rows, fuzzy matching records, and cross-column duplicates with precision.',
    fullDesc: 'Merge duplicate records without losing critical notes. Using fuzzy matching algorithms and advanced Excel logic, we identify duplicate emails, phone numbers, and company aliases.',
    iconName: 'CopyX',
    tags: ['Fuzzy Matching', 'Zero Data Loss', 'De-duplication'],
    metrics: '100% duplicate free',
    deliverables: [
      'Exact & fuzzy email match removal',
      'Merged contact histories',
      'Full duplicate audit log',
      'Preservation of master customer IDs'
    ]
  },
  {
    id: 'verify-emails',
    title: 'Verify Emails',
    shortDesc: 'Syntax check, domain MX record validation, and bounce-rate reduction for email campaigns.',
    fullDesc: 'Stop landing in the spam folder. We validate email syntaxes, verify active mail servers (MX records), filter out spam traps, role-based emails (info@, admin@), and invalid domains.',
    iconName: 'ShieldCheck',
    tags: ['MX Check', 'Bounce Prevention', 'SMTP Validation'],
    metrics: '< 2% bounce guarantee',
    deliverables: [
      'Invalid syntax identification & fix',
      'Domain & MX server ping check',
      'Role-based email classification',
      'Catch-all domain warnings'
    ]
  },
  {
    id: 'format-excel-sheets',
    title: 'Format Excel Sheets',
    shortDesc: 'Professional formatting, color coding, freeze panes, standardized dates, and phone numbers.',
    fullDesc: 'Turn chaotic, unreadable spreadsheets into beautifully structured executive-ready files. We set up freeze panes, conditional formatting, standardized column widths, and proper cell typing.',
    iconName: 'FileSpreadsheet',
    tags: ['Executive Layout', 'E.164 Phones', 'ISO Dates'],
    metrics: 'Ready for presentations',
    deliverables: [
      'Uniform ISO 8601 date formatting',
      'E.164 international phone formatting',
      'Clear header hierarchy & freeze panes',
      'Auto-filters and dropdown validation'
    ]
  },
  {
    id: 'data-entry',
    title: 'Data Entry',
    shortDesc: 'Fast, highly accurate data transcription from PDFs, scans, images, and websites into Excel.',
    fullDesc: 'Need manual or web-scraped data input? We convert business cards, invoices, receipts, directory listings, and PDFs into structured Excel sheets with double-verification quality checks.',
    iconName: 'Keyboard',
    tags: ['PDF to Excel', 'Web Scraping', 'Double-Checked'],
    metrics: '99.9% manual accuracy',
    deliverables: [
      'Scanned PDF / image to Excel transcription',
      'Online web directory collection',
      'Copy-paste clean-up and restructuring',
      'Strict quality audit before delivery'
    ]
  }
];

export const BEFORE_AFTER_ROWS: MessyCleanRow[] = [
  {
    id: 1,
    rawName: '   jOhN   dOE  ',
    rawEmail: 'john.doe@@gmial..com',
    rawPhone: '123-456-7890 ext 12',
    rawCompany: 'acme corp, inc.',
    rawIssue: 'Ragged spaces, bad casing, double @@, typo domain',
    cleanName: 'John Doe',
    cleanEmail: 'john.doe@gmail.com',
    cleanPhone: '+1 (123) 456-7890',
    cleanCompany: 'Acme Corp Inc.',
    cleanStatus: 'Standardized'
  },
  {
    id: 2,
    rawName: 'JOHN DOE',
    rawEmail: 'john.doe@gmail.com',
    rawPhone: '(123) 456 7890',
    rawCompany: 'Acme Corp',
    rawIssue: 'Duplicate lead already in database!',
    cleanName: 'John Doe',
    cleanEmail: 'john.doe@gmail.com',
    cleanPhone: '+1 (123) 456-7890',
    cleanCompany: 'Acme Corp Inc.',
    cleanStatus: 'Deduplicated'
  },
  {
    id: 3,
    rawName: 'sarah   connor',
    rawEmail: 'sarah#cyberdyne.net',
    rawPhone: '001 555-0192',
    rawCompany: 'CYBERDYNE SYSTEMS',
    rawIssue: 'Hash instead of @ in email, lowercase, uneven spacing',
    cleanName: 'Sarah Connor',
    cleanEmail: 'sarah@cyberdyne.net',
    cleanPhone: '+1 (555) 019-2000',
    cleanCompany: 'Cyberdyne Systems',
    cleanStatus: 'Verified'
  },
  {
    id: 4,
    rawName: 'Michael O\'connor',
    rawEmail: '  michael@apexsolutions.co  ',
    rawPhone: '415 555 8821',
    rawCompany: 'apex solutions LLC',
    rawIssue: 'Trailing whitespace in email, unformatted phone',
    cleanName: 'Michael O\'Connor',
    cleanEmail: 'michael@apexsolutions.co',
    cleanPhone: '+1 (415) 555-8821',
    cleanCompany: 'Apex Solutions LLC',
    cleanStatus: 'Standardized'
  },
  {
    id: 5,
    rawName: 'EMILY BLUNT',
    rawEmail: 'emily.b@tempmail-disposable.org',
    rawPhone: 'N/A',
    rawCompany: 'blunt media group',
    rawIssue: 'Disposable fake email domain, ALL-CAPS text',
    cleanName: 'Emily Blunt',
    cleanEmail: 'emily@bluntmedia.com',
    cleanPhone: 'Pending Client Callback',
    cleanCompany: 'Blunt Media Group',
    cleanStatus: 'Verified'
  }
];

export const SAMPLE_DIRTY_DATA = `Full Name,Email,Phone,Company,City
  robert  kING  ,robert@@techcorp.io,212-555-0143,techcorp llc,New York
SARAH Jenkins,sarah.j@gmail..com,(312) 555-0199,Jenkins Consulting,Chicago
robert king,robert@techcorp.io,2125550143,TechCorp,New York
  David   Miller  ,david.m#outlook.com,415.555.2671,Apex   Media,San Francisco
LISA RAY,lisa@brightpath.net,+1 617-555-0112,BrightPath Inc,Boston`;

export const WHY_CHOOSE_ME = [
  {
    id: 'fast',
    title: 'Fast 24-Hour Turnaround',
    badge: 'Express Delivery',
    icon: 'Zap',
    description: 'We respect your campaign deadlines. Orders of 1,000 to 5,000 leads are cleaned, checked, and delivered within 24 hours without cutting corners.',
    highlight: '24h Delivery Available',
  },
  {
    id: 'accurate',
    title: '99.9% Accuracy Guarantee',
    badge: 'Precision First',
    icon: 'CheckCircle2',
    description: 'Every spreadsheet undergoes a 2-step verification: automated regex rule scrubbing followed by manual quality review to catch subtle edge cases.',
    highlight: 'Zero Data Corruption',
  },
  {
    id: 'affordable',
    title: 'Affordable Agency Rates',
    badge: 'Best Value',
    icon: 'BadgePercent',
    description: 'Get agency-grade data cleaning at transparent freelancer prices. Tiered packages start from just $10 on Fiverr with unlimited revisions.',
    highlight: 'Starting at $10',
  },
  {
    id: 'experience',
    title: '2+ Years Proven Experience',
    badge: 'Verified Freelancer',
    icon: 'Award',
    description: 'Based in Bahawalpur, Punjab, Pakistan, serving over 150+ international clients across the US, UK, Australia, Canada, and Europe with a 5-star rating.',
    highlight: '150,000+ Leads Handled',
  }
];

export const PRICING_PACKAGES = [
  {
    name: 'Starter Clean',
    leads: 'Up to 1,000 Leads',
    price: '$10',
    delivery: '24 Hours Delivery',
    popular: false,
    description: 'Perfect for small outreach campaigns and test lead lists.',
    features: [
      'Clean & format 1,000 rows',
      'Remove duplicate emails & rows',
      'Proper casing for names & companies',
      'Email syntax & domain sanity check',
      'Excel (.xlsx) and CSV delivery',
      '2 Free Revisions'
    ],
    fiverrLink: 'https://www.fiverr.com/s/aeeeGqg'
  },
  {
    name: 'Growth Scrub (Most Popular)',
    leads: 'Up to 5,000 Leads',
    price: '$35',
    delivery: '24 Hours Delivery',
    popular: true,
    description: 'The sweet spot for active B2B sales teams and marketing agencies.',
    features: [
      'Clean & format 5,000 rows',
      'Deep duplicate detection (fuzzy matching)',
      'E.164 standard phone formatting',
      'Full email MX & bounce verification',
      'Column splitting (First/Last name, Address)',
      'Google Drive direct export',
      'Unlimited Revisions'
    ],
    fiverrLink: 'https://www.fiverr.com/s/aeeeGqg'
  },
  {
    name: 'Master Enterprise',
    leads: 'Up to 15,000+ Leads',
    price: '$95',
    delivery: '48 Hours Delivery',
    popular: false,
    description: 'Heavy duty database scrub, CRM migration prep, and custom formatting.',
    features: [
      'Clean & format 15,000+ rows',
      'Multi-sheet cross-referencing',
      'Custom CRM mapping (HubSpot, Salesforce)',
      'Advanced formula & macro automation',
      'Direct Google Drive & Sheet sync',
      'Dedicated priority WhatsApp support',
      'VIP Lifetime Revisions'
    ],
    fiverrLink: 'https://www.fiverr.com/s/aeeeGqg'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Marcus Vance',
    role: 'Growth Marketing Director',
    company: 'Apex Digital (Austin, TX)',
    rating: 5,
    text: 'Farooq cleaned 4,200 leads that our scraper messed up completely. We went from a 14% email bounce rate down to 1.1%! Delivered in under 18 hours. Outstanding communication.',
    source: 'Fiverr Verified Review'
  },
  {
    name: 'Sophie Laurent',
    role: 'Operations Lead',
    company: 'RevScale B2B (London, UK)',
    rating: 5,
    text: 'Farooq Data Solution is our go-to agency for Excel formatting and duplicate removal. The attention to detail is remarkable. He even found duplicate phone numbers with different area codes.',
    source: 'Fiverr Verified Review'
  },
  {
    name: 'Liam Chen',
    role: 'E-commerce Founder',
    company: 'OmniDrop Logistics (Sydney, AU)',
    rating: 5,
    text: 'Great work ethic and incredible accuracy. Having Farooq handle our Shopify customer list de-duplication saved our support team hundreds of hours. Highly recommended!',
    source: 'Fiverr Verified Review'
  }
];

export const FAQS = [
  {
    q: 'How fast can you clean 1,000 to 5,000 leads?',
    a: 'We offer express 24-hour turnaround for all orders up to 5,000 leads. If you have an urgent deadline, reach out via WhatsApp for rush delivery within 6-12 hours.'
  },
  {
    q: 'Which file formats do you accept and deliver?',
    a: 'We work with Microsoft Excel (.xlsx, .xls), CSV, Google Sheets, TSV, and even raw text or PDFs. Cleaned files can be downloaded directly or synced to your Google Drive.'
  },
  {
    q: 'How do you protect client data privacy?',
    a: 'Data confidentiality is our top priority. We sign NDAs upon request, never share client datasets with third parties, and permanently purge working files after project approval.'
  },
  {
    q: 'How do I place an order?',
    a: 'You can order directly through our Fiverr profile for buyer protection and escrow payments, or message us on WhatsApp for a custom quotation.'
  }
];
