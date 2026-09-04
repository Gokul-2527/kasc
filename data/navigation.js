export const navigation = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    columns: [
      {
        heading: "Institution",
        links: [
          { label: "Administration", href: "/about/administration" },
          { label: "Vision & Mission", href: "/about/vision-mission" },
          { label: "Our History", href: "/about/history" },
        ],
      },
      {
        heading: "Governance",
        links: [
          { label: "Organisation Chart", href: "/about/organisation-chart" },
          { label: "Committee", href: "/about/committee" },
        ],
      },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    columns: [
      {
        heading: "Programmes",
        links: [
          { label: "Departments", href: "/academics/departments" },
          { label: "Programme Offered", href: "/academics/programmes" },
          { label: "Academic Calendar", href: "/academics/calendar" },
        ],
      },
      {
        heading: "Quality Assurance",
        links: [
          { label: "NAAC", href: "/academics/naac" },
          { label: "IQAC", href: "/academics/iqac" },
          { label: "Exam Cell", href: "/academics/exam-cell" },
        ],
      },
      {
        heading: "Frameworks",
        links: [
          { label: "Code Of Conduct", href: "/academics/code-of-conduct" },
          {
            label: "Student Centric Methods",
            href: "/academics/student-centric-methods",
          },
          {
            label: "Cross Cutting Issues",
            href: "/academics/cross-cutting-issues",
          },
          {
            label: "Effective Curriculum Delivery",
            href: "/academics/effective-curriculum-delivery",
          },
        ],
      },
    ],
  },
  {
    label: "Placement",
    href: "/placement",
    columns: [
      {
        heading: "Placement",
        links: [
          { label: "Placement Home", href: "/placement" },
          { label: "Placement Activities", href: "/placement/activities" },
        ],
      },
    ],
  },
  {
    label: "Activities",
    href: "/activities",
    columns: [
      {
        heading: "Student Life",
        links: [
          { label: "CA Academy", href: "/activities/ca-academy" },
          { label: "Clubs", href: "/activities/clubs" },
          { label: "Cells", href: "/activities/cells" },
        ],
      },
      {
        heading: "Governance Bodies",
        links: [
          { label: "Committee", href: "/activities/committee" },
          { label: "Association", href: "/activities/association" },
          { label: "Council", href: "/activities/council" },
        ],
      },
    ],
  },
  {
    label: "Admission",
    href: "/admission",
    columns: [
      {
        heading: "Join KASC",
        links: [
          { label: "Enquiry", href: "/admission/enquiry" },
          { label: "Admission", href: "/admission" },
        ],
      },
    ],
  },
  {
    label: "Library",
    href: "/library",
    columns: [
      {
        heading: "Resources",
        links: [
          { label: "Library Home", href: "/library" },
          { label: "E-Lectures", href: "/library/e-lectures" },
          { label: "List Of Books", href: "/library/books" },
          { label: "Online Resources", href: "/library/online-resources" },
        ],
      },
    ],
  },
  {
    label: "Students Support",
    href: "/student-support",
    columns: [
      {
        heading: "Support Services",
        links: [
          { label: "Student Grievance", href: "/student-support/grievance" },
          { label: "Student Help Desk", href: "/student-support/help-desk" },
          {
            label: "Student Health Center",
            href: "/student-support/health-center",
          },
        ],
      },
    ],
  },
  {
    label: "@ KASC",
    href: "/at-kasc",
    columns: [
      {
        heading: "Campus",
        links: [
          { label: "Infrastructure", href: "/at-kasc/infrastructure" },
          { label: "Laboratories", href: "/at-kasc/laboratories" },
          { label: "Hostel", href: "/at-kasc/hostel" },
          { label: "Transport", href: "/at-kasc/transport" },
          { label: "Sports", href: "/at-kasc/sports" },
        ],
      },
    ],
  },
];

export const footerLinks = {
  about: [
    { label: "Mission & Vision", href: "/about/vision-mission" },
    { label: "History", href: "/about/history" },
  ],
  academics: [
    { label: "Department", href: "/academics/departments" },
    { label: "Programme Offered", href: "/academics/programmes" },
    { label: "Academic Calendar", href: "/academics/calendar" },
  ],
  quickLinks: [
    { label: "Enquiry", href: "/admission/enquiry" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ],
  usefulLinks: [
    { label: "Antiragging", href: "/student-support/grievance" },
    { label: "ICC", href: "/student-support/grievance" },
    {
      label: "Grievance Redressal Committee",
      href: "/student-support/grievance",
    },
  ],
  webLinks: [
    { label: "Careers - Apply Now", href: "/admission" },
    { label: "Admissions", href: "/admission" },
  ],
};

export const contactInfo = {
  phone: "97509 94108",
  phoneHref: "tel:+919750994108",
  email: "office@kascsathy.ac.in",
  address:
    "Erode-Sathyamangalam (Bungalowpudhur) stretch, Sathyamangalam, Tamil Nadu",
};

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/kascsathy/",
    icon: "Facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/kaamadhenu_institutions/",
    icon: "Instagram",
  },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "Linkedin" },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@kascsathy",
    icon: "Youtube",
  },
];
