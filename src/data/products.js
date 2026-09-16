export const PRODUCTS = [
  {
    id: "baw-cabinet-pro-5",
    title: "ארונית אחסון מודולרית מתקפלת פרימיום 5 קומות BAW Pro Max",
    category: "ארוניות ואחסון",
    categorySlug: "storage",
    badge: "הנמכר ביותר 2026",
    badgeType: "best",
    rating: 4.95,
    reviewsCount: 384,
    regularPrice: 599,
    price: 349,
    discountPercent: 42,
    cogs: 135, // Cost of Goods Sold for Admin analytics
    stock: 6,
    sku: "BAW-MOD-CAB-5T",
    images: [
      "/images/cabinet-main.jpg",
      "/images/cabinet-detail.jpg"
    ],
    colors: [
      { name: "גרפיט מטאלי יוקרתי", value: "#262626", inStock: true },
      { name: "לבן שלג נורדי", value: "#f1f5f9", inStock: true },
      { name: "עץ אגוז חם", value: "#5c3d2e", inStock: true }
    ],
    highlights: [
      "הרכבה מהירה תוך 3 דקות בלבד — ללא ברגים או כלים!",
      "דלתות שקופות מגנטיות מעוצבות לסגירה שקטה והרמטית נגד אבק",
      "גלגלי סיליקון שקטים 360° עם נעילה לבטיחות מקסימלית",
      "כושר נשיאה ענק של עד 120 ק״ג מפלסטיק מחוזק ועמיד",
      "מודולרי לחלוטין — ניתן לפרק או להוסיף קומות לפי הצורך"
    ],
    dimensions: "גובה 156 ס\"מ | רוחב 65 ס\"מ | עומק 42 ס\"מ",
    weight: "8.4 ק\"ג",
    warranty: "12 חודשי אחריות מלאה מבית BAW",
    delivery: "משלוח אקספרס עד הדלת תוך 3-5 ימי עסקים | תשלום במזומן לשליח זמין",
    bundles: [
      {
        id: "single",
        qty: 1,
        title: "יחידה אחת (מחיר השקה)",
        unitPrice: 349,
        totalPrice: 349,
        savings: 250,
        tag: "פופולרי"
      },
      {
        id: "double",
        qty: 2,
        title: "זוג ארוניות לבית (חיסכון נוסף של ₪78)",
        unitPrice: 310,
        totalPrice: 620,
        savings: 578,
        tag: "המשתלם ביותר",
        recommended: true
      },
      {
        id: "bundle-3-plus-1",
        qty: 4,
        title: "מבצע ענק: 3+1 במתנה! (קונים 4 משלמים על 3)",
        unitPrice: 261.75,
        totalPrice: 1047,
        savings: 1349,
        tag: "מבצע 3+1"
      }
    ],
    reviews: [
      {
        id: 1,
        author: "מיכל ש. מתל אביב",
        rating: 5,
        date: "לפני 3 ימים",
        verified: true,
        text: "פשוט מושלם! הגיע עם שליח תוך יומיים, שילמתי במזומן במקום. פתחתי את הארונית ובאמת תוך 3 דקות הכל עמד מסודר בחדר הילדים. איכות החומרים מדהימה ולא דומה לשום דבר שראיתי בעבר."
      },
      {
        id: 2,
        author: "יוסי כהן מחיפה",
        rating: 5,
        date: "לפני שבוע",
        verified: true,
        text: "הזמנתי את המבצע של הזוג. דלתות מגנטיות נסגרות מושלם, כל הנעליים והמצעים נכנסו בלי בעיה. שירות הלקוחות בווטסאפ ענה לי תוך דקה לבירור שעת הגעה של השליח."
      },
      {
        id: 3,
        author: "ענבל ל. מראשון לציון",
        rating: 5,
        date: "לפני שבועיים",
        verified: true,
        text: "המוצר הכי שימושי שקניתי השנה. עיצוב 2026 אמיתי שנראה מעולה בסלון ולא כמו קופסאות פלסטיק פשוטות. ממליצה בחום!"
      }
    ]
  },
  {
    id: "baw-ergo-lounge-chair",
    title: "כורסת עיסוי ארגונומית מסתובבת 360° עם הדום יוקרתי BAW Cloud",
    category: "ריהוט משלים",
    categorySlug: "furniture",
    badge: "חוויית נוחות עילאית",
    badgeType: "premium",
    rating: 4.92,
    reviewsCount: 196,
    regularPrice: 1490,
    price: 899,
    discountPercent: 40,
    cogs: 420,
    stock: 4,
    sku: "BAW-CHAIR-CLOUD-360",
    images: [
      "/images/chair.jpg"
    ],
    colors: [
      { name: "בד בוקלה שמנת יוקרתי", value: "#fdfbf7", inStock: true },
      { name: "אפור גרפיט כהה", value: "#334155", inStock: true }
    ],
    highlights: [
      "מנגנון הטיה מתכוונן 135° עם נעילה למצב מנוחה וצפייה מושלם",
      "סיבוב חלק ושקט של 360 מעלות על בסיס עץ מלא מחוזק",
      "כולל הדום רגליים ארגונומי תואם לפיזור עומסים מהגב התחתון",
      "ריפוד בוקלה נעים ומנדף חום לעמידות לאורך שנים"
    ],
    dimensions: "גובה 98 ס\"מ | רוחב 82 ס\"מ | עומק 85 ס\"מ",
    weight: "19.5 ק\"ג",
    warranty: "24 חודשי אחריות מלאה",
    delivery: "משלוח מיוחד עם תיאום מראש | תשלום במזומן זמין"
  },
  {
    id: "baw-shoes-display-6",
    title: "מגדל 6 קופסאות שקופות מגנטיות לנעליים וסניקרס Pro-Display",
    category: "ארגוניות נעליים",
    categorySlug: "shoes",
    badge: "מבצע 3+1 זמין",
    badgeType: "hot",
    rating: 4.88,
    reviewsCount: 245,
    regularPrice: 420,
    price: 249,
    discountPercent: 41,
    cogs: 95,
    stock: 12,
    sku: "BAW-SHOE-BOX-6PK",
    images: [
      "/images/shoes.jpg"
    ],
    colors: [
      { name: "שקוף קריסטלי HD", value: "#e2e8f0", inStock: true },
      { name: "שחור מעושן מודרני", value: "#1e293b", inStock: true }
    ],
    highlights: [
      "חיבור מודולרי מוגן בפטנט לערימה יציבה ובטוחה עד 15 קומות",
      "פתח קדמי מגנטי עם פתחי אוורור סמויים למניעת ריחות",
      "מתאים לנעליים עד מידה 48 כולל נעלי ספורט ומגפונים",
      "חומר אקרילי עבה במיוחד חסין שריטות והצהבה"
    ],
    dimensions: "כל תא: 36x28x22 ס\"מ",
    weight: "4.2 ק\"ג",
    warranty: "12 חודשי אחריות",
    delivery: "משלוח אקספרס עד הבית תוך 3 ימים"
  },
  {
    id: "baw-flexi-desk",
    title: "שולחן צד חכם מתכוונן לגובה ולספה / מיטה BAW FlexiDesk",
    category: "ריהוט משלים",
    categorySlug: "furniture",
    badge: "מוצר חובה בכל בית",
    badgeType: "trend",
    rating: 4.85,
    reviewsCount: 142,
    regularPrice: 299,
    price: 189,
    discountPercent: 37,
    cogs: 72,
    stock: 8,
    sku: "BAW-DESK-FLEXI",
    images: [
      "/images/cabinet-detail.jpg"
    ],
    highlights: [
      "כוונון גובה פניאומטי חלק בין 65 ל-95 ס\"מ",
      "חריץ ייעודי מובנה לטאבלט, טלפון וכוס קפה",
      "גלגלים שקטים שנכנסים מתחת לכל ספה ומיטה סטנדרטית"
    ],
    dimensions: "משטח 60x40 ס\"מ | גובה 65-95 ס\"מ",
    weight: "5.1 ק\"ג",
    warranty: "12 חודשי אחריות",
    delivery: "משלוח אקספרס עד הבית"
  },
  {
    id: "baw-spice-rack-360",
    title: "ארגונית תבלינים ומטבח מסתובבת 2 קומות 360° מפלדת אל-חלד",
    category: "פתרונות למטבח",
    categorySlug: "kitchen",
    badge: "סדר מופתי ברגע",
    badgeType: "hot",
    rating: 4.9,
    reviewsCount: 178,
    regularPrice: 199,
    price: 129,
    discountPercent: 35,
    cogs: 48,
    stock: 15,
    sku: "BAW-SPICE-360-SS",
    images: [
      "/images/cabinet-main.jpg"
    ],
    highlights: [
      "סיבוב חלק ב-360 מעלות בלחיצת אצבע קלה",
      "משטח מונע החלקה ומעקה הגנה סביבתי נגד נפילת מוצרים",
      "עמידות מלאה בפני מים, שומנים וחלודה"
    ],
    dimensions: "קוטר 26 ס\"מ | גובה 34 ס\"מ",
    weight: "1.4 ק\"ג",
    warranty: "12 חודשי אחריות",
    delivery: "משלוח אקספרס עד הבית"
  },
  {
    id: "baw-clothes-rack-double",
    title: "מתלה בגדים ומעילים יוקרתי כפול עם מדפי אחסון לנעליים וקופסאות",
    category: "ארוניות ואחסון",
    categorySlug: "storage",
    badge: "חיסכון במקום",
    badgeType: "best",
    rating: 4.87,
    reviewsCount: 210,
    regularPrice: 360,
    price: 219,
    discountPercent: 39,
    cogs: 84,
    stock: 9,
    sku: "BAW-RACK-DBL-BLK",
    images: [
      "/images/cabinet-detail.jpg"
    ],
    highlights: [
      "מוט תלייה כפול מחוזק המאפשר תליית 60+ פריטים",
      "שני מדפי בסיס תחתונים לאחסון נעליים, תיקים או סלסלות",
      "עיצוב מינימליסטי יפני ממתכת שחורה מט בגימור תנור"
    ],
    dimensions: "גובה 155 ס\"מ | רוחב 110 ס\"מ | עומק 54 ס\"מ",
    weight: "4.8 ק\"ג",
    warranty: "12 חודשי אחריות",
    delivery: "משלוח אקספרס עד הבית"
  }
];

