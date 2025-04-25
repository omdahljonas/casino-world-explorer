
// Helper to shuffle an array randomly (Fisher-Yates algorithm)
export const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Helper to randomly generate a date in 2025
export const generateRandomDate = (): Date => {
  const start = new Date(2025, 0, 1);
  const end = new Date(2025, 11, 31);
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

// Helper to format a date
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Helper to determine if a section should be included based on probability
export const shouldIncludeSection = (probability: number = 0.8): boolean => {
  return Math.random() < probability;
};

// Helper to simulate an API call with a delay
export const simulateApiCall = <T>(data: T, delay: number = 1000): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};

// Scroll to element by ID with smooth scrolling
export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Create a toast message
export const showToast = (message: string, type: 'success' | 'error' = 'success'): void => {
  const toastContainer = document.getElementById('toast-container') || createToastContainer();
  
  const toast = document.createElement('div');
  toast.className = `fixed bottom-4 right-4 px-4 py-2 rounded-md text-white ${
    type === 'success' ? 'bg-casino-accent-green' : 'bg-casino-accent-red'
  } animate-fade-in z-50`;
  toast.textContent = message;
  
  toastContainer.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.remove('animate-fade-in');
    toast.classList.add('animate-fade-out');
    
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
};

// Create toast container if it doesn't exist
const createToastContainer = (): HTMLDivElement => {
  const container = document.createElement('div');
  container.id = 'toast-container';
  container.className = 'fixed bottom-4 right-4 z-50 flex flex-col gap-2';
  document.body.appendChild(container);
  return container;
};

