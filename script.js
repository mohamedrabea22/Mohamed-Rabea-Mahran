/* ==========================================
   1. CUSTOM ANIMATED CURSOR
   ========================================== */
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // الماوس النقطة الصغيرة يتتبع بسرعة مباشرة
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // الدائرة الخارجيّة تتتبع بمرونة وانسيابية (Smooth Lag Effect)
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// تكبير الدائرة عند التأشير على الروابط والأزرار
const hoverElements = document.querySelectorAll('a, button, .control-btn, input, textarea, .project-card, .service-card');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.8)';
        cursorOutline.style.backgroundColor = 'rgba(0, 242, 254, 0.1)';
        cursorOutline.style.borderColor = 'var(--cyan)';
    });
    el.addEventListener('mouseleave', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorOutline.style.backgroundColor = 'transparent';
        cursorOutline.style.borderColor = 'rgba(0, 242, 254, 0.5)';
    });
});


/* ==========================================
   2. PARTICLES CANVAS BACKGROUND
   ========================================== */
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

let particlesArray = [];
const numberOfParticles = 45;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    draw() {
        ctx.fillStyle = 'rgba(0, 242, 254, 0.3)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particlesArray = [];
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}
initParticles();

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animateParticles);
}
animateParticles();


/* ==========================================
   3. TRANSLATIONS DICTIONARY (AR / EN)
   ========================================== */
