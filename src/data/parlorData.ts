export interface MenuItem {
  id: string;
  name: string;
  category: 'sundae' | 'drink' | 'savory' | 'takeout';
  price: number;
  description: string;
  badge?: string;
  badgeType?: 'primary' | 'secondary' | 'tertiary';
  profile?: string;
  ingredients?: string[];
  imageUrl?: string;
  isHouseSpecialty?: boolean;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'broken-dreams',
    name: 'Sundae of Broken Dreams',
    category: 'sundae',
    price: 16.50,
    description: "The sundae that made Carroll Gardens fall in love all over again. Creamy vanilla ice cream topped with a mound of salty crushed pretzels, smothered in hot buttery caramel, and crowned with a double cloud of whipped cream.",
    badge: 'Brooklyn Legend',
    badgeType: 'primary',
    profile: 'Sweet & Salty Balance',
    ingredients: ['Madagascar Vanilla Ice Cream', 'Crushed Salty Pretzels', 'Hot Hand-Stirred Caramel', 'Double Fresh Whipped Cream', 'Luxardo Cherry'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA74xYcE6raTSF3xtIDJDEtXR7QRCbzDUhRIQWHOiomQsY5HsNH4pLD9XvcgpZm5t-C9zQnZieuGVYoozciEdsffynGaX26eyz9xXq6OdCnr2Z-nLA7qGzlmizB4g3gJFQz3vRzjvtJgp94M3rTdCqKJVyWb_QAbfdafrWi5UnAaGcB9C4YDr19ydnPC9gTLIW_h-WQWsnhwlALzudEMgtbZ1NUPGCOM36TUruXwbq79Ftn1xZ9gvNxqw',
    isHouseSpecialty: true,
  },
  {
    id: 'mr-potato-head',
    name: 'Mr. Potato Head',
    category: 'sundae',
    price: 17.00,
    description: "An unforgettable collision of textures. Fresh vanilla bean ice cream blanketed by crispy, kettle-fried North Fork potato chips, warm bittersweet hot fudge, house salted caramel, and peaks of hand-whipped cream.",
    badge: 'Cult Favorite',
    badgeType: 'tertiary',
    profile: 'Crunch, Smoke & Cream',
    ingredients: ['Vanilla Bean Ice Cream', 'Kettle North Fork Potato Chips', 'Bittersweet Hot Fudge', 'Sea Salt Caramel', 'Fresh Whipped Cream'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClow08G8ZSy99BMKJz_y_OdfbRSCYUsD5jzQ7q8zPAnqkb5dPHORBOEzbpeNAaDWcetwf5RQOTjEKrjfdrOUrTfXzboYoAQzsH1hleVmj6dQpL-GuJaAneZpaCOmIvS4IDFd-9oS4pliOjAEHFL2gqC8Q24TRMFm3NXIo0wnagrxZoUvAHBITaxA6yzngcGp8fRmbY7cxTEwrGB0Gc0ElUmQLEHKFrsBcakLMMS-nhVy8aLmJmszfZNg',
    isHouseSpecialty: true,
  },
  {
    id: 'godfather-sundae',
    name: 'The Godfather Sundae',
    category: 'sundae',
    price: 16.75,
    description: "Espresso chocolate chip ice cream, house chocolate syrup, cannoli cream crumble, toasted Sicilian pistachios, and dusted dark cocoa.",
    badge: 'Apothecary Pick',
    badgeType: 'secondary',
    profile: 'Decadent & Nutty',
    ingredients: ['Espresso Chip Ice Cream', 'Cannoli Crumble', 'Dark Cocoa Drizzle', 'Toasted Pistachios'],
    imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
    isHouseSpecialty: false,
  },
  {
    id: 'classic-egg-cream',
    name: 'Classic Brooklyn Egg Cream',
    category: 'drink',
    price: 6.50,
    description: "Neither eggs nor cream—just pure Brooklyn nostalgia! Chilled whole milk, Fox's U-Bet chocolate syrup, violently carbonated 42 PSI cold seltzer with a thick velvety white head.",
    badge: 'Holy Grail',
    badgeType: 'primary',
    profile: 'Rich Cocoa & Crisp Seltzer',
    ingredients: ['36°F Whole Milk', "Genuine Fox's U-Bet Cocoa", 'Triple-Filtered 42 PSI Seltzer'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeKMny-lAkH1dXMZqoUVVqXNx6-cPxrPnqQofTfenn3iyjaglGLkBfS8vkPu41P075-eeCYzy5FQ3b52j8BvKyyQHs2zmRmsPs4IkZaL27kZ4t1LdtSpm_vFyJjeD0DtRobwhEToVxZuWRyyzH97B18cKJtV-lw9LqhiKriknbKTpEDk4nlGwmrtU-ypTNjXIQO5HEn3eIM-iRnZKGHAR_qFYreq_xrvDDO4b2RWuf2mlK9h0pkAHzdQ',
    isHouseSpecialty: true,
  },
  {
    id: 'hibiscus-seltzer',
    name: 'Hibiscus-Spiced Seltzer',
    category: 'drink',
    price: 6.00,
    description: 'Steeped Mexican hibiscus petals, clove, allspice, fresh lime spritz over cracked fountain ice.',
    badge: 'Botanical',
    badgeType: 'secondary',
    profile: 'Tart, Floral & Effervescent',
    ingredients: ['Steeped Hibiscus', 'Clove & Allspice Infusion', 'Key Lime', 'Cold Draft Seltzer'],
  },
  {
    id: 'ginger-lime-phosphate',
    name: 'Ginger Lime Phosphate',
    category: 'drink',
    price: 6.50,
    description: 'Fiery fresh-pressed ginger root syrup, acid phosphate for a sharp restorative tang, cold fizz.',
    badge: 'Apothecary Tonic',
    badgeType: 'tertiary',
    profile: 'Spicy & Tangy Fizz',
    ingredients: ['Pressed Ginger Root', 'Food-Grade Acid Phosphate', 'Fresh Lime', 'High-Pressure Seltzer'],
  },
  {
    id: 'dark-root-beer-float',
    name: 'Dark Root Beer Float',
    category: 'drink',
    price: 9.25,
    description: 'Draft sarsaparilla root beer poured over two generous scoops of bourbon vanilla bean ice cream.',
    badge: 'Fountain Classic',
    badgeType: 'primary',
    profile: 'Creamy Vanilla & Earthy Spice',
    ingredients: ['Small Batch Sarsaparilla', 'Bourbon Vanilla Bean Ice Cream', 'Frosted Mug'],
  },
  {
    id: 'buttermilk-biscuits',
    name: 'Warm Buttermilk Biscuits',
    category: 'savory',
    price: 7.00,
    description: 'Flaky layered drop biscuits baked fresh, served with whipped honey butter & seasonal fruit jam.',
    badge: 'Warm Griddle',
    badgeType: 'tertiary',
    profile: 'Flaky, Buttery & Sweet',
    ingredients: ['Local Cultured Buttermilk', 'Whipped Honey Clover Butter', 'House Strawberry Jam'],
  },
  {
    id: 'grilled-cheese',
    name: 'Classic Grilled Cheese on Sourdough',
    category: 'savory',
    price: 11.50,
    description: 'Sharp New York cheddar & cave-aged gruyère, griddled crisp and golden on crusty local batard.',
    badge: 'Neighborhood Favorite',
    badgeType: 'primary',
    profile: 'Melted, Sharp & Savory',
    ingredients: ['Sharp NY White Cheddar', 'Gruyère', 'Local Sourdough', 'Sea Salt Butter'],
  },
  {
    id: 'baked-mac-cheese',
    name: "Creamy Baked Mac 'n' Cheese",
    category: 'savory',
    price: 13.00,
    description: 'Pipette pasta in a velvety three-cheese bechamel with a golden browned salted pretzel crumb crust.',
    badge: 'Comfort Kitchen',
    badgeType: 'secondary',
    profile: 'Rich, Cheesy & Crunch',
    ingredients: ['Pipette Pasta', 'Three-Cheese Bechamel', 'Browned Pretzel Crust'],
  },
  {
    id: 'egg-salad-brioche',
    name: 'House Egg Salad on Brioche Challah',
    category: 'savory',
    price: 12.00,
    description: 'Fresh dill, sweet pickle relish, whole grain Dijon mustard, crisp butter lettuce on soft challah bread.',
    badge: 'Diner Tradition',
    badgeType: 'secondary',
    profile: 'Herbaceous & Tangy',
    ingredients: ['Farm Eggs', 'Fresh Dill', 'Sweet Relish', 'Whole Grain Mustard', 'Brioche Challah'],
  },
  {
    id: 'takeout-pint-vanilla',
    name: 'Hand-Packed Pint: Bourbon Vanilla Bean',
    category: 'takeout',
    price: 12.50,
    description: 'Hand-packed to order in authentic round paper apothecary pints with greaseproof wax seal.',
    badge: 'To-Go',
    badgeType: 'tertiary',
    profile: 'Creamy & Pure',
    ingredients: ['Heavy Upstate Cream', 'Madagascar Bourbon Vanilla', 'Organic Cane Sugar'],
  },
  {
    id: 'foxs-ubet-syrup-bottle',
    name: "Fox's U-Bet Chocolate Syrup (Original 22oz)",
    category: 'takeout',
    price: 8.50,
    description: "The authentic Brooklyn glass bottle required for real egg creams. Genuine cocoa recipe since 1900.",
    badge: 'Pantry Staple',
    badgeType: 'primary',
    profile: 'Real Cocoa Brooklyn Heritage',
  },
  {
    id: 'farmacy-crewneck',
    name: 'Vintage Brooklyn Farmacy Crewneck Sweater',
    category: 'takeout',
    price: 48.00,
    description: 'Heavyweight organic cotton sweatshirt with chain-stitched 1920 apothecary emblem in burgundy & cream.',
    badge: 'Archival Merch',
    badgeType: 'secondary',
    profile: '100% Ring-Spun Cotton',
  }
];

export const TIMELINE_MILESTONES = [
  {
    year: '1920',
    title: 'Longo Establishes Prescription Pharmacy',
    tag: 'Foundational Root',
    description: 'Pharmacist Longo opened 513 Henry Street as a traditional Italian-American compounding pharmacy, dispensing patent tinctures, tonics, and neighborhood remedies.',
  },
  {
    year: '2009',
    title: 'The Rediscovery Behind Dusty Windows',
    tag: 'Architectural Salvage',
    description: 'Local siblings Peter Freeman & Gia Giasullo discovered the shuttered pharmacy intact with its floor-to-ceiling mahogany remedy drawers, leaded stained glass, and marble soda counter.',
  },
  {
    year: 'May 2010',
    title: 'The Taps Flow Once More',
    tag: 'Restoration Triumph',
    description: 'With neighbors and preservationists, Brooklyn Farmacy re-opened as an artisanal soda fountain, serving authentic egg creams and sundaes on original 1920 penny tile floors.',
  },
  {
    year: 'Present',
    title: 'Living Brooklyn Anchor',
    tag: 'Over 100k Egg Creams',
    description: 'A beloved neighborhood sanctuary where families, visitors, and soda enthusiasts gather for handcrafted phosphates and timeless counter hospitality.',
  }
];

export const BUYOUT_PACKAGES = [
  {
    id: 'small',
    name: 'Intimate Gathering',
    capacity: '10 - 20 Guests',
    duration: '2 Hours Base Session',
    cost: 850,
    description: 'Perfect for children’s birthday parties, intimate family anniversaries, and small creative reunions.',
    perks: ['Exclusive parlor counter & booth seating', '1 Dedicated Soda Jerk Artisan', 'Choice of 1 Egg Cream or Soda Float per guest', 'Vintage Jukebox selections included']
  },
  {
    id: 'medium',
    name: 'Standard Parlor Buyout',
    capacity: '20 - 45 Guests',
    duration: '3 Hours Base Session',
    cost: 1450,
    description: 'Ideal for milestone birthdays, rehearsal dinners, baby showers, and neighborhood community celebrations.',
    perks: ['Full private run of the 1920 apothecary parlor', '2 Dedicated Soda Jerks in vintage attire', 'DIY Sundae Bar with 12 artisan toppings & hot sauces', 'Unlimited draft sodas & Brooklyn egg creams', 'Custom parlor welcome chalkboard sign']
  },
  {
    id: 'full',
    name: 'Full Film & Production Buyout',
    capacity: 'Up to 65 Guests',
    duration: 'Full Day / Evening (Up to 6 Hours)',
    cost: 2800,
    description: 'For commercial film shoots, period television productions, wedding receptions, and brand events.',
    perks: ['Total parlor exclusivity including prep pantry & storage', 'Master Soda Jerk & hospitality lead', 'Prop access to antique apothecary tinctures & bottles', 'Flexible lighting & furniture arrangement', 'Customized catering coordination']
  }
];
