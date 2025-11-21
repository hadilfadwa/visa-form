const languageToggle = document.querySelector('.language-toggle');

languageToggle.addEventListener('click', () => {
    if (document.documentElement.lang === "ar") {
        document.documentElement.lang = "en";
        alert("Language switched to English");
    } else {
        document.documentElement.lang = "ar";
        alert("تم تغيير اللغة إلى العربية");
    }
});
