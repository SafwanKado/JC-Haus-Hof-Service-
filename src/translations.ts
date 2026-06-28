export interface TranslationSet {
  nav_services: string;
  nav_about: string;
  nav_contact: string;
  
  hero_title: string;
  hero_subtitle: string;
  hero_location: string;
  hero_cta_call: string;
  hero_cta_email: string;
  hero_badge_reliable: string;
  hero_badge_professional: string;
  
  services_title: string;
  services_subtitle: string;
  
  service1_title: string;
  service1_desc: string;
  service2_title: string;
  service2_desc: string;
  service3_title: string;
  service3_desc: string;
  service4_title: string;
  service4_desc: string;
  
  additional_title: string;
  additional_subtitle: string;
  
  add_service1_title: string;
  add_service1_desc: string;
  add_service2_title: string;
  add_service2_desc: string;
  add_service3_title: string;
  add_service3_desc: string;
  add_service4_title: string;
  add_service4_desc: string;
  
  about_title: string;
  about_subtitle: string;
  about_story_head: string;
  about_story_1: string;
  about_story_2: string;
  
  about_values_title: string;
  value1_title: string;
  value1_desc: string;
  value2_title: string;
  value2_desc: string;
  value3_title: string;
  value3_desc: string;
  
  contact_title: string;
  contact_subtitle: string;
  contact_info_head: string;
  phone_label: string;
  email_label: string;
  location_label: string;
  hours_label: string;
  hours_val: string;
  qr_label: string;
  qr_scan_prompt: string;
  copyright: string;
  legal_notice: string;
  tax_number_label: string;
  commercial_register_label: string;
  facebook_follow: string;
  team_label: string;
  team_title: string;
}