// Validate email format
export const isValidEmail = (email: string): boolean => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// Define casino data
export const casinoData = [
  {
    id: 1,
    name: "Bellagio Las Vegas",
    location: "Las Vegas, USA",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1606509036992-4399d5c5afe4?q=80&w=800",
    description: "Famous for its elegant fountains and high-stakes poker rooms, the Bellagio defines Las Vegas opulence with world-class gaming floors and entertainment.",
    fullDescription: "The Bellagio stands as an icon on the Las Vegas Strip, renowned for its Mediterranean-inspired architecture and spectacular fountain show. The casino floor spans 156,000 square feet featuring over 2,300 slot machines and 125 table games. High rollers frequent the exclusive Bobby's Room, where poker stakes can reach millions. Beyond gaming, the Bellagio offers award-winning restaurants, the Gallery of Fine Art, and the mesmerizing Cirque du Soleil's 'O' performance.",
    gallery: [
      "https://images.unsplash.com/photo-1606509036992-4399d5c5afe4?q=80&w=800",
      "https://images.unsplash.com/photo-1581350850691-3d69d7a2fa53?q=80&w=800",
      "https://images.unsplash.com/photo-1593470309378-e13283338be9?q=80&w=800"
    ]
  },
  {
    id: 2,
    name: "Marina Bay Sands",
    location: "Singapore",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1538400183045-dde6dfa34044?q=80&w=800",
    description: "The iconic triple towers support the world's largest rooftop infinity pool, while the casino offers premium gaming in the heart of Singapore.",
    fullDescription: "Marina Bay Sands redefines the Singapore skyline with its three 55-story towers supporting the extraordinary SkyPark and infinity pool. The casino spans 15,000 square meters with over 600 table games and 1,500 slot machines across four gaming levels. VIP players enjoy exclusive salons with higher betting limits. The complex also houses the ArtScience Museum, luxury shopping, celebrity chef restaurants, and the spectacular Spectra light and water show at the promenade.",
    gallery: [
      "https://images.unsplash.com/photo-1538400183045-dde6dfa34044?q=80&w=800",
      "https://images.unsplash.com/photo-1533533738252-753911f31218?q=80&w=800",
      "https://images.unsplash.com/photo-1509105494475-358d372e6ded?q=80&w=800"
    ]
  },
  {
    id: 3,
    name: "Wynn Macau",
    location: "Macau, China",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1582639590011-f5a8416d1101?q=80&w=800",
    description: "An Eastern luxury palace featuring exclusive VIP betting rooms and the largest collection of designer boutiques in the region.",
    fullDescription: "Wynn Macau represents the pinnacle of Eastern gaming elegance with its palatial design and exceptional service. The property houses over 1,000 slot machines and 350 gaming tables across multiple salons and private rooms. The casino is particularly known for its high-limit baccarat areas, the game of choice for Asian high-rollers. Beyond gaming, guests enjoy the mesmerizing Performance Lake with choreographed water shows, Michelin-starred dining options, and rooms with spectacular views of the Nam Van Basin.",
    gallery: [
      "https://images.unsplash.com/photo-1582639590011-f5a8416d1101?q=80&w=800",
      "https://images.unsplash.com/photo-1598938193144-382a5ff35f3c?q=80&w=800",
      "https://images.unsplash.com/photo-1534675206578-bf8834188a79?q=80&w=800"
    ]
  },
  {
    id: 4,
    name: "The Venetian Macao",
    location: "Macau, China",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1669504128306-15d5f5c9c2a2?q=80&w=800",
    description: "This Venice-inspired resort features the world's largest casino floor with over 3,000 gaming machines and 800 gaming tables.",
    fullDescription: "The Venetian Macao stands as the crown jewel of the Cotai Strip, recreating the romance of Venice with stunning canals and gondola rides. It boasts the world's largest casino floor at 550,000 square feet, housing over 3,400 slot machines and 800 gaming tables. The resort features 3,000 suites, over 350 retail stores, and a 15,000-seat arena for major entertainment events. Guests marvel at the detailed replicas of Venetian landmarks including St. Mark's Square and the Grand Canal Shoppes with their authentic gondolas and serenading gondoliers.",
    gallery: [
      "https://images.unsplash.com/photo-1669504128306-15d5f5c9c2a2?q=80&w=800",
      "https://images.unsplash.com/photo-1624952960628-89c8b09f3d7f?q=80&w=800",
      "https://images.unsplash.com/photo-1652082288285-048e3ef042d6?q=80&w=800"
    ]
  },
  {
    id: 5,
    name: "Casino de Monte-Carlo",
    location: "Monaco",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1602702141704-576c57562a5a?q=80&w=800",
    description: "The legendary Belle Époque casino has defined sophistication and high-stakes gaming for over 150 years in the heart of Monaco.",
    fullDescription: "The Casino de Monte-Carlo embodies timeless elegance and gaming heritage since its opening in 1863. This Belle Époque masterpiece features ornate gaming rooms with frescoed ceilings, gold detailing, and stunning chandeliers. While smaller than modern mega-resorts, its exclusive atmosphere attracts elite clientele to its European roulette, trente et quarante, blackjack, and punto banco tables. The casino has starred in multiple James Bond films and remains synonymous with sophistication. Visitors must adhere to a strict dress code to enter the private gaming salons, preserving its prestigious ambiance.",
    gallery: [
      "https://images.unsplash.com/photo-1602702141704-576c57562a5a?q=80&w=800",
      "https://images.unsplash.com/photo-1656959010878-2d91fcb3f96a?q=80&w=800",
      "https://images.unsplash.com/photo-1656959011187-ff2a9ea05f42?q=80&w=800"
    ]
  },
  {
    id: 6,
    name: "Sun City Resort",
    location: "North West, South Africa",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800",
    description: "This African paradise combines safari adventures with premium gaming facilities in a stunning valley of the Pilanesberg mountains.",
    fullDescription: "Sun City Resort creates a unique gaming experience in the African wilderness, nestled between the Elands and Pilanesberg mountains. The resort's main casino spans 40,000 square feet with over 850 slot machines and 40 table games. The property features four hotels including the flagship Palace of the Lost City, inspired by an ancient African kingdom. Beyond gaming, guests can enjoy the Valley of Waves water park, two championship golf courses designed by Gary Player, and safari experiences in the adjacent Pilanesberg National Park where the Big Five animals can be spotted.",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800",
      "https://images.unsplash.com/photo-1563011656-7f60d563c7bf?q=80&w=800",
      "https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=800"
    ]
  },
  {
    id: 7,
    name: "Caesars Palace",
    location: "Las Vegas, USA",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1586185618711-086001e3df7d?q=80&w=800",
    description: "This Roman-themed icon hosts major boxing matches and concerts while offering one of the Strip's most prestigious gaming experiences.",
    fullDescription: "Caesars Palace has maintained its status as Las Vegas royalty since 1966, with its Roman-inspired architecture and world-class amenities. The casino covers 124,000 square feet featuring over 1,500 slot machines and 185 gaming tables including a state-of-the-art poker room. The property is renowned for its sportsbook with massive screens and comfortable seating. Beyond gaming, Caesars hosts major events at The Colosseum, houses the Forum Shops luxury mall, and offers celebrity chef restaurants including Gordon Ramsay's Hell's Kitchen and Nobu. The Garden of the Gods Pool Oasis provides a stunning retreat with Roman statues and columns.",
    gallery: [
      "https://images.unsplash.com/photo-1586185618711-086001e3df7d?q=80&w=800",
      "https://images.unsplash.com/photo-1506739831224-330575aca2bc?q=80&w=800",
      "https://images.unsplash.com/photo-1633394083107-3a3b42a9605b?q=80&w=800"
    ]
  },
  {
    id: 8,
    name: "The Atlantis Bahamas",
    location: "Paradise Island, Bahamas",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1548150914-c9f19112bb90?q=80&w=800",
    description: "This ocean-themed resort combines Caribbean beaches with a vibrant casino featuring floor-to-ceiling windows overlooking azure waters.",
    fullDescription: "Atlantis Paradise Island merges Caribbean relaxation with exhilarating gaming in its 60,000 square foot casino. The gaming floor features floor-to-ceiling windows with ocean views, over 700 slot machines, and 85 gaming tables including baccarat, blackjack, craps, and roulette. The resort embraces its aquatic theme with the world's largest open-air marine habitat featuring over 50,000 marine animals, the 141-acre Aquaventure water park with thrilling slides, and pristine beaches. Guests stay in one of five hotels while enjoying 21 restaurants, 19 bars, and exclusive Ocean Club Golf Course designed by Tom Weiskopf.",
    gallery: [
      "https://images.unsplash.com/photo-1548150914-c9f19112bb90?q=80&w=800",
      "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?q=80&w=800",
      "https://images.unsplash.com/photo-1597675784638-562e69e742df?q=80&w=800"
    ]
  }
];

