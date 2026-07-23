import type { CompanyInfo, ContactInfo, NavItem } from "@/types/content";

export const company: CompanyInfo = {
  name: "Birch Prime",
  legalName: "Birch Prime",
  taglineShort: "Создадено да трае",
  taglineLong:
    "Шперплоча од бреза за градежништво, транспорт и производство.",
  aboutParagraphs: [
    "Birch Prime е специјализиран дистрибутер на плочи од бреза за градежништво, транспорт, мебел и индустрија. Работиме со проверени европски производители и одржуваме залиха која гарантира брза испорака.",
    "Секој материјал го избираме според технички лист — не според цена. Оттука доаѓа и нашата репутација кај изведувачи, архитекти, транспортни компании и мебелски производители.",
  ],
  markets: ["Северна Македонија", "Србија", "Балкан"],
};

export const contact: ContactInfo = {
  email: "kontakt@birchprime.rs",
  phones: ["+381 69 600 165", "+381 69 187 5424"],
  address: "Cara Konstantina 10, Београд, Србија",
  workingHoursNote: "Одговараме во работно време, обично во рок од еден работен ден.",
};

export const primaryNav: NavItem[] = [
  { label: "Почетна", href: "/" },
  {
    label: "Производи",
    href: "/proizvodi",
    children: [
      { label: "Ламинирана мазна оплата (F/F)", href: "/proizvodi/viseslojna-laminirana-glatka-oplata" },
      { label: "Противлизгачка оплата (FWD1)", href: "/proizvodi/laminirana-hrapava-oplata" },
      { label: "Необложена шперплоча", href: "/proizvodi/neoblozena-sperploca-od-bele-breze" },
      { label: "Жолта премиум оплата", href: "/proizvodi/zuta-premium-oplata" },
      { label: "Оплата од топола", href: "/proizvodi/premium-oplata-od-topole" },
    ],
  },
  {
    label: "Индустрии",
    href: "/gradezhnishtvo",
    children: [
      { label: "Градежништво", href: "/gradezhnishtvo" },
      { label: "Транспорт", href: "/transport" },
      { label: "Мебел и ентериер", href: "/mebel-i-enterier" },
    ],
  },
  { label: "За нас", href: "/za-nas" },
  { label: "Блог", href: "/blog" },
  { label: "Контакт", href: "/kontakt" },
];

export const footerNav = {
  products: [
    { label: "Ламинирана мазна оплата", href: "/proizvodi/viseslojna-laminirana-glatka-oplata" },
    { label: "Противлизгачка оплата", href: "/proizvodi/laminirana-hrapava-oplata" },
    { label: "Необложена шперплоча", href: "/proizvodi/neoblozena-sperploca-od-bele-breze" },
    { label: "Жолта премиум оплата", href: "/proizvodi/zuta-premium-oplata" },
    { label: "Оплата од топола", href: "/proizvodi/premium-oplata-od-topole" },
  ],
  industries: [
    { label: "Градежништво", href: "/gradezhnishtvo" },
    { label: "Транспорт", href: "/transport" },
    { label: "Мебел и ентериер", href: "/mebel-i-enterier" },
  ],
  company: [
    { label: "За нас", href: "/za-nas" },
    { label: "Блог", href: "/blog" },
    { label: "Контакт", href: "/kontakt" },
  ],
  legal: [
    { label: "Политика за приватност", href: "/politika-na-privatnost" },
    { label: "Политика за колачиња", href: "/kolacinja" },
  ],
};
