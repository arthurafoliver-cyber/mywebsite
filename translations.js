const translations = {
  pt: {
    title: "Portfolio Arthur",
    nav_about: "Sobre mim",
    nav_skills: "Habilidades",
    nav_hobbies: "Hobbies",
    nav_portfolio: "Portfolio",
    nav_contact: "Contato",
    about_heading: "Quem sou eu?",
    about_text: "Eu sou um estudante que está buscando aprimorar as habilidades de programação.",
    skills_heading: "Minhas habilidades",
    skills_text: "Eu tenho experiência em desenvolvimento web, e gosto muito de resolver problemas e raciocínio lógico.",
    languages_text: "Eu sou fluente em inglês (certificado abaixo) e posso desenvolver em outras línguas, ou adicionar suporte em outros idiomas a seu aplicativo/website.",
    hobbies_heading: "Meus hobbies",
    hobbies_text: "Eu gosto de jogar xadrez (tenho 1750 de rating FIDE), gosto de programação e tecnologia, e também gosto de ler!",
    music_heading: "Minhas músicas favoritas?",
    music_text: "Eu gosto de escutar Kendrick Lamar.",
    kendrick_alt: "Kendrick Lamar",
    portfolio_heading: "Portfolio",
    certificate_alt: "Certificado de inglês",
    view_certificate: "Ver certificado",
    contact_heading: "Como me contatar"
  },
  en: {
    title: "Arthur's Portfolio",
    nav_about: "About me",
    nav_skills: "Skills",
    nav_hobbies: "Hobbies",
    nav_portfolio: "Portfolio",
    nav_contact: "Contact",
    about_heading: "Who am I?",
    about_text: "I'm a student looking to improve my programming skills.",
    skills_heading: "My skills",
    skills_text: "I have experience in web development, and I really enjoy problem solving and logical reasoning.",
    languages_text: "I'm fluent in English (certificate below) and can develop in other languages, or add support for other languages to your app/website.",
    hobbies_heading: "My hobbies",
    hobbies_text: "I like playing chess (I'm 1750 FIDE rated), coding and technology, and I also enjoy reading!",
    music_heading: "My favorite music?",
    music_text: "I like Kendrick Lamar.",
    kendrick_alt: "Kendrick Lamar",
    portfolio_heading: "Portfolio",
    certificate_alt: "English certificate",
    view_certificate: "View certificate",
    contact_heading: "How to contact me"
  }
};

function setLanguage(lang) {
  if (!translations[lang]) return;

  // Swap all text content
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Swap image alt texts
  document.querySelectorAll("[data-i18n-alt]").forEach(el => {
    const key = el.getAttribute("data-i18n-alt");
    if (translations[lang][key]) {
      el.setAttribute("alt", translations[lang][key]);
    }
  });

  document.documentElement.lang = lang;
  document.title = translations[lang].title;
  localStorage.setItem("language", lang);
}

// On load: saved choice → browser language → Portuguese fallback
const saved =
  localStorage.getItem("language") ||
  (navigator.language.toLowerCase().startsWith("en") ? "en" : "pt");
setLanguage(saved);