// Define feature data
export const featureData = [
  {
    id: 1,
    title: "Casino Floors",
    icon: "fa-dice",
    description: "Experience vast gaming spaces with thousands of slot machines, hundreds of table games, and exclusive high-limit rooms for serious players."
  },
  {
    id: 2,
    title: "Gourmet Dining",
    icon: "fa-utensils",
    description: "Indulge in world-class restaurants featuring celebrity chefs, international cuisines, and unforgettable dining experiences overlooking gaming floors."
  },
  {
    id: 3,
    title: "Live Entertainment",
    icon: "fa-music",
    description: "Enjoy spectacular shows featuring world-renowned performers, from Cirque du Soleil productions to headline concerts and exclusive performances."
  },
  {
    id: 4,
    title: "VIP Tables",
    icon: "fa-gem",
    description: "Access private gaming salons with higher betting limits, personal dealers, secluded atmospheres, and premium concierge services."
  },
  {
    id: 5,
    title: "Slot Arcades",
    icon: "fa-layer-group",
    description: "Try your luck at thousands of cutting-edge slot machines featuring progressive jackpots, immersive themes, and state-of-the-art technology."
  },
  {
    id: 6,
    title: "Premium Amenities",
    icon: "fa-star",
    description: "Relax in world-class settings with infinity pools, exclusive member clubs, premium shopping galleries, and personalized services."
  }
];

// Define testimonial data
export const testimonialData = [
  {
    id: 1,
    name: "Michael Thompson",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300",
    rating: 5,
    text: "Marina Bay Sands took my breath away! The infinity pool experience while overlooking Singapore's skyline was unbelievable. The casino floor is immaculate with attentive staff and exciting games."
  },
  {
    id: 2,
    name: "Emma Rodriguez",
    location: "Madrid, Spain",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300",
    rating: 4,
    text: "The Bellagio fountain show alone is worth the trip! Inside, the casino atmosphere is electric. I spent hours at the poker tables and enjoyed every minute with professional dealers and friendly players."
  },
  {
    id: 3,
    name: "David Chen",
    location: "Toronto, Canada",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300",
    rating: 5,
    text: "Casino de Monte-Carlo is simply legendary. The historic building and old-world charm create a gaming experience unlike anywhere else. It felt like stepping into a James Bond film!"
  },
  {
    id: 4,
    name: "Sarah Johnson",
    location: "Sydney, Australia",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300",
    rating: 5,
    text: "The Venetian Macao is massive! I was amazed by the sheer size of the casino floor and the variety of games available. The Venice-themed architecture and canals make it feel like you're in Italy."
  }
];

// Define FAQ data
export const faqData = [
  {
    id: 1,
    question: "What makes a hotel casino worthy of being considered among the world's best?",
    answer: "The world's best hotel casinos are distinguished by several key factors: exceptional gaming facilities with diverse offerings, architectural significance, premium entertainment options, world-class dining experiences, outstanding service, and remarkable amenities that create an unforgettable overall experience."
  },
  {
    id: 2,
    question: "Are these hotel casinos suitable for non-gamblers?",
    answer: "Absolutely! The world's premier hotel casinos offer extensive amenities beyond gambling, including spectacular shows, celebrity chef restaurants, shopping arcades, art galleries, pools, and various entertainment options designed to appeal to all visitors regardless of their interest in gaming."
  },
  {
    id: 3,
    question: "What kinds of games are typically available at these top casino hotels?",
    answer: "The world's best hotel casinos offer a comprehensive range of gaming options including classics like blackjack, roulette, craps, and baccarat, alongside hundreds or even thousands of slot machines. Many also feature poker rooms, sports betting facilities, and exclusive high-limit areas for serious players."
  },
  {
    id: 4,
    question: "Do these casino hotels have dress codes?",
    answer: "Dress codes vary by establishment and sometimes by areas within the same property. While casual attire is generally acceptable on most casino floors, upscale restaurants, certain gaming rooms, and exclusive clubs often enforce smart casual or formal dress requirements, particularly in European establishments like Casino de Monte-Carlo."
  },
  {
    id: 5,
    question: "What's the best time of year to visit these casino destinations?",
    answer: "The ideal time depends on the specific location. Las Vegas enjoys pleasant weather in spring (March-May) and fall (September-November). Macau is best visited between October and December. Monaco shines during summer months but is also charming during the Grand Prix in May. Singapore's tropical climate means year-round visitation is possible, though February to April typically has less rainfall."
  },
  {
    id: 6,
    question: "Do these hotel casinos offer special VIP programs?",
    answer: "Yes, all premier hotel casinos provide comprehensive loyalty programs and VIP schemes. These typically reward players with complimentary rooms, meals, show tickets, and personal casino hosts. High-rollers receive enhanced benefits including exclusive lounge access, preferential reservation services, private gaming salons, and customized experiences."
  },
  {
    id: 7,
    question: "How do the gaming regulations differ between these international casino destinations?",
    answer: "Gaming regulations vary significantly across regions. Macau focuses primarily on baccarat with massive betting limits. Las Vegas offers the most diverse gaming options with medium to high limits. Singapore maintains strict responsible gambling measures including entry fees for locals. Monaco combines European table games with formal traditions and atmospheric gaming floors that close earlier than their Asian counterparts."
  }
];