export const translations: Record<'DE' | 'EN', TranslationSet> = {
  DE: {
    nav_services: "Leistungen",
    nav_about: "Über uns",
    nav_contact: "Kontakt",
    
    hero_title: "Ihr zuverlässiger Partner für Haus & Hof Service",
    hero_subtitle: "Professionelle Gebäudereinigung & Grundstückspflege aus Adendorf. Gründlich, flexibel und nah am Kunden.",
    hero_location: "Aus Adendorf",
    hero_cta_call: "JETZT ANRUFEN",
    hero_cta_email: "E-MAIL SCHREIBEN",
    hero_badge_reliable: "100% Zuverlässig & Fair",
    hero_badge_professional: "Fachgerechte Ausführung",
    
    services_title: "Unsere Leistungen",
    services_subtitle: "Zuverlässige und fachgerechte Rundumbetreuung für Ihr Eigentum und Ihren Garten",
    
    service1_title: "Reinigungsservice",
    service1_desc: "Gründliche Unterhalts-, Büro- und Treppenhausreinigung. Wir sorgen für strahlende Sauberkeit in jedem Detail.",
    service2_title: "Haushaltshilfe",
    service2_desc: "Unterstützung im Alltag bei Einkäufen, Kochen und Haushaltsführung – kompetent, diskret und herzlich.",
    service3_title: "Hausbetreuung im Urlaub",
    service3_desc: "Sorgenfrei verreisen: Wir lüften, gießen Blumen, leeren den Briefkasten und sichern Ihr Heim.",
    service4_title: "Grünanlagenpflege & Gartenhilfe",
    service4_desc: "Rasenmähen, Unkrautbeseitigung, Heckenschnitt und allgemeine Pflege für ein gepflegtes Außenbild.",
    
    additional_title: "Weitere Serviceleistungen",
    additional_subtitle: "Flexibles Dienstleistungsangebot auf Ihre individuellen Wünsche zugeschnitten",
    
    add_service1_title: "Hausmeisterservice",
    add_service1_desc: "Regelmäßige Kontrolle der Haustechnik, Überwachung von Zählern und allgemeine Ordnungspflege.",
    add_service2_title: "Kleinreparaturen",
    add_service2_desc: "Schnelle und fachgerechte Fehlerbehebung und kleinere Ausbesserungsarbeiten im und ums Haus.",
    add_service3_title: "Haushaltsauflösung & Entrümpelung",
    add_service3_desc: "Sorgfältige, diskrete und besenreine Beräumung von Wohnungen, Kellern, Garagen und Dachböden.",
    add_service4_title: "Einkaufshilfe & Besorgungen",
    add_service4_desc: "Wir entlasten Sie im Alltag und erledigen Ihre Wocheneinkäufe zuverlässig nach Einkaufszettel.",
    
    about_title: "Über uns",
    about_subtitle: "Lernen Sie uns und unsere Werte kennen",
    about_story_head: "Ihr Partner für ein gepflegtes Zuhause",
    about_story_1: "JC HAUS & HOF SERVICE steht für absolute Zuverlässigkeit, makellose Gründlichkeit und erstklassigen Kundenservice. Als engagiertes Dienstleistungsunternehmen mit festen Wurzeln in Adendorf betreuen wir sowohl anspruchsvolle Privathaushalte als auch Gewerbebetriebe der Region mit Liebe zum Detail.",
    about_story_2: "Wir wissen, dass jedes Haus und jeder Hof eine ganz individuelle Behandlung verdient. Deswegen nehmen wir uns gern Zeit für ein unverbindliches Gespräch vor Ort bei Ihnen in Adendorf und schnüren ein maßgeschneidertes Servicepaket, das präzise zu Ihren alltäglichen Bedürfnissen passt.",
    
    about_values_title: "Unsere Kernwerte",
    value1_title: "Sorgfalt ohne Kompromisse",
    value1_desc: "Wir reinigen und pflegen Ihr Hab und Gut stets so sorgsam, als wäre es unser eigenes.",
    value2_title: "Absolute Zuverlässigkeit",
    value2_desc: "Pünktlichkeit, Handschlagmentalität und transparente Absprachen sind für uns selbstverständlich.",
    value3_title: "Regionale Verbundenheit",
    value3_desc: "Als Adendorfer Betrieb sind wir kurzfristig erreichbar und flexibel für Sie im Einsatz.",
    
    contact_title: "Kontaktieren Sie uns",
    contact_subtitle: "Haben Sie Fragen oder wünschen Sie ein kostenloses, unverbindliches Angebot?",
    contact_info_head: "Inhaber: JC HAUS & HOF SERVICE",
    phone_label: "WhatsApp / Mobil",
    email_label: "E-Mail",
    location_label: "Hauptstandort",
    hours_label: "Erreichbarkeit",
    hours_val: "Mo. - Sa.: 08:00 - 18:00 Uhr und nach Absprache",
    qr_label: "Digitale Visitenkarte",
    qr_scan_prompt: "QR-Code scannen für die schnelle Kontaktspeicherung auf Ihrem Smartphone",
    copyright: "© 2026 JC HAUS & HOF SERVICE. Alle Rechte vorbehalten.",
    legal_notice: "Impressum & Datenschutz",
    tax_number_label: "Steuernummer",
    commercial_register_label: "Handelsregister",
    facebook_follow: "Folgen Sie uns auf Facebook",
    team_label: "Unser Team",
    team_title: "Gemeinsam für Sie im Einsatz"
  },
  EN: {
    nav_services: "Services",
    nav_about: "About Us",
    nav_contact: "Contact",
    
    hero_title: "Your Reliable Partner for House & Yard Service",
    hero_subtitle: "Professional building cleaning & property maintenance based in Adendorf. Thorough, flexible, and customer-focused.",
    hero_location: "Based in Adendorf",
    hero_cta_call: "CALL NOW",
    hero_cta_email: "SEND EMAIL",
    hero_badge_reliable: "100% Reliable & Fair",
    hero_badge_professional: "Professional Execution",
    
    services_title: "Our Services",
    services_subtitle: "Reliable and professional all-round protection for your property and garden",
    
    service1_title: "Cleaning Service",
    service1_desc: "Thorough residential, office, and stairwell cleaning. We ensure sparkling cleanliness in every single detail.",
    service2_title: "Household Help",
    service2_desc: "Support in everyday life with grocery shopping, cooking, and home organization – competent, discrete, and caring.",
    service3_title: "Holiday Home Care",
    service3_desc: "Travel worry-free: We ventilate rooms, water plants, empty the mailbox, and secure your property.",
    service4_title: "Garden & Greenery Care",
    service4_desc: "Lawn mowing, weed control, hedge trimming, and general maintenance for a perfectly groomed exterior.",
    
    additional_title: "Additional Services",
    additional_subtitle: "Flexible service offerings custom-tailored to suit your individual requirements",
    
    add_service1_title: "Caretaker Service",
    add_service1_desc: "Regular checkups of house systems, oversight of utilities, and keeping overall cleanliness.",
    add_service2_title: "Minor Repairs",
    add_service2_desc: "Quick, uncomplicated fixing of small defects and general touch-up work inside and outside.",
    add_service3_title: "House Clearances & Decluttering",
    add_service3_desc: "Professional, discrete, and broom-clean clearing of homes, basements, garages, and attics.",
    add_service4_title: "Shopping Assistance",
    add_service4_desc: "We take off the load of weekly grocery runs, handling your shopping list reliably and promptly.",
    
    about_title: "About Us",
    about_subtitle: "Get to know us and what we stand for",
    about_story_head: "Your Partner for a Well-Maintained Home",
    about_story_1: "JC HAUS & HOF SERVICE stands for absolute reliability, flawless thoroughness, and exceptional customer service. As an owner-managed service business rooted in Adendorf, we take pride in looking after homes and commercial venues with utmost precision.",
    about_story_2: "We believe every home deserves individual care. That is why we are always happy to schedule a personal, free consultation on-site at your property, fashioning a tailored schedule that harmonizes perfectly with your routine.",
    
    about_values_title: "Our Core Values",
    value1_title: "Uncompromising Diligence",
    value1_desc: "We clean and maintain your property with absolute care, as if it were our very own.",
    value2_title: "True Reliability",
    value2_desc: "Punctuality, honest handshake agreements, and transparent conditions are our baseline.",
    value3_title: "Rooted Regionally",
    value3_desc: "Being based locally in Adendorf means we are always near you, flexible, and responsive.",
    
    contact_title: "Get in Touch",
    contact_subtitle: "Have a question or want to request a free, fully customized, non-binding quote?",
    contact_info_head: "Proprietorship: JC HAUS & HOF SERVICE",
    phone_label: "WhatsApp / Mobile",
    email_label: "Email",
    location_label: "Main Location",
    hours_label: "Service Hours",
    hours_val: "Mon. - Sat.: 08:00 AM - 06:00 PM and by appointment",
    qr_label: "Digital Business Card",
    qr_scan_prompt: "Scan QR code to quickly save our complete contact info directly onto your phone",
    copyright: "© 2026 JC HAUS & HOF SERVICE. All rights reserved.",
    legal_notice: "Legal Notice & Privacy Policy",
    tax_number_label: "Tax Number",
    commercial_register_label: "Commercial Register",
    facebook_follow: "Follow us on Facebook",
    team_label: "Our Team",
    team_title: "At Your Service Together"
  }
};
