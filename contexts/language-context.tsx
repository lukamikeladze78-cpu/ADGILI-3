"use client"

import { createContext, useContext, useState, ReactNode } from "react"

export type Language = "EN" | "GE" | "RU"

type Translations = {
  [key: string]: {
    EN: string
    GE: string
    RU: string
  }
}

export const translations: Translations = {
  // Navbar
  getInTouch: {
    EN: "Get in Touch",
    GE: "დაგვიკავშირდით",
    RU: "Связаться",
  },
  contact: {
    EN: "Contact",
    GE: "კონტაქტი",
    RU: "Контакт",
  },
  contactModalTitle: {
    EN: "Get in Touch",
    GE: "დაგვიკავშირდით",
    RU: "Свяжитесь с нами",
  },
  fullName: {
    EN: "Full Name",
    GE: "სრული სახელი",
    RU: "Полное имя",
  },
  email: {
    EN: "Email",
    GE: "ელ.ფოსტა",
    RU: "Эл. почта",
  },
  phone: {
    EN: "Phone",
    GE: "ტელეფონი",
    RU: "Телефон",
  },
  howCanWeHelp: {
    EN: "How can we help?",
    GE: "როგორ შეგვიძლია დაგეხმაროთ?",
    RU: "Чем мы можем помочь?",
  },
  enterFullName: {
    EN: "Enter your full name",
    GE: "შეიყვანეთ თქვენი სრული სახელი",
    RU: "Введите ваше полное имя",
  },
  enterEmail: {
    EN: "Enter your email",
    GE: "შეიყვანეთ თქვენი ელ.ფოსტა",
    RU: "Введите вашу эл. почту",
  },
  enterPhone: {
    EN: "Enter your phone number",
    GE: "შეიყვანეთ თქვენი ტელეფონის ნომერი",
    RU: "Введите ваш номер телефона",
  },
  tellUsHow: {
    EN: "Tell us how we can help you...",
    GE: "გვითხარით, როგორ შეგვიძლია დაგეხმაროთ...",
    RU: "Расскажите, чем мы можем вам помочь...",
  },
  agreeToTerms: {
    EN: "I agree to the Terms & Conditions and Privacy Policy",
    GE: "ვეთანხმები წესებს და კონფიდენციალურობის პოლიტიკას",
    RU: "Я согласен с Условиями и Политикой конфиденциальности",
  },
  submit: {
    EN: "Submit",
    GE: "გაგზავნა",
    RU: "Отправить",
  },

  // Hero
  badge: {
    EN: "Georgia's #1 Restaurant Booking App",
    GE: "საქართველოს #1 რესტორნების დაჯავშნის აპლიკაცია",
    RU: "Приложение #1 для бронирования ресторанов в Грузии",
  },
  heroTitle1: {
    EN: "Book Your Table in",
    GE: "დაჯავშნეთ მაგიდა",
    RU: "Забронируйте столик в",
  },
  heroTitle2: {
    EN: "Two Clicks",
    GE: "მარტივად",
    RU: "Два клика",
  },
  heroSubtext: {
    EN: "Discover and reserve tables at the finest restaurants across Georgia. From cozy cafes to fine dining experiences, all in one app.",
    GE: "აღმოაჩინეთ და დაჯავშნეთ მაგიდები საქართველოს საუკეთესო რესტორნებში. კაფეებიდან საუკეთესო რესტორნებამდე, ყველაფერი ერთ აპლიკაციაში.",
    RU: "Откройте для себя и забронируйте столики в лучших ресторанах Грузии. От уютных кафе до лучших ресторанов, всё в одном приложении.",
  },

  // App mockup
  book: {
    EN: "Book",
    GE: "დაჯავშნა",
    RU: "Забронировать",
  },
  reserveTable: {
    EN: "Reserve a Table",
    GE: "მაგიდის დაჯავშნა",
    RU: "Забронировать столик",
  },
  selectTime: {
    EN: "Select Time",
    GE: "აირჩიეთ დრო",
    RU: "Выберите время",
  },
  guests: {
    EN: "Guests",
    GE: "სტუმარი",
    RU: "Гостей",
  },
  confirmBooking: {
    EN: "Confirm Booking",
    GE: "დაჯავშნის დადასტურება",
    RU: "Подтвердить бронь",
  },
  bookingConfirmed: {
    EN: "Booking Confirmed!",
    GE: "დაჯავშნა დადასტურებულია!",
    RU: "Бронирование подтверждено!",
  },
  reviews: {
    EN: "reviews",
    GE: "შეფასება",
    RU: "отзывов",
  },
  georgianCuisine: {
    EN: "Georgian Cuisine",
    GE: "ქართული სამზარეულო",
    RU: "Грузинская кухня",
  },
  fineDining: {
    EN: "Fine Dining",
    GE: "პრემიუმ რესტორნები",
    RU: "Изысканная кухня",
  },
  experienceAuthentic: {
    EN: "Experience authentic Georgian cuisine in the heart of Tbilisi...",
    GE: "გამოცადეთ ნამდვილი ქართული სამზარეულო თბილისის ცენტრში...",
    RU: "Откройте для себя настоящую грузинскую кухню в сердце Тбилиси...",
  },

  // What is ADGILI
  whatIsAdgili: {
    EN: "What is",
    GE: "რა არის",
    RU: "Что такое",
  },
  whatIsAdgiliDesc1: {
    EN: 'ADGILI (meaning "place" in Georgian) is your gateway to discovering and booking the best dining experiences across Georgia. We connect food lovers with exceptional restaurants, from traditional Georgian cuisine to modern fusion experiences.',
    GE: 'ADGILI (ქართულად "ადგილი") არის თქვენი კარიბჭე საქართველოს საუკეთესო კვებითი გამოცდილების აღმოსაჩენად და დასაჯავშნად. ჩვენ ვაკავშირებთ საჭმლის მოყვარულებს განსაკუთრებულ რესტორნებთან, ტრადიციული ქართული სამზარეულოდან თანამედროვე ფიუჟენ გამოცდილებამდე.',
    RU: 'ADGILI (что означает «место» на грузинском)  это ваш путь к открытию и бронированию лучших гастрономических впечатлений по всей Грузии. Мы соединяем любителей еды с исключительными ресторанами, от традиционной грузинской кухни до современных фьюжн-блюд.',
  },
  whatIsAdgiliDesc2: {
    EN: "Our mission is to make restaurant reservations effortless while helping local restaurants thrive. With real-time availability, instant confirmation, and exclusive deals, ADGILI transforms how Georgians dine out.",
    GE: "ჩვენი მიზანია რესტორნების დაჯავშნა მარტივი გავხადოთ და ადგილობრივ რესტორნებს განვითარებაში დავეხმაროთ. რეალურ დროში ხელმისაწვდომობით, მყისიერი დადასტურებით და ექსკლუზიური შეთავაზებებით, ADGILI ცვლის ქართველების რესტორანში სტუმრობის გამოცდილებას.",
    RU: "Наша миссия сделать бронирование ресторанов легким, помогая местным ресторанам процветать. Благодаря доступности в реальном времени, мгновенному подтверждению и эксклюзивным предложениям, ADGILI меняет то, как грузины обедают вне дома.",
  },
  instantBooking: {
    EN: "Instant Booking",
    GE: "წამიერი დაჯავშნა",
    RU: "Мгновенное бронирование",
  },
  verifiedReviews: {
    EN: "Verified Reviews",
    GE: "დადასტურებული შეფასებები",
    RU: "Проверенные отзывы",
  },
  mobileFirst: {
    EN: "Mobile First",
    GE: "მობილურზე ორიენტირებული",
    RU: "Мобильное приложение",
  },
  availableOnIosAndroid: {
    EN: "Available on iOS & Android",
    GE: "ხელმისაწვდომია iOS & Android-ზე",
    RU: "Доступно на iOS и Android",
  },
  searchVenues: {
    EN: "Search venues",
    GE: "მოძებნეთ ადგილები",
    RU: "Поиск заведений",
  },
  bookInSeconds: {
    EN: "Book in seconds",
    GE: "დაჯავშნეთ წამებში",
    RU: "Бронируйте за секунды",
  },
  readHonestReviews: {
    EN: "Read honest reviews",
    GE: "წაიკითხეთ გულწრფელი შეფასებები",
    RU: "Читайте честные отзывы",
  },

  // Why Choose ADGILI
  whyChoose: {
    EN: "Why Choose",
    GE: "რატომ აირჩიოთ",
    RU: "Почему выбирают",
  },
  whyChooseSubtext: {
    EN: "We've reimagined restaurant booking to be fast, reliable, and rewarding.",
    GE: "ჩვენ წარმოგვიდგენია რესტორნების დაჯავშვნა სწრაფი, საიმედო და მომგებიანი.",
    RU: "Мы переосмыслили бронирование ресторанов, чтобы оно было быстрым, надежным и выгодным.",
  },
  lightningFast: {
    EN: "Lightning Fast",
    GE: "ელვისებურად სწრაფი",
    RU: "Молниеносно",
  },
  lightningFastDesc: {
    EN: "Book your table in under 30 seconds with our streamlined booking flow.",
    GE: "დაჯავშნეთ მაგიდა 30 წამში ჩვენი გამარტივებული დაჯავშნის პროცესით.",
    RU: "Забронируйте столик менее чем за 30 секунд благодаря нашему оптимизированному процессу.",
  },
  guaranteedTables: {
    EN: "Guaranteed Tables",
    GE: "გარანტირებული მაგიდები",
    RU: "Гарантированные столики",
  },
  guaranteedTablesDesc: {
    EN: "Every booking is confirmed instantly. No more waiting for callbacks.",
    GE: "ყოველი დაჯავშნა წამიერად დასტურდება. აღარ დაელოდოთ უკუკავშირს.",
    RU: "Каждое бронирование подтверждается мгновенно. Больше никаких ожиданий обратных звонков.",
  },
  exclusivePerks: {
    EN: "Exclusive Perks",
    GE: "ექსკლუზიური პრივილეგიები",
    RU: "Эксклюзивные бонусы",
  },
  exclusivePerksDesc: {
    EN: "Access special offers, loyalty rewards, and VIP experiences.",
    GE: "მიიღეთ სპეციალური შეთავაზებები, ლოიალობის ჯილდოები და VIP გამოცდილება.",
    RU: "Получите доступ к специальным предложениям, бонусам лояльности и VIP-обслуживанию.",
  },
  localExpertise: {
    EN: "Local Expertise",
    GE: "ადგილობრივი გამოცდილება",
    RU: "Местная экспертиза",
  },
  localExpertiseDesc: {
    EN: "Curated selection of the best restaurants, handpicked by locals.",
    GE: "საუკეთესო რესტორნების კოლექცია, რომლებიც ადგილობრივების მიერაა არჩეული.",
    RU: "Отборная коллекция лучших ресторанов, выбранных местными жителями.",
  },

  // How It Works
  howItWorks: {
    EN: "How It",
    GE: "როგორ",
    RU: "Как это",
  },
  works: {
    EN: "Works",
    GE: "მუშაობს",
    RU: "работает",
  },
  howItWorksSubtext: {
    EN: "Three simple steps to your perfect dining experience.",
    GE: "სამი მარტივი ნაბიჯი თქვენი იდეალური სადილისთვის.",
    RU: "Три простых шага к идеальному ужину.",
  },
  discover: {
    EN: "Discover",
    GE: "აღმოაჩინეთ",
    RU: "Откройте",
  },
  discoverDesc: {
    EN: "Browse restaurants by cuisine, location, or rating. Filter by availability and price.",
    GE: "დაათვალიერეთ რესტორნები სამზარეულოს, მდებარეობის ან რეიტინგის მიხედვით. გაფილტრეთ ხელმისაწვდომობისა და ფასის მიხედვით.",
    RU: "Просматривайте рестораны по кухне, местоположению или рейтингу. Фильтруйте по доступности и цене.",
  },
  select: {
    EN: "Select",
    GE: "აირჩიეთ",
    RU: "Выберите",
  },
  selectDesc: {
    EN: "Choose your preferred date, time, and party size. See real-time availability.",
    GE: "აირჩიეთ სასურველი თარიღი, დრო და სტუმრების რაოდენობა. ნახეთ რეალურ დროში ხელმისაწვდომობა.",
    RU: "Выберите предпочтительную дату, время и количество гостей. Смотрите доступность в реальном времени.",
  },
  confirm: {
    EN: "Confirm",
    GE: "დაადასტურეთ",
    RU: "Подтвердите",
  },
  confirmDesc: {
    EN: "Complete your booking instantly. Receive confirmation and reminders.",
    GE: "დაასრულეთ დაჯავშნა წამიერად. მიიღეთ დადასტურება და შეხსენებები.",
    RU: "Завершите бронирование мгновенно. Получите подтверждение и напоминания.",
  },

  // Get the App
  getThe: {
    EN: "Get the",
    GE: "ჩამოტვირთეთ",
    RU: "Скачайте",
  },
  app: {
    EN: "App",
    GE: "აპლიკაცია",
    RU: "Приложение",
  },
  getTheAppSubtext: {
    EN: "Download ADGILI today and start discovering amazing restaurants in Georgia.",
    GE: "ჩამოტვირთეთ ADGILI დღესვე და დაიწყეთ საქართველოში არსებული საოცარი რესტორნების აღმოჩენა.",
    RU: "Скачайте ADGILI сегодня и начните открывать потрясающие рестораны Грузии.",
  },

  // Footer
  faqs: {
    EN: "FAQs",
    GE: "ხშირად დასმული კითხვები",
    RU: "Часто задаваемые вопросы",
  },
  privacyPolicy: {
    EN: "Privacy Policy",
    GE: "კონფიდენციალურობის პოლიტიკა",
    RU: "Политика конфиденциальности",
  },
  appTermsConditions: {
    EN: "App Terms & Conditions",
    GE: "აპლიკაციის წესები და პირობები",
    RU: "Условия использования приложения",
  },
  websiteTermsConditions: {
    EN: "Website Terms & Conditions",
    GE: "ვებგვერდის წესები და პირობები",
    RU: "Условия использования сайта",
  },
  businessTermsConditions: {
    EN: "GE Business Terms & Conditions",
    GE: "GE ბიზნეს წესები და პირობები",
    RU: "GE Условия для бизнеса",
  },
  deleteAccount: {
    EN: "Delete Account",
    GE: "ანგარიშის წაშლა",
    RU: "Удалить аккаунт",
  },
  copyright: {
    EN: "© 2026 ADGILI. All rights reserved.",
    GE: "© 2026 ADGILI. ყველა უფლება დაცულია.",
    RU: "© 2026 ADGILI. Все права защищены.",
  },

  // FAQs Page
  faqsTitle: {
    EN: "Frequently Asked",
    GE: "ხშირად დასმული",
    RU: "Часто задаваемые",
  },
  questions: {
    EN: "Questions",
    GE: "კითხვები",
    RU: "Вопросы",
  },
  faqQ1: {
    EN: "How do I make a reservation?",
    GE: "როგორ დავჯავშნო მაგიდა?",
    RU: "Как сделать бронирование?",
  },
  faqA1: {
    EN: "Simply download the ADGILI app, browse restaurants, select your preferred date and time, and confirm your booking. It takes less than 30 seconds!",
    GE: "უბრალოდ ჩამოტვირთეთ ADGILI აპლიკაცია, დაათვალიერეთ რესტორნები, აირჩიეთ სასურველი თარიღი და დრო, და დაადასტურეთ დაჯავშნა. ამას 30 წამზე ნაკლები დრო სჭირდება!",
    RU: "Просто скачайте приложение ADGILI, просмотрите рестораны, выберите желаемую дату и время, и подтвердите бронирование. Это занимает менее 30 секунд!",
  },
  faqQ2: {
    EN: "Is ADGILI free to use?",
    GE: "ADGILI უფასოა?",
    RU: "ADGILI бесплатно?",
  },
  faqA2: {
    EN: "Yes, ADGILI is completely free for diners. We don't charge any booking fees.",
    GE: "დიახ, ADGILI სრულიად უფასოა სტუმრებისთვის. ჩვენ არ ვიღებთ დაჯავშნის საფასურს.",
    RU: "Да, ADGILI полностью бесплатно для гостей. Мы не взимаем никаких сборов за бронирование.",
  },
  faqQ3: {
    EN: "Can I cancel or modify my reservation?",
    GE: "შემიძლია დაჯავშნის გაუქმება ან შეცვლა?",
    RU: "Могу ли я отменить или изменить бронирование?",
  },
  faqA3: {
    EN: "Yes, you can cancel or modify your reservation through the app up to 2 hours before your booking time.",
    GE: "დიახ, შეგიძლიათ გააუქმოთ ან შეცვალოთ დაჯავშნა აპლიკაციის საშუალებით დაჯავშნის დრომდე 2 საათით ადრე.",
    RU: "Да, вы можете отменить или изменить бронирование через приложение за 2 часа до назначенного времени.",
  },
  faqQ4: {
    EN: "What cities does ADGILI cover?",
    GE: "რომელ ქალაქებს მოიცავს ADGILI?",
    RU: "Какие города охватывает ADGILI?",
  },
  faqA4: {
    EN: "ADGILI currently covers Tbilisi, Batumi, Kutaisi, and other major cities across Georgia, with more locations being added regularly.",
    GE: "ამჟამად ADGILI მოიცავს თბილისს, ბათუმს, ქუთაისს და საქართველოს სხვა მნიშვნელოვან ქალაქებს, ახალი ლოკაციები რეგულარულად ემატება.",
    RU: "В настоящее время ADGILI охватывает Тбилиси, Батуми, Кутаиси и другие крупные города Грузии, регулярно добавляются новые локации.",
  },
  faqQ5: {
    EN: "How do I contact a restaurant directly?",
    GE: "როგორ დავუკავშირდე პირდაპირ რესტორანს?",
    RU: "Как связаться с рестораном напрямую?",
  },
  faqA5: {
    EN: "Each restaurant listing includes contact information. You can also message restaurants directly through the app.",
    GE: "თითოეული რესტორნის გვერდი შეიცავს საკონტაქტო ინფორმაციას. ასევე შეგიძლიათ პირდაპირ მიწეროთ რესტორნებს აპლიკაციის საშუალებით.",
    RU: "Каждая страница ресторана содержит контактную информацию. Вы также можете написать ресторанам напрямую через приложение.",
  },
  faqQ6: {
    EN: "What payment methods are accepted?",
    GE: "რა გადახდის მეთოდებია მიღებული?",
    RU: "Какие способы оплаты принимаются?",
  },
  faqA6: {
    EN: "ADGILI is a booking platform only. Payments are handled directly by the restaurants. Most restaurants accept cash, credit cards, and mobile payments.",
    GE: "ADGILI მხოლოდ დაჯავშნის პლატფორმაა. გადახდები ხდება პირდაპირ რესტორნებში. რესტორნების უმეტესობა იღებს ნაღდ ფულს, საკრედიტო ბარათებს და მობილურ გადახდებს.",
    RU: "ADGILI  это только платформа для бронирования. Оплата производится непосредственно в ресторанах. Большинство ресторанов принимают наличные, кредитные карты и мобильные платежи.",
  },
  faqQ7: {
    EN: "Do I need an account to make a reservation?",
    GE: "მჭირდება თუ არა აქაუნთი დაჯავშნისთვის?",
    RU: "Нужен ли аккаунт для бронирования?",
  },
  faqA7: {
    EN: "Yes, you need to create a free account to make reservations. This allows you to manage your bookings and receive confirmation notifications.",
    GE: "დიახ, დაჯავშნისთვის საჭიროა უფასო აქაუნთის შექმნა. ეს საშუალებას გაძლევთ მართოთ თქვენი დაჯავშნები და მიიღოთ დადასტურების შეტყობინებები.",
    RU: "Да, для бронирования необходимо создать бесплатный аккаунт. Это позволяет управлять бронированиями и получать уведомления о подтверждении.",
  },
  faqQ8: {
    EN: "What happens if the restaurant cancels my booking?",
    GE: "რა ხდება თუ რესტორანი გააუქმებს ჩემს დაჯავშნას?",
    RU: "Что происходит, если ресторан отменит мое бронирование?",
  },
  faqA8: {
    EN: "If a restaurant needs to cancel your booking, you will be notified immediately via the app and email. Our team will help you find an alternative venue if needed.",
    GE: "თუ რესტორანს დასჭირდება თქვენი დაჯავშნის გაუქმება, მყისიერად მიიღებთ შეტყობინებას აპლიკაციაში და ელ.ფოსტაზე. ჩვენი გუნდი დაგეხმარებათ ალტერნატიული ადგილის პოვნაში საჭიროების შემთხვევაში.",
    RU: "Если ресторану нужно отменить ваше бронирование, вы будете немедленно уведомлены через приложение и по электронной почте. Наша команда поможет найти альтернативное место при необходимости.",
  },
  faqQ9: {
    EN: "Can I book for large groups?",
    GE: "შემიძლია დიდი ჯგუფისთვის დაჯავშნა?",
    RU: "Можно ли бронировать для больших групп?",
  },
  faqA9: {
    EN: "Yes, you can book for groups of up to 20 people through the app. For larger events, we recommend contacting the restaurant directly through our messaging feature.",
    GE: "დიახ, შეგიძლიათ დაჯავშნოთ 20-მდე ადამიანისთვის აპლიკაციის საშუალებით. უფრო დიდი ღონისძიებებისთვის, გირჩევთ პირდაპირ დაუკავშირდეთ რესტორანს ჩვენი შეტყობინებების ფუნქციით.",
    RU: "Да, вы можете забронировать для групп до 20 человек через приложение. Для более крупных мероприятий рекомендуем связаться с рестораном напрямую через нашу функцию сообщений.",
  },
  faqQ10: {
    EN: "How do restaurant ratings work?",
    GE: "როგორ მუშაობს რესტორნების რეიტინგი?",
    RU: "Как работают рейтинги ресторанов?",
  },
  faqA10: {
    EN: "Ratings are based on verified reviews from guests who have actually dined at the restaurant through ADGILI. Only confirmed diners can leave reviews, ensuring authenticity.",
    GE: "რეიტინგები ეფუძნება დადასტურებულ შეფასებებს სტუმრებისგან, რომლებმაც რეალურად ისადილეს რესტორანში ADGILI-ს საშუალებით. მხოლოდ დადასტურებულ სტუმრებს შეუძლიათ შეფასების დატოვება, რაც უზრუნველყოფს ავთენტურობას.",
    RU: "Рейтинги основаны на проверенных отзывах гостей, которые действительно обедали в ресторане через ADGILI. Только подтвержденные гости могут оставлять отзывы, что обеспечивает достоверность.",
  },

  // Terms Page
  termsTitle: {
    EN: "App",
    GE: "აპლიკაციის",
    RU: "Условия",
  },
  terms: {
    EN: "Terms",
    GE: "პირობები",
    RU: "использования",
  },
  termsSection1Title: {
    EN: "1. Acceptance of Terms",
    GE: "1. პირობების მიღება",
    RU: "1. Принятие условий",
  },
  termsSection1: {
    EN: "By downloading, installing, or using the ADGILI mobile application, you agree to be legally bound by these Terms of Service. These terms constitute a binding legal agreement between you and ADGILI LLC. If you do not agree to these terms in their entirety, you must immediately cease using our services and uninstall the application from your device. Your continued use of ADGILI signifies your acceptance of any future modifications to these terms, which we may update periodically without prior notice.",
    GE: "ADGILI მობილური აპლიკაციის ჩამოტვირთვით, ინსტალაციით ან გამოყენებით, თქვენ ეთანხმებით, რომ იყოთ იურიდიულად შეზღუდული ამ მომსახურების პირობებით. ეს პირობები წარმოადგენს სავალდებულო იურიდიულ შეთანხმებას თქვენსა და ADGILI LLC-ს შორის. თუ თქვენ არ ეთანხმებით ამ პირობებს მთლიანად, დაუყოვნებლივ უნდა შეწყვიტოთ ჩვენი სერვისების გამოყენება და წაშალოთ აპლიკაცია თქვენი მოწყობილობიდან.",
    RU: "Загружая, устанавливая или используя мобильное приложение ADGILI, вы соглашаетесь быть юридически связанными настоящими Условиями обслуживания. Эти условия представляют собой обязывающее юридическое соглашение между вами и ADGILI LLC. Если вы не согласны с этими условиями полностью, вы должны немедленно прекратить использование наших услуг и удалить приложение с вашего устройства.",
  },
  termsSection2Title: {
    EN: "2. User Accounts",
    GE: "2. მომხმარებლის ანგარიშები",
    RU: "2. Учетные записи пользователей",
  },
  termsSection2: {
    EN: "To access certain features of ADGILI, you must create a user account by providing accurate and complete information. You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must be at least 18 years old to create an account. You agree to notify us immediately of any unauthorized use of your account. ADGILI reserves the right to suspend or terminate accounts that violate these terms or are involved in fraudulent activities.",
    GE: "ADGILI-ის გარკვეულ ფუნქციებზე წვდომისთვის, თქვენ უნდა შექმნათ მომხმარებლის ანგარიში ზუსტი და სრული ინფორმაციის მიწოდებით. თქვენ ხართ პასუხისმგებელი თქვენი ანგ���რიშის მონაცემების კონფიდენციალურობის შენარჩუნებაზე და თქვენი ანგარიშის ქვეშ განხორციელებულ ყველა აქტივობაზე. ანგარიშის შესაქმნელად უნდა იყოთ მინიმუმ 18 წლის.",
    RU: "Для доступа к определенным функциям ADGILI вы должны создать учетную запись, предоставив точную и полную информацию. Вы несете полную ответственность за сохранение конфиденциальности данных вашей учетной записи и за все действия, происходящие под вашей учетной записью. Для создания учетной записи вам должно быть не менее 18 лет.",
  },
  termsSection3Title: {
    EN: "3. Booking Policy",
    GE: "3. დაჯავშნის პოლიტიკა",
    RU: "3. Политика бронирования",
  },
  termsSection3: {
    EN: "ADGILI facilitates restaurant reservations between users and restaurant partners. All bookings are subject to availability and restaurant confirmation. Users must arrive within 15 minutes of their reservation time; failure to do so may result in cancellation of your table. Cancellations must be made at least 2 hours before the scheduled reservation time. Repeated no-shows or late cancellations may result in temporary or permanent restrictions on your account. Special requests are not guaranteed and are subject to restaurant discretion.",
    GE: "ADGILI ამარტივებს რესტორნების დაჯავშნებს მომხმარებლებსა და პარტნიორ რესტორნებს შორის. ყველა დაჯავშნა ექვემდებარება ხელმისაწვდომობას და რესტორნის დადასტურებას. მომხმარებლები უნდა მოვიდნენ დაჯავშნის დროიდან 15 წუთის განმავლობაში; წინააღმდეგ შემთხვევაში თქვენი მაგიდა შეიძლება გაუქმდეს. გაუქმებები უნდა განხორციელდეს დაგეგმილი დაჯავშნის დრომდე მინიმუმ 2 საათით ადრე.",
    RU: "ADGILI облегчает бронирование ресторанов между пользователями и партнерами-ресторанами. Все бронирования зависят от наличия мест и подтверждения ресторана. Пользователи должны прибыть в течение 15 минут после времени бронирования; в противном случае ваш столик может быть отменен. Отмены должны быть сделаны не менее чем за 2 часа до запланированного времени бронирования.",
  },
  termsSection4Title: {
    EN: "4. User Conduct Rules",
    GE: "4. მომხმარებლის ქცევის წესები",
    RU: "4. Правила поведения пользователей",
  },
  termsSection4: {
    EN: "Users agree to use ADGILI responsibly and ethically. Prohibited activities include: creating multiple accounts, making false reservations, using the service for commercial purposes without authorization, attempting to manipulate ratings or reviews, harassing restaurant staff or other users, and any activity that disrupts the proper functioning of our platform. Violations may result in immediate account termination without refund of any accumulated benefits.",
    GE: "მომხმარებლები თანხმდებიან გამოიყენონ ADGILI პასუხისმგებლობით და ეთიკურად. აკრძალული აქტივობები მოიცავს: მრავალი ანგარიშის შექმნას, ყალბი დაჯავშნების გაკეთებას, სერვისის კომერციული მიზნებისთვის გამოყენებას ავტორიზაციის გარეშე, რეიტინგების ან შეფასებების მანიპულირების მცდელობას, რესტორნის პერსონალის ან სხვა მომხმარებლების შევიწროებას.",
    RU: "Пользователи соглашаются использовать ADGILI ответственно и этично. Запрещенные действия включают: создание нескольких учетных записей, ложные бронирования, использование сервиса в коммерческих целях без разрешения, попытки манипулировать рейтингами или отзывами, притеснение персонала ресторана или других пользователей.",
  },
  termsSection5Title: {
    EN: "5. Intellectual Property",
    GE: "5. ინტელექტუალური საკუთრება",
    RU: "5. Интеллектуальная собственность",
  },
  termsSection5: {
    EN: "All content, trademarks, logos, designs, and software associated with ADGILI are the exclusive property of ADGILI LLC and are protected by Georgian and international intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of our services or included software without explicit written permission. User-generated content, including reviews and ratings, grants ADGILI a worldwide, non-exclusive license to use, display, and distribute such content.",
    GE: "ADGILI-თან დაკავშირებული ყველა კონტენტი, სავაჭრო ნიშანი, ლოგო, დიზაინი და პროგრამული უზრუნველყოფა არის ADGILI LLC-ის ექსკლუზიური საკუთრება და დაცულია საქართველოს და საერთაშორისო ინტელექტუალური საკუთრების კანონებით. თქვენ არ შეგიძლიათ დააკოპიროთ, შეცვალოთ, გაავრცელოთ, გაყიდოთ ან გააქირაოთ ჩვენი სერვისების ან პროგრამული უზრუნველყოფის რაიმე ნაწილი წერილობითი ნებართვის გარეშე.",
    RU: "Весь контент, товарные знаки, логотипы, дизайны и программное обеспечение, связанные с ADGILI, являются исключительной собственностью ADGILI LLC и защищены грузинскими и международными законами об интеллектуальной собственности. Вы не можете копировать, изменять, распространять, продавать или сдавать в аренду любую часть наших услуг без письменного разрешения.",
  },
  termsSection6Title: {
    EN: "6. Limitation of Liability",
    GE: "6. პასუხისმგებლობის შეზღუდვა",
    RU: "6. Ограничение ответственности",
  },
  termsSection6: {
    EN: "ADGILI provides a booking platform only and is not responsible for the quality of food, service, hygiene, or overall experience at partner restaurants. We make no warranties regarding the accuracy of restaurant information, availability, or pricing. ADGILI shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount you have paid to ADGILI in the past twelve months.",
    GE: "ADGILI უზრუნველყოფს მხოლოდ დაჯავშნის პლატფორმას და არ არის პასუხისმგებელი პარტნიორ რესტორნებში საკვების ხარისხზე, მომსახურებაზე, ჰიგიენაზე ან საერთო გამოცდილებაზე. ჩვენ არ ვიძლევით გარანტიას რესტორნის ინფორმაციის, ხელმისაწვდომობის ან ფასების სიზუსტეზე. ADGILI არ იქნება პასუხისმგებელი რაიმე არაპირდაპირ, შემთხვევით, სპეციალურ, შედეგობრივ ან დამსჯელ ზიანზე.",
    RU: "ADGILI предоставляет только платформу для бронирования и не несет ответственности за качество еды, обслуживание, гигиену или общий опыт в партнерских ресторанах. Мы не даем никаких гарантий относительно точности информации о ресторане, доступности или ценах. ADGILI не несет ответственности за любой косвенный, случайный, специальный, последовательный или штрафной ущерб.",
  },
  termsSection7Title: {
    EN: "7. Account Termination",
    GE: "7. ანგარიშის შეწყვეტა",
    RU: "7. Прекращение учетной записи",
  },
  termsSection7: {
    EN: "You may terminate your account at any time through the app settings or by contacting our support team. ADGILI reserves the right to suspend or terminate your account immediately, without prior notice, if we reasonably believe you have violated these terms, engaged in fraudulent activity, or pose a risk to other users or our platform. Upon termination, your right to use ADGILI ceases immediately, and we may delete your data in accordance with our Privacy Policy.",
    GE: "შეგიძლიათ შეწყვიტოთ თქვენი ანგარიში ნებისმიერ დროს აპლიკაციის პარამეტრებით ან ჩვენს მხარდაჭერის გუნდთან დაკავშირებით. ADGILI იტოვებს უფლებას დაუყოვნებლივ შეაჩეროს ან შეწყვიტოს თქვენი ანგარიში, წინასწარი შეტყობინების გარეშე, თუ გონივრულად მივიჩნევთ, რომ თქვენ დაარღვიეთ ეს პირობები, მონაწილეობთ თაღლითურ საქმიანობაში ან საფრთხეს უქმნით სხვა მომხმარებლებს.",
    RU: "Вы можете удалить свою учетную запись в любое время через настройки приложения или связавшись с нашей службой поддержки. ADGILI оставляет за собой право немедленно приостановить или удалить вашу учетную запись без предварительного уведомления, если мы обоснованно полагаем, что вы нарушили эти условия, занимались мошенничеством или представляете риск для других пользователей.",
  },
  termsSection8Title: {
    EN: "8. Governing Law",
    GE: "8. მოქმედი კანონმდებლობა",
    RU: "8. Применимое право",
  },
  termsSection8: {
    EN: "These Terms of Service shall be governed by and construed in accordance with the laws of Georgia, without regard to its conflict of law provisions. Any disputes arising from these terms or your use of ADGILI shall be resolved exclusively in the courts of Tbilisi, Georgia. By using ADGILI, you consent to the personal jurisdiction of these courts. If any provision of these terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.",
    GE: "ეს მომსახურების პირობები რეგულირდება და განიმარტება საქართველოს კანონმდებლობის შესაბამისად, კანონთა კონფლიქტის დებულებების მიუხედავად. ამ პირობებიდან ან ADGILI-ის გამოყენებიდან წარმოშობილი ნებისმიერი დავა გადაწყდება ექსკლუზიურად თბილისის, საქართველოს სასამართლოებში. ADGILI-ის გამოყენებით, თქვენ ეთანხმებით ამ სასამართლოების პირადი იურისდიქციას.",
    RU: "Настоящие Условия обслуживания регулируются и толкуются в соответствии с законодательством Грузии, без учета положений о коллизии законов. Любые споры, возникающие из этих условий или использования ADGILI, будут разрешаться исключительно в судах Тбилиси, Грузия. Используя ADGILI, вы соглашаетесь с персональной юрисдикцией этих судов.",
  },

  // Website Terms Page
  websiteTermsTitle: {
    EN: "Website",
    GE: "ვებგვერდის",
    RU: "Условия",
  },
  websiteTermsTitle2: {
    EN: "Terms & Conditions",
    GE: "წესები და პირობები",
    RU: "использования сайта",
  },
  websiteSection1Title: {
    EN: "1. Website Use",
    GE: "1. ვებგვერდის გამოყენება",
    RU: "1. Использование сайта",
  },
  websiteSection1: {
    EN: "By accessing and using the ADGILI website, you agree to comply with these terms and conditions. The website is provided for informational purposes and to facilitate access to our mobile application. You may browse the website, download our app, and access publicly available content without creating an account. Commercial use of website content without authorization is prohibited.",
    GE: "ADGILI ვებგვერდზე წვდომით და გამოყენებით, თქვენ ეთანხმებით ამ წესებსა და პირობებს. ვებგვერდი მოწოდებულია საინფორმაციო მიზნებისთვის და ჩვენი მობილური აპლიკაციის წვდომის გასაადვილებლად. შეგიძლიათ დაათვალიეროთ ვებგვერდი, ჩამოტვირთოთ ჩვენი აპლიკაცია და მიიღოთ საჯაროდ ხელმისაწვდომი კონტენტი ანგარიშის შექმნის გარეშე.",
    RU: "Получая доступ к веб-сайту ADGILI и используя его, вы соглашаетесь соблюдать эти условия. Веб-сайт предоставляется в информационных целях и для облегчения доступа к нашему мобильному приложению. Вы можете просматривать сайт, загружать наше приложение и получать доступ к общедоступному контенту без создания учетной записи.",
  },
  websiteSection2Title: {
    EN: "2. Content Ownership",
    GE: "2. კონტენტის საკუთრება",
    RU: "2. Право собственности на контент",
  },
  websiteSection2: {
    EN: "All content on this website, including text, graphics, logos, images, and software, is the property of ADGILI LLC or its content suppliers and is protected by Georgian and international copyright laws. You may not reproduce, distribute, modify, or create derivative works from any content without prior written consent.",
    GE: "ამ ვებგვერდის ყველა კონტენტი, მათ შორის ტექსტი, გრაფიკა, ლოგოები, სურათები და პროგრამული უზრუნველყოფა, არის ADGILI LLC-ის ან მისი კონტენტის მომწოდებლების საკუთრება და დაცულია საქართველოს და საერთაშორისო საავტორო უფლებების კანონებით.",
    RU: "Весь контент на этом веб-сайте, включая текст, графику, логотипы, изображения и программное обеспечение, является собственностью ADGILI LLC или его поставщиков контента и защищен грузинскими и международными законами об авторском праве.",
  },
  websiteSection3Title: {
    EN: "3. External Links",
    GE: "3. გარე ბმულები",
    RU: "3. Внешние ссылки",
  },
  websiteSection3: {
    EN: "Our website may contain links to third-party websites. These links are provided for your convenience only. ADGILI does not endorse, control, or assume responsibility for the content or practices of any third-party sites. Accessing external links is at your own risk.",
    GE: "ჩვენი ვებგვერდი შეიძლება შეიცავდეს ბმულებს მესამე მხარის ვებგვერდებზე. ეს ბმულები მოწოდებულია მხოლოდ თქვენი მოხერხებულობისთვის. ADGILI არ უჭერს მხარს, არ აკონტროლებს და არ იღებს პასუხისმგებლობას მესამე მხარის საიტების კონტენტზე ან პრაქტიკაზე.",
    RU: "Наш веб-сайт может содержать ссылки на сторонние веб-сайты. Эти ссылки предоставляются только для вашего удобства. ADGILI не поддерживает, не контролирует и не несет ответственности за контент или практику сторонних сайтов.",
  },
  websiteSection4Title: {
    EN: "4. Disclaimer",
    GE: "4. უარყოფა",
    RU: "4. Отказ от ответственности",
  },
  websiteSection4: {
    EN: "The website and its content are provided 'as is' without warranties of any kind. ADGILI disclaims all warranties, express or implied, including but not limited to merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee that the website will be error-free, secure, or continuously available.",
    GE: "ვებგვერდი და მისი კონტენტი მოწოდებულია 'როგორც არის' ყოველგვარი გარანტიის გარეშე. ADGILI უარყოფს ყველა გარანტიას, გამოხატულს თუ ნაგულისხმევს, მათ შორის, მაგრამ არ შემოიფარგლება კომერციული ვარგისიანობით, კონკრეტული მიზნისთვის ვარგისიანობით და დარღვევის არარსებობით.",
    RU: "Веб-сайт и его содержимое предоставляются «как есть» без каких-либо гарантий. ADGILI отказывается от всех гарантий, явных или подразумеваемых, включая, но не ограничиваясь, коммерческую пригодность, пригодность для определенной цели и отсутствие нарушений.",
  },
  websiteSection5Title: {
    EN: "5. Modifications",
    GE: "5. ცვლილებები",
    RU: "5. Изменения",
  },
  websiteSection5: {
    EN: "ADGILI reserves the right to modify these website terms at any time without prior notice. Changes become effective immediately upon posting. Your continued use of the website after changes constitutes acceptance of the modified terms. We encourage you to review these terms periodically.",
    GE: "ADGILI იტოვებს უფლებას შეცვალოს ვებგვერდის ეს პირობები ნებისმიერ დროს წინასწარი შეტყობინების გარეშე. ცვლილებები ძალაში შედის გამოქვეყნებისთანავე. ვებგვერდის გამოყენების გაგრძელება ცვლილებების შემდეგ ნიშნავს შეცვლილი პირობების მიღებას.",
    RU: "ADGILI оставляет за собой право изменять условия использования веб-сайта в любое время без предварительного уведомления. Изменения вступают в силу сразу после публикации. Продолжение использования веб-сайта после изменений означает принятие измененных условий.",
  },

  // GE Business Terms Page
  businessTermsTitle: {
    EN: "GE Business",
    GE: "GE ბიზნეს",
    RU: "GE Бизнес",
  },
  businessTermsTitle2: {
    EN: "Terms & Conditions",
    GE: "წესები და პირობები",
    RU: "Условия",
  },
  businessSection1Title: {
    EN: "1. Partner Agreement",
    GE: "1. პარტნიორობის შეთანხმება",
    RU: "1. Партнерское соглашение",
  },
  businessSection1: {
    EN: "These Business Terms govern the relationship between ADGILI LLC and restaurant partners ('Partners') using our platform. By registering as a business partner, you agree to these terms and our standard commission rates. Partners must be legally registered businesses in Georgia with valid operating licenses.",
    GE: "ეს ბიზნეს პირობები არეგულირებს ურთიერთობას ADGILI LLC-სა და პარტნიორ რესტორნებს ('პარტნიორები') შორის, რომლებიც იყენებენ ჩვენს პლატფორმას. ბიზნეს პარტნიორად რეგისტრაციით, თქვენ ეთანხმებით ამ პირობებს და ჩვენს სტანდარტულ საკომისიო განაკვეთებს.",
    RU: "Настоящие Бизнес-условия регулируют отношения между ADGILI LLC и ресторанами-партнерами ('Партнеры'), использующими нашу платформу. Регистрируясь в качестве бизнес-партнера, вы соглашаетесь с этими условиями и нашими стандартными комиссионными ставками.",
  },
  businessSection2Title: {
    EN: "2. Commission & Payments",
    GE: "2. საკომისიო და გადახდები",
    RU: "2. Комиссия и платежи",
  },
  businessSection2: {
    EN: "Partners agree to pay ADGILI a commission on bookings made through our platform. Commission rates vary based on partnership tier and volume. Payments are processed monthly, with detailed reports provided. Partners are responsible for all applicable taxes on their earnings.",
    GE: "პარტნიორები თანხმდებიან გადაუხადონ ADGILI-ს საკომისიო ჩვენი პლატფორმის საშუალებით განხორციელებულ დაჯავშნებზე. საკომისიო განაკვეთები განსხვავდება პარტნიორობის დონისა და მოცულობის მიხედვით. გადახდები მუშავდება ყოველთვიურად, დეტალური ანგარიშებით.",
    RU: "Партнеры соглашаются платить ADGILI комиссию за бронирования, сделанные через нашу платформу. Комиссионные ставки варьируются в зависимости от уровня партнерства и объема. Платежи обрабатываются ежемесячно с предоставлением подробных отчетов.",
  },
  businessSection3Title: {
    EN: "3. Listing Requirements",
    GE: "3. ჩამონათვალის მოთხოვნები",
    RU: "3. Требования к размещению",
  },
  businessSection3: {
    EN: "Partners must provide accurate and up-to-date information about their establishment, including operating hours, menu, photos, and contact details. ADGILI reserves the right to verify information and request updates. Misleading or false information may result in listing removal.",
    GE: "პარტნიორებმა უნდა მიაწოდონ ზუსტი და განახლებული ინფორმაცია თავიანთი დაწესებულების შესახებ, მათ შორის სამუშაო საათები, მენიუ, ფოტოები და საკონტაქტო ინფორმაცია. ADGILI იტოვებს უფლებას შეამოწმოს ინფორმაცია და მოითხოვოს განახლებები.",
    RU: "Партнеры должны предоставлять точную и актуальную информацию о своем заведении, включая часы работы, меню, фотографии и контактные данные. ADGILI оставляет за собой право проверять информацию и запрашивать обновления.",
  },
  businessSection4Title: {
    EN: "4. Booking Obligations",
    GE: "4. დაჯავშნის ვალდებულებები",
    RU: "4. Обязательства по бронированию",
  },
  businessSection4: {
    EN: "Partners must honor all confirmed bookings made through ADGILI. Cancellations by the partner must be communicated immediately through our system. Repeated cancellations or failure to honor bookings may result in penalties, reduced visibility, or partnership termination.",
    GE: "პარტნიორებმა უნდა დაიცვან ADGILI-ს საშუალებით განხორციელებული ყველა დადასტურებული დაჯავშნა. პარტნიორის მიერ გაუქმებები დაუყოვნებლივ უნდა ეცნობოს ჩვენს სისტემის საშუალებით. განმეორებითი გაუქმებები შეიძლება გამოიწვიოს ჯარიმები ან პარტნიორობის შეწყვეტა.",
    RU: "Партнеры обязаны выполнять все подтвержденные бронирования, сделанные через ADGILI. Об отменах со стороны партнера необходимо немедленно сообщать через нашу систему. Повторные отмены могут привести к штрафам или прекращению партнерства.",
  },
  businessSection5Title: {
    EN: "5. Data & Analytics",
    GE: "5. მონაცემები და ანალიტიკა",
    RU: "5. Данные и аналитика",
  },
  businessSection5: {
    EN: "Partners receive access to booking analytics and customer insights through our partner dashboard. Customer data shared with partners is limited to what's necessary for reservation fulfillment. Partners must comply with all applicable data protection laws and may not use customer data for unauthorized purposes.",
    GE: "პარტნიორები იღებენ წვდომას დაჯავშნის ანალიტიკასა და მომხმარებლის ინფორმაციაზე ჩვენი პარტნიორის პანელის საშუალებით. პარტნიორებთან გაზიარებული მომხმარებლის მონაცემები შეზღუდულია იმით, რაც აუცილებელია დაჯავშნის შესასრულებლად.",
    RU: "Партнеры получают доступ к аналитике бронирований и информации о клиентах через нашу партнерскую панель. Данные клиентов, передаваемые партнерам, ограничены тем, что необходимо для выполнения бронирования.",
  },
  businessSection6Title: {
    EN: "6. Termination",
    GE: "6. შეწყვეტა",
    RU: "6. Прекращение",
  },
  businessSection6: {
    EN: "Either party may terminate this partnership with 30 days written notice. ADGILI may terminate immediately for material breach of these terms. Upon termination, outstanding commissions remain due and payable. Partners must honor any bookings made prior to termination.",
    GE: "ნებისმიერ მხარეს შეუძლია შეწყვიტოს ეს პარტნიორობა 30 დღიანი წერილობითი შეტყობინებით. ADGILI-ს შეუძლია დაუყოვნებლივ შეწყვიტოს ამ პირობების არსებითი დარღვევის შემთხვევაში. შეწყვეტის შემდეგ, გადაუხდელი საკომისიოები რჩება გადასახდელად.",
    RU: "Любая сторона может прекратить это партнерство с письменным уведомлением за 30 дней. ADGILI может немедленно прекратить партнерство за существенное нарушение этих условий. После прекращения невыплаченные комиссии остаются к оплате.",
  },

  // Privacy Page
  privacyTitle: {
    EN: "Privacy",
    GE: "კონფიდენციალურობის",
    RU: "Политика",
  },
  policy: {
    EN: "Policy",
    GE: "პოლიტიკა",
    RU: "конфиденциальности",
  },
  privacySection1Title: {
    EN: "Data We Collect",
    GE: "მონაცემები, რომლებსაც ვაგროვებთ",
    RU: "Данные, которые мы собираем",
  },
  privacySection1: {
    EN: "We collect information you provide directly, including your full name, email address, phone number, date of birth, and profile preferences. We also automatically collect device information, IP address, location data (with your permission), app usage statistics, and interaction data such as restaurants viewed, searches performed, and bookings made. This information helps us personalize your experience and improve our services.",
    GE: "ჩვენ ვაგროვებთ ინფორმ��ციას, რომელსაც პირდაპირ მოგვაწვდით, მათ შორის თქვენი სრული სახელი, ელ.ფოსტის მისამართი, ტელეფონის ნომერი, დაბადების თარიღი და პროფილის პრეფერენციები. ჩვენ ასევე ავტომატურად ვაგროვებთ მოწყობილობის ინფორმაციას, IP მისამართს, მდებარეობის მონაცემებს (თქვენი ნებართვით), აპლიკაციის გამოყენების სტატისტიკას და ინტერაქციის მონაცემებს.",
    RU: "Мы собираем информацию, которую вы предоставляете напрямую, включая ваше полное имя, адрес электронной почты, номер телефона, дату рождения и предпочтения профиля. Мы также автоматически собираем информацию об устройстве, IP-адрес, данные о местоположении (с вашего разрешения), статистику использования приложения и данные взаимодействия.",
  },
  privacySection2Title: {
    EN: "How We Use Your Data",
    GE: "როგორ ვიყენებთ თქვენს მონაცემებს",
    RU: "Как мы используем ваши данные",
  },
  privacySection2: {
    EN: "Your information is used to process and manage your reservations, send booking confirmations and reminders, provide personalized restaurant recommendations, improve our services and user experience, communicate important updates about your account or our services, prevent fraud and ensure platform security, and comply with legal obligations. We analyze aggregated, anonymized data to understand usage patterns and improve ADGILI.",
    GE: "თქვენი ინფორმაცია გამოიყენება თქვენი დაჯავშნების დასამუშავებლად და სამართავად, დაჯავშნის დადასტურებებისა და შეხსენებების გასაგზავნად, პერსონალიზებული რესტორნის რეკომენდაციების მოსაწოდებლად, ჩვენი სერვისების და მომხმარებლის გამოცდილების გასაუმჯობესებლად, თქვენი ანგარიშის ან ჩვენი სერვისების შესახებ მნიშვნელოვანი განახლებების შესატყობინებლად.",
    RU: "Ваша информация используется для обработки и управления бронированиями, отправки подтверждений и напоминаний о бронировании, предоставления персонализированных рекомендаций ресторанов, улучшения наших услуг и пользовательского опыта, сообщения важных обновлений о вашей учетной записи или наших услугах.",
  },
  privacySection3Title: {
    EN: "Data Storage & Security",
    GE: "მონაცემთა შენახვა და უსაფრთხოება",
    RU: "Хранение и безопасность данных",
  },
  privacySection3: {
    EN: "Your data is stored on secure servers located in the European Union, compliant with GDPR standards. We implement industry-standard security measures including encryption at rest and in transit, regular security audits, access controls, and intrusion detection systems. We retain your personal data for as long as your account is active or as needed to provide services. After account deletion, we retain anonymized data for analytical purposes and certain data as required by law.",
    GE: "თქვენი მონაცემები ინახება უსაფრთხო სერვერებზე, რომლებიც მდებარეობს ევროკავშირში და შეესაბამება GDPR სტანდარტებს. ჩვენ ვახორციელებთ ინდუსტრიის სტანდარტულ უსაფრთხოების ზომებს, მათ შორის დაშიფვრას, რეგულარულ უსაფრთხოების აუდიტს, წვდომის კონტროლს და შეჭრის აღმოჩენის სისტემებს.",
    RU: "Ваши данные хранятся на защищенных серверах, расположенных в Европейском Союзе, в соответствии со стандартами GDPR. Мы применяем стандартные отраслевые меры безопасности, включая шифрование, регулярные аудиты безопасности, контроль доступа и системы обнаружения вторжений.",
  },
  privacySection4Title: {
    EN: "Third-Party Sharing",
    GE: "მესამე მხარეებთან გაზიარება",
    RU: "Передача третьим лицам",
  },
  privacySection4: {
    EN: "We share necessary booking information with restaurant partners to confirm and manage your reservations. We may share anonymized, aggregated data with analytics providers to improve our services. We do not sell your personal information to third parties for marketing purposes. We may disclose information if required by law, court order, or to protect our legal rights. In the event of a merger or acquisition, your data may be transferred to the new entity.",
    GE: "ჩვენ ვუზიარებთ საჭირო დაჯავშნის ინფორმაციას პარტნიორ რესტორნებს თქვენი დაჯავშნების დასადასტურებლად და სამართავად. ჩვენ შეიძლება გავუზიაროთ ანონიმიზირებული, აგრეგირებული მონაცემები ანალიტიკის პროვაიდერებს ჩვენი სერვისების გასაუმჯობესებლად. ჩვენ არ ვყიდით თქვენს პირად ინფორმაციას მესამე მხარეებს მარკეტინგული მიზნებისთვის.",
    RU: "Мы делимся необходимой информацией о бронировании с партнерами-ресторанами для подтверждения и управления вашими бронированиями. Мы можем делиться анонимизированными, агрегированными данными с аналитическими провайдерами для улучшения наших услуг. Мы не продаем вашу личную информацию третьим лицам для маркетинговых целей.",
  },
  privacySection5Title: {
    EN: "Your Rights",
    GE: "თქვენი უფლებები",
    RU: "Ваши права",
  },
  privacySection5: {
    EN: "You have the right to access, correct, or delete your personal information at any time. You can request a copy of all data we hold about you in a portable format. You have the right to restrict or object to certain processing of your data. You can withdraw consent for optional data processing, such as location tracking or marketing communications. To exercise these rights, contact us through the app or via email. We will respond to requests within 30 days.",
    GE: "თქვენ გაქვთ უფლება ნებისმიერ დროს მიიღოთ წვდომა, შეასწოროთ ან წაშალოთ თქვენი პირადი ინფორმაცია. შეგიძლიათ მოითხოვოთ ყველა მონაცემის ასლი, რომელსაც თქვენ შესახებ ვფლობთ პორტატულ ფორმატში. თქვენ გაქვთ უფლება შეზღუდოთ ან გააპროტესტოთ თქვენი მონაცემების გარკვეული დამუშავება.",
    RU: "Вы имеете право получить доступ, исправить или удалить вашу личную информацию в любое время. Вы можете запросить копию всех данных, которые мы храним о вас, в портативном формате. Вы имеете право ограничить или возразить против определенной обработки ваших данных.",
  },
  privacySection6Title: {
    EN: "Cookies & Tracking",
    GE: "ქუქი-ფაილები და თვალყურის დევნება",
    RU: "Файлы cookie и отслеживание",
  },
  privacySection6: {
    EN: "Our app and website use cookies and similar tracking technologies to enhance your experience, remember your preferences, analyze traffic patterns, and deliver personalized content. Essential cookies are necessary for basic functionality and cannot be disabled. Analytics cookies help us understand how users interact with our platform. You can manage cookie preferences through your browser or device settings. Disabling certain cookies may affect app functionality.",
    GE: "ჩვენი აპლიკაცია და ვებგვერდი იყენებს ქუქი-ფაილებს და მსგავს თვალყურის დევნის ტექნოლოგიებს თქვენი გამოცდილების გასაუმჯობესებლად, თქვენი პრეფერენციების დასამახსოვრებლად, ტრაფიკის ნიმუშების გასაანალიზებლად და პერსონალიზებული კონტენტის მოსაწოდებლად.",
    RU: "Наше приложение и веб-сайт используют файлы cookie и аналогичные технологии отслеживания для улучшения вашего опыта, запоминания ваших предпочтений, анализа трафика и предоставления персонализированного контента.",
  },
  privacySection7Title: {
    EN: "Contact Us",
    GE: "დაგვიკავშირდით",
    RU: "Свяжитесь с нами",
  },
  privacySection7: {
    EN: "For any privacy-related questions, concerns, or requests, please contact our Data Protection Officer at hello@adgili.co. You can also reach us through the app's support feature or by mail at ADGILI LLC, Tbilisi, Georgia. We are committed to addressing your concerns promptly and transparently.",
    GE: "ნებისმიერი კონფიდენციალურობასთან დაკავშირებული კითხვის, შეშფოთების ან მოთხოვნისთვის, გთხოვთ დაუკავშირდეთ ჩვენს მონაცემთა დაცვის ოფიცერს მისამართზე hello@adgili.co. ასევე შეგიძლიათ დაგვიკავშირდეთ აპლიკაციის მხარდაჭერის ფუნქციით ან ფოსტით: ADGILI LLC, თბილისი, საქართველო.",
    RU: "По любым вопросам, касающимся конфиденциальности, пожалуйста, свяжитесь с нашим специалистом по защите данных по адресу hello@adgili.co. Вы также можете связаться с нами через функцию поддержки в приложении или по почте: ADGILI LLC, Тбилиси, Грузия.",
  },

  // Delete Account Page
  deleteYourAccount: {
    EN: "Delete Your Account",
    GE: "თქვენი ანგარიშის წაშლა",
    RU: "Удалить ваш аккаунт",
  },
  deleteAccountDesc: {
    EN: "Please provide the same details you used to register. This will permanently delete your account within 30 days including personal data, profile and preferences. Some reservation history may be retained for venue partners. A confirmation email will be sent. Questions? hello@adgili.co",
    GE: "გთხოვთ მიუთითოთ იგივე მონაცემები, რომლებითაც დარეგისტრირდით. ეს სამუდამოდ წაშლის თქვენს ანგარიშს 30 დღის განმავლობაში, მათ შორის პირად მონაცემებს, პროფილს და პრეფერენციებს. დაჯავშნების ისტორიის ნაწილი შეიძლება შენარჩუნდეს პარტნიორი ადგილებისთვის. დადასტურების ელ.ფოსტა გამოგეგზავნებათ. კითხვები? hello@adgili.co",
    RU: "Пожалуйста, укажите те же данные, которые вы использовали при регистрации. Это навсегда удалит вашу учетную запись в течение 30 дней, включая личные данные, профиль и предпочтения. Некоторая история бронирований может быть сохранена для партнеров-заведений. Будет отправлено письмо с подтверждением. Вопросы? hello@adgili.co",
  },
  reasonForDeletion: {
    EN: "Reason for deletion (optional)",
    GE: "წაშლის მიზეზი (არასავალდებულო)",
    RU: "Причина удаления (необязательно)",
  },
  reasonPlaceholder: {
    EN: "Tell us why you're leaving (optional)...",
    GE: "გვითხარით რატომ გადიხართ (არასავალდებულო)...",
    RU: "Расскажите, почему вы уходите (необязательно)...",
  },
  understandPermanent: {
    EN: "I understand this is permanent and cannot be undone",
    GE: "��ესმის, რომ ეს სამუდამოა და ვერ გაუქმდება",
    RU: "Я понимаю, что это навсегда и не может быть отменено",
  },
  submitDeletionRequest: {
    EN: "Submit Deletion Request",
    GE: "წაშლის მოთხოვნის გაგზავნა",
    RU: "Отправить запрос на удаление",
  },
  requestSubmitted: {
    EN: "Request Submitted",
    GE: "მოთხოვნა გაგზავნილია",
    RU: "Запрос отправлен",
  },
  requestSubmittedDesc: {
    EN: "We've received your account deletion request. Your account will be permanently deleted within 30 days. You'll receive a confirmation email shortly.",
    GE: "ჩვენ მივიღეთ თქვენი ანგარიშის წაშლის მოთხოვნა. თქვენი ანგარიში სამუდამოდ წაიშლება 30 დღის განმავლობაში. მალე მიიღებთ დადასტურების ელ.ფოსტას.",
    RU: "Мы получили ваш запрос на удаление учетной записи. Ваша учетная запись будет окончательно удалена в течение 30 дней. Вскоре вы получите письмо с подтверждением.",
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("EN")

  const t = (key: string): string => {
    const translation = translations[key]
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`)
      return key
    }
    return translation[language]
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