// Define blog data
export const blogData = [
  {
    id: 1,
    title: "The Evolution of Casino Architecture: From European Elegance to Modern Mega-Resorts",
    date: new Date(2025, 1, 15),
    image: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?q=80&w=800",
    excerpt: "Explore how casino design has transformed over decades, from the classical Belle Époque styling of Monte Carlo to the themed spectacles of Las Vegas and the futuristic integrated resorts of Asia.",
    content: "Casino architecture has undergone a remarkable evolution over the past century. The journey began with the refined neoclassical designs of European establishments like Casino de Monte-Carlo, where ornate moldings, crystal chandeliers, and artistic ceiling frescoes created an atmosphere of exclusive sophistication. These venues were intimate by today's standards, focusing on traditional table games in elegant surroundings.\n\nThe mid-20th century saw Las Vegas pioneer the integrated casino-hotel concept, but it was the 1989 opening of The Mirage that revolutionized the industry with its elaborate Polynesian theme, triggering the era of mega-resorts. This period introduced immersive themed environments—from ancient Rome at Caesars Palace to Egyptian pyramids at Luxor and Venetian canals at The Venetian.\n\nThe 21st century has witnessed another evolution with Asian markets driving innovation. Marina Bay Sands in Singapore redefined architectural ambition with its boat-shaped SkyPark spanning three towers. Meanwhile, Macau's properties blend Portuguese colonial influences with contemporary design elements, creating distinctive cultural hybrids.\n\nToday's casino architecture increasingly emphasizes sustainability, technology integration, and multi-purpose spaces. Natural light, once deliberately excluded from gaming floors, now features prominently in modern designs that seamlessly blend indoor and outdoor environments through strategic placement of restaurants, art installations, and entertainment venues. This architectural journey reflects the industry's continuous reinvention beyond mere gambling halls into comprehensive entertainment destinations."
  },
  {
    id: 2,
    title: "Beyond the Casino Floor: The World-Class Entertainment Revolutionizing Gaming Resorts",
    date: new Date(2025, 3, 8),
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800",
    excerpt: "Discover how today's premier casino destinations are transforming into comprehensive entertainment hubs with exclusive shows, sporting events, and immersive experiences.",
    content: "The modern casino resort has evolved far beyond gambling to become an integrated entertainment ecosystem. This transformation represents a strategic diversification that benefits both operators and visitors by creating multi-dimensional experiences that appeal to broader audiences.\n\nLeading this revolution is the partnership between casinos and performing arts. Cirque du Soleil productions have become synonymous with Las Vegas, where shows like 'O' at Bellagio and 'KÀ' at MGM Grand represent multi-million dollar productions with purpose-built theaters. Similarly, Macau has embraced spectacular productions such as 'The House of Dancing Water' at City of Dreams, an aquatic masterpiece performed in a 3.7-million-gallon pool.\n\nMusic residencies represent another cornerstone of casino entertainment. Resorts like The Colosseum at Caesars Palace and Dolby Live at Park MGM host superstar artists for extended engagements, creating intimate experiences with production values exceeding typical concert tours. These collaborations generate consistent visitor traffic and elevate the properties' cultural significance.\n\nSporting events have also become integral to casino resort offerings. T-Mobile Arena hosts UFC fights and NHL games, while MGM Grand Garden Arena features championship boxing. In Macau, the Venetian hosts tennis exhibitions and basketball tournaments, extending visitor stays and attracting different demographic segments.\n\nTechnology-driven immersive experiences represent the frontier of casino entertainment. Properties now feature virtual reality experiences, interactive projection installations, and augmented reality applications that transform spaces into dynamic environments that change throughout the day."
  },
  {
    id: 3,
    title: "The New High Rollers: How Global Gaming Markets are Shifting in 2025",
    date: new Date(2025, 5, 22),
    image: "https://images.unsplash.com/photo-1596838132731-3c359bc0f687?q=80&w=800",
    excerpt: "Analysis of emerging casino markets, changing player demographics, and how established gaming destinations are adapting to new customer expectations.",
    content: "The landscape of global gaming continues its dramatic transformation in 2025, with significant shifts in both player demographics and geographic focus. The traditional profile of the high roller—historically dominated by older male players from North America, Europe, and eventually China—has diversified considerably.\n\nToday's premium players increasingly include tech entrepreneurs, cryptocurrency investors, and a growing cohort of affluent female gamblers who collectively bring different expectations to their gaming experiences. This new generation seeks personalized experiences that extend beyond traditional gaming to include exclusive access, one-of-a-kind cultural interactions, and technology-enhanced environments.\n\nGeographically, while Macau continues its recovery following regulatory adjustments, several emerging markets are establishing themselves as significant contenders in the global gaming ecosystem. Vietnam's integrated resorts in Da Nang and Ho Tram are attracting substantial investment and visitation. Japan's newly established casino industry has successfully balanced cultural sensitivity with gaming innovation, creating distinctive properties that differ markedly from their Western counterparts.\n\nThe Philippines continues its aggressive expansion with Entertainment City in Manila now firmly established as a major Asian gaming hub. Meanwhile, established markets are evolving their offerings: Las Vegas increasingly emphasizes sports betting following nationwide legalization, while Singapore's two integrated resorts have completed multi-billion dollar expansions focused on non-gaming amenities.\n\nThis diversification extends to gaming preferences as well. While baccarat remains dominant in Asian markets, electronic table games that combine traditional play with digital interfaces have gained significant traction across all regions. Skill-based gaming machines that incorporate elements of video gaming continue their steady growth, particularly among younger players seeking more engaging experiences than traditional slot machines."
  },
  {
    id: 4,
    title: "Architectural Wonders: The Engineering Marvels Behind the World's Most Spectacular Casino Hotels",
    date: new Date(2025, 7, 10),
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800",
    excerpt: "The incredible engineering challenges and innovations that made possible landmarks like Marina Bay Sands' cantilevered SkyPark and The Venetian's indoor canals.",
    content: "The world's most iconic casino hotels represent not just architectural achievements but engineering triumphs that have pushed the boundaries of construction possibility. These structures blend artistic vision with technical innovation to create environments that seem to defy physical limitations.\n\nMarina Bay Sands in Singapore stands as perhaps the most audacious engineering feat in the industry. Its three 55-story towers support the 1.2-hectare SkyPark cantilevered 67 meters beyond the last supporting column. This 340-meter long platform contains gardens, restaurants, and the famous infinity pool that appears to spill into the Singapore skyline. The structure employs a complex movement joint system that allows the SkyPark to expand, contract, and shift up to 70 centimeters under varying temperature conditions and wind effects.\n\nThe Venetian Macao represents a different kind of engineering challenge. Its indoor canal system contains 389,000 gallons of water circulating through 3/4 mile of waterways, maintained at precise temperature and clarity while supporting operational gondolas. The project required creating structurally sound waterways over a casino floor that couldn't tolerate water damage of any kind. The solution involved multiple redundant waterproofing systems, specialized thermal isolation, and elaborate water filtration technology.\n\nCity of Dreams' Morpheus Hotel in Macau, designed by Zaha Hadid, pioneered the world's first free-form exoskeleton architectural structure. This approach eliminated the need for internal structural walls or columns, creating unprecedented interior flexibility while still meeting stringent seismic requirements. The building's distinctive figure-eight voids required computational design processes to optimize the aluminum mesh structure supporting over 18,000 glass panels, each with unique dimensions.\n\nResorts World Las Vegas incorporated innovative seismic isolation systems that essentially float the building above its foundation on a series of pendulum bearings, allowing it to move up to 24 inches in any direction during an earthquake while maintaining structural integrity. This system represented the largest application of this technology in the United States when completed."
  }
];