const translations = {
    ar: {
        doc_title: "محمد ربيع مهران | مطوّر واجهات أماميّة - Frontend Developer",
        nav_home: "الرئيسية",
        nav_about: "عنّي",
        nav_services: "الخدمات",
        nav_skills: "المهارات",
        nav_projects: "المشاريع",
        nav_contact: "تواصل معي",
        hero_badge: "متاح للمشاريع والفرص البرمجية الجديدة",
        hero_title: `أهلاً بك، أنا <br><span class="text-gradient">محمد ربيع مهران</span>`,
        hero_desc: "مطوّر واجهات أماميّة (Frontend Developer) أحوّل الأفكار والتصاميم المبتكرة إلى تجارب مستخدم حية، تفاعلية، وسريعة للغاية.",
        hero_btn_projects: "معاينة المشاريع",
        hero_btn_contact: "تواصل معي",
        hero_avatar_role: "Frontend Engineer",
        code_name: "'محمد ربيع مهران'",
        about_title: "نبذة عنّي",
        about_desc: "أنا مطور واجهة المستخدم (Front-End Developer)، وأكرس جهودي لإنشاء مواقع ويب بسيطة ومتجاوبة وسهلة الاستخدام. أتمتع بخبرة واسعة في لغات HTML وCSS وJavaScript، بالإضافة إلى الممارسات الحديثة في مجال واجهات المستخدم. أنا شغوف بتحويل الأفكار إلى واجهات تفاعلية حقيقية، وأحرص على التعلم المستمر للتقنيات الجديدة من أجل تحسين عملي. وأسعى إلى بناء تجارب رقمية تجمع بين الأداء العالي وسهولة الوصول والتصميم العصري.",
        stat_projects: "مشروع مكتمل",
        stat_years: "سنوات خبرة",
        stat_commit: "التزام بالدقة والمواعيد",
        services_title: "الخدمات والإمكانيات",
        service_1_title: "تطوير الواجهات الأمامية",
        service_1_desc: "بناء واجهات مستخدم تفاعلية باستخدام HTML5 وCSS3 وJavaScript وأحدث أطر العمل لكود نظيف ومنظم.",
        service_2_title: "التصميم والتجاوب الكامل",
        service_2_desc: "ضمان ظهور موقعك بشكل متناسق ومبهر على جميع الأجهزة الهواتف الذكية والتابلت والشاشات الكبيرة.",
        service_3_title: "الأنيميشن والتفاعلات الحية",
        service_3_desc: "إضافة حركات ناعمة وتأثيرات بصرية تفاعلية تمنح موقعك هوية مميزة وجذابة.",
        service_4_title: "تحسين الأداء والسرعة",
        service_4_desc: "تحسين كود الموقع وضغط الملفات للحصول على أعلى تقييمات في أداء وسرعة استجابة الصفحات.",
        skills_title: "المهارات والتقنيات",
        projects_title: "أحدث مشاريعي",
        proj_1_title: "موقع بيطري",
        proj_1_desc: "موقع احترافي لعيادة بيطرية يعرض الخدمات والخبرات بطريقة عصرية.",
        proj_2_title: "موقع القرآن الكريم",
        proj_2_desc: "موقع إلكتروني للقرآن الكريم يوفر تجربة سهلة لقراءة السور والتنقل بينها بتصميم حديث ومتجاوب.",
        proj_3_title: "متجر قهوة",
        proj_3_desc: "موقع احترافي لمقهى بتصميم عصري ومتجاوب يعرض المنتجات والخدمات بأسلوب جذاب.",
        proj_4_title: "متجر تجريبي",
        proj_4_desc: "متجر إلكتروني تجريبي بواجهة حديثة وتصميم متجاوب يوفر تجربة تسوق سلسة وسهلة.",
        proj_5_title: "مولد رمز الاستجابة السريعة",
        proj_5_desc: "مولد أكواد QR سريع وسهل الاستخدام يتيح إنشاء رموز قابلة للمشاركة في ثوانٍ.",
        proj_6_title: "ماسح رمز الاستجابة السريعة",
        proj_6_desc: "ماسح أكواد QR يتيح قراءة الرموز بسرعة باستخدام كاميرا الجهاز بواجهة سهلة الاستخدام.",
        proj_7_title: "الآلة الحاسبة",
        proj_7_desc: "آلة حاسبة تفاعلية توفر العمليات الحسابية الأساسية بواجهة بسيطة وسريعة الاستجابة.",
        proj_8_title: "تنفيذ المهام",
        proj_8_desc: "تطبيق لإدارة المهام اليومية يساعد على تنظيم الأعمال وتتبع الإنجاز بواجهة بسيطة ومتجاوبة.",
        proj_9_title: "لعبة «الجلاد»",
        proj_9_desc: "لعبة Hangman تفاعلية تعتمد على تخمين الكلمات بتصميم ممتع ومتجاوب.",
        proj_10_title: "لعبة الثعبان",
        proj_10_desc: "لعبة Snake الكلاسيكية بتصميم حديث وتحكم سلس وتجربة لعب ممتعة.",
        proj_11_title: "تطبيق الطقس",
        proj_11_desc: "تطبيق طقس تفاعلي يعرض الأحوال الجوية الحالية والتوقعات بواجهة حديثة وسهلة الاستخدام.",
        proj_demo: "المعاينة الحية",
        proj_code: "الكود",
        contact_title: "تواصل معي",
        contact_subtitle: "هل لديك فكرة أو مشروع جديد؟",
        contact_desc: "أنا جاهز لبناء واجهتك القادمة أو الانضمام لمشروعك. يسعدني دائماً تواصلك ومناقشة التفاصيل.",
        contact_name: "محمد ربيع مهران",
        contact_email: "med886418@gmail.com",
        contact_location: "المنيا، مصر",
        contact_call: "01122624866",
        input_name: "الاسم الكريم",
        input_email: "البريد الإلكتروني",
        input_msg: "تفاصيل رسالتك أو مشروعك...",
        btn_send: "إرسال الرسالة",
        footer_text: "تم التصميم والتطوير بواسطة"
    },
    en: {
        doc_title: "Mohamed Rabea Mehran | Frontend Developer",
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact Me",
        hero_badge: "Available for new projects & opportunities",
        hero_title: `Welcome, I'm <br><span class="text-gradient">Mohamed Rabea Mahran</span>`,
        hero_desc: "Frontend Developer turning innovative ideas and designs into live, interactive, and high-performance user experiences.",
        hero_btn_projects: "View Projects",
        hero_btn_contact: "Contact Me",
        hero_avatar_role: "Frontend Engineer",
        code_name: "'Mohamed Rabea Mahran'",
        about_title: "About Me",
        about_desc: "I'm a Front-End Developer dedicated to creating clean, responsive, and user-friendly websites. I have strong experience with HTML, CSS, JavaScript, and modern UI practices. I’m passionate about turning ideas into real interactive interfaces and continuously learning new technologies to improve my work. I aim to build digital experiences that combine performance, accessibility, and modern design.",
        stat_projects: "Completed Projects",
        stat_years: "Years Experience",
        stat_commit: "On-Time Delivery",
        services_title: "Services & Capabilities",
        service_1_title: "Frontend Development",
        service_1_desc: "Building interactive user interfaces using HTML5, CSS3, JavaScript, and modern frameworks for clean, scalable code.",
        service_2_title: "Responsive Web Design",
        service_2_desc: "Ensuring your website looks stunning and renders perfectly on smartphones, tablets, and desktops.",
        service_3_title: "Animations & Micro-Interactions",
        service_3_desc: "Adding fluid motions and interactive visual effects to give your digital product a unique modern feel.",
        service_4_title: "Performance Optimization",
        service_4_desc: "Optimizing code and assets to achieve top speed benchmarks and optimal search engine responsiveness.",
        skills_title: "Skills & Technologies",
        projects_title: "Featured Projects",
        proj_1_title: "Veterinary Website",
        proj_1_desc: "A professional website for a veterinary clinic that showcases its services and expertise in a modern way.",
        proj_2_title: "Quran Kareem Website",
        proj_2_desc: "A website for the Quran Kareem that offers an easy way to read and navigate through the surahs, featuring a modern, responsive design.",
        proj_3_title: "Coffee Shop",
        proj_3_desc: "A professional website for a coffee shop with a modern, responsive design that showcases products and services in an appealing way.",
        proj_4_title: "Test Store",
        proj_4_desc: "A prototype e-commerce store with a modern interface and responsive design that provides a smooth and easy shopping experience.",
        proj_5_title: "QR Code Generator",
        proj_5_desc: "A fast and easy-to-use QR code generator that lets you create shareable codes in seconds.",
        proj_6_title: "QR Code Scanner",
        proj_6_desc: "A QR code scanner that lets you quickly scan codes using your device's camera, with an easy-to-use interface.",
        proj_7_title: "Calculator",
        proj_7_desc: "An interactive calculator that provides basic arithmetic operations with a simple, responsive interface.",
        proj_8_title: "Do Tasks",
        proj_8_desc: "An app for managing daily tasks that helps you organize your work and track your progress with a simple, responsive interface.",
        proj_9_title: "Hangman Game",
        proj_9_desc: "An interactive Hangman game where you guess words, featuring a fun and responsive design.",
        proj_10_title: "Snake Game",
        proj_10_desc: "The classic Snake game with a modern design, smooth controls, and an enjoyable gaming experience.",
        proj_11_title: "Weather Application",
        proj_11_desc: "An interactive weather app that displays current weather conditions and forecasts with a modern, user-friendly interface.",
        proj_demo: "Live Demo",
        proj_code: "Code",
        contact_title: "Contact Me",
        contact_subtitle: "Have a project or idea in mind?",
        contact_desc: "I'm ready to build your next web app or join your team. Feel free to reach out anytime!",
        contact_name: "Mohamed Rabea Mehran",
        contact_email: "med886418@gmail.com",
        contact_location: "Minya, Egypt",
        contact_call: "01122624866",
        input_name: "Your Name",
        input_email: "Your Email",
        input_msg: "Project details or message...",
        btn_send: "Send Message",
        footer_text: "Designed & Developed by"
    }
};