export const CATEGORIES = [
  { id: "all", name: "כל המוצרים", count: 48 },
  { id: "storage", name: "ארוניות ופתרונות אחסון", count: 18, hot: true },
  { id: "shoes", name: "ארגוניות סניקרס ונעליים", count: 8 },
  { id: "furniture", name: "ריהוט משלים וכורסאות", count: 12 },
  { id: "deals", name: "מבצעי 3+1 לוהטים", count: 6, special: true },
  { id: "kitchen", name: "פתרונות חכמים לבית", count: 14 }
];

export const RECENT_ORDERS_DATA = [
  {
    id: "BAW-10892",
    customer: "דן שפירא",
    city: "רמת גן",
    phone: "054-***1284",
    items: "ארונית מודולרית 5 קומות (זוג)",
    total: 620,
    cogs: 270,
    profit: 350,
    margin: "56.4%",
    paymentMethod: "מזומן לשליח (COD)",
    paymentType: "COD",
    status: "נשלח עם שליח",
    statusColor: "blue",
    date: "היום, 16:42"
  },
  {
    id: "BAW-10891",
    customer: "שיראל לוי",
    city: "אשדוד",
    phone: "052-***9921",
    items: "כורסת מסאז' ארגונומית Cloud",
    total: 899,
    cogs: 420,
    profit: 479,
    margin: "53.2%",
    paymentMethod: "אשראי (Tranzila)",
    paymentType: "Card",
    status: "אושר ונארז",
    statusColor: "emerald",
    date: "היום, 16:15"
  },
  {
    id: "BAW-10890",
    customer: "איתי ברקוביץ'",
    city: "פתח תקווה",
    phone: "050-***4401",
    items: "מגדל 6 קופסאות נעליים Pro-Display",
    total: 249,
    cogs: 95,
    profit: 154,
    margin: "61.8%",
    paymentMethod: "מזומן לשליח (COD)",
    paymentType: "COD",
    status: "נמסר ללקוח",
    statusColor: "green",
    date: "היום, 15:30"
  },
  {
    id: "BAW-10889",
    customer: "מאיה אברהם",
    city: "ירושלים",
    phone: "053-***7712",
    items: "מבצע 3+1: ארוניות מודולריות (4 יח')",
    total: 1047,
    cogs: 540,
    profit: 507,
    margin: "48.4%",
    paymentMethod: "מזומן לשליח (COD)",
    paymentType: "COD",
    status: "ממתין לאיסוף שליח",
    statusColor: "amber",
    date: "היום, 14:08"
  },
  {
    id: "BAW-10888",
    customer: "רועי גולן",
    city: "הרצליה",
    phone: "058-***3390",
    items: "שולחן צד FlexiDesk + ארגונית 360",
    total: 318,
    cogs: 120,
    profit: 198,
    margin: "62.2%",
    paymentMethod: "אשראי (Tranzila)",
    paymentType: "Card",
    status: "נשלח עם שליח",
    statusColor: "blue",
    date: "היום, 13:22"
  }
];
