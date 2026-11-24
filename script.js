(() => {
  const button = document.getElementById('langToggle');
  let language = 'ar';
  const applyLanguage = (lang) => {
    language = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = document.documentElement.dir;
    document.querySelectorAll('[data-ar][data-fr]').forEach((el) => {
      el.textContent = el.dataset[lang];
    });
    button.textContent = lang === 'ar' ? 'Français' : 'العربية';
    button.setAttribute('aria-label', lang === 'ar' ? 'Passer au français' : 'التبديل إلى العربية');
    document.title = lang === 'ar'
      ? 'المؤسسة العمومية الاستشفائية بالشطية | EPH Chettia'
      : 'Établissement Public Hospitalier de Chettia | EPH Chettia';
  };
  button.addEventListener('click', () => applyLanguage(language === 'ar' ? 'fr' : 'ar'));
})();