// Define event data
export const eventData = [
  {
    id: 1,
    title: "World Series of Poker Championship",
    date: new Date(2025, 6, 15),
    location: "Bellagio Las Vegas",
    image: "https://images.unsplash.com/photo-1606167668584-78701c57d13d?q=80&w=800",
    description: "The most prestigious poker tournament returns with a guaranteed $15M prize pool and competitors from over 40 countries competing for the coveted bracelet."
  },
  {
    id: 2,
    title: "International Casino Expo",
    date: new Date(2025, 9, 5),
    location: "Marina Bay Sands, Singapore",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800",
    description: "The premier industry event showcasing next-generation gaming technology, with over 200 exhibitors and industry leaders from around the world."
  },
  {
    id: 3,
    title: "Macau Baccarat Championship",
    date: new Date(2025, 4, 20),
    location: "Wynn Macau",
    image: "https://images.unsplash.com/photo-1606167424130-49801ec1f439?q=80&w=800",
    description: "Asia's highest-stakes baccarat tournament with invitation-only tables and minimum buy-ins starting at $250,000. Witness the most skilled players compete."
  },
  {
    id: 4,
    title: "Monte Carlo Casino Classic",
    date: new Date(2025, 7, 12),
    location: "Casino de Monte-Carlo, Monaco",
    image: "https://images.unsplash.com/photo-1657751476775-0c266c114e66?q=80&w=800",
    description: "Experience European roulette at its finest with this exclusive tournament in the legendary Casino de Monte-Carlo surrounded by Belle Époque splendor."
  },
  {
    id: 5,
    title: "Global Slots Championship",
    date: new Date(2025, 3, 3),
    location: "Atlantis Bahamas",
    image: "https://images.unsplash.com/photo-1603478367902-dd162c9a2351?q=80&w=800",
    description: "The world's largest slots tournament featuring over 1,000 players competing on specially programmed machines for a share of the $5M prize pool."
  }
];

// Define country list for the form
export const countryList = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "China",
  "Japan",
  "Singapore",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Brazil",
  "Mexico",
  "South Africa",
  "United Arab Emirates",
  "Russia",
  "India",
  "Other"
];