/* ==========================================
   4. DYNAMIC LANGUAGE SWITCH ENGINE
   ========================================== */
const langToggleBtn = document.getElementById('langToggle');
const langText = document.getElementById('langText');

let currentLang = localStorage.getItem('lang') || 'ar';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
    
    langText.textContent = lang === 'ar' ? 'EN' : 'عربي';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
}

setLanguage(currentLang);

langToggleBtn.addEventListener('click', () => {
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
});


/* ==========================================
   5. THEME TOGGLE (Dark / Light)
   ========================================== */
const themeToggleBtn = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    
    if (isLight) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'dark');
    }
});


/* ==========================================
   6. MOBILE MENU TOGGLE
   ========================================== */
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-link, .nav-links .btn-glow').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});


/* ==========================================
   7. TYPING EFFECT
   ========================================== */
const typingText = document.querySelector('.typing-text');
const phrases = ['Frontend Developer', 'Graphic Designer', 'UI/UX Enthusiast'];
let phraseIndex = 0, charIndex = 0, isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 90;

    if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}
document.addEventListener('DOMContentLoaded', type);


/* ==========================================
   8. SCROLL REVEAL ANIMATION
   ========================================== */
const revealElements = document.querySelectorAll('[data-reveal]');
const revealOnScroll = () => {
    revealElements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 80) {
            el.classList.add('revealed');
        }
    });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();