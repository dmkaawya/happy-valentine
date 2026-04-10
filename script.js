// ===== DOCTOR DATA (JSON Array) =====
const doctors = [
    {
        id: 1,
        name: "Dr. James Wilson",
        nameSi: "ඩොක්ටර් ජේම්ස් විල්සන්",
        category: "physician",
        specialization: "Internal Medicine",
        specializationSi: "අභ්‍යන්තර වෛද්‍ය විද්‍යාව",
        image: "https://picsum.photos/seed/meddoc1/400/400.jpg",
        experience: "15 years",
        experienceSi: "වසර 15",
        available: "Mon - Fri",
        availableSi: "සඳු - සිකු"
    },
    {
        id: 2,
        name: "Dr. Sarah Chen",
        nameSi: "ඩොක්ටර් සාරා චෙන්",
        category: "physician",
        specialization: "General Medicine",
        specializationSi: "සාමාන්‍ය වෛද්‍ය විද්‍යාව",
        image: "https://picsum.photos/seed/meddoc2/400/400.jpg",
        experience: "10 years",
        experienceSi: "වසර 10",
        available: "Tue - Sat",
        availableSi: "අඟහ - සෙන"
    },
    {
        id: 3,
        name: "Dr. Michael Roberts",
        nameSi: "ඩොක්ටර් මයිකල් රොබට්ස්",
        category: "psychiatrist",
        specialization: "Clinical Psychiatry",
        specializationSi: "වෛද්‍ය මනෝ විද්‍යාව",
        image: "https://picsum.photos/seed/meddoc3/400/400.jpg",
        experience: "20 years",
        experienceSi: "වසර 20",
        available: "Mon - Thu",
        availableSi: "සඳු - බ්‍රහස්"
    },
    {
        id: 4,
        name: "Dr. Emily Parker",
        nameSi: "ඩොක්ටර් එමිලි පාකර්",
        category: "psychiatrist",
        specialization: "Child & Adolescent Psychiatry",
        specializationSi: "ළමා හා යෞවන මනෝ වෛද්‍ය විද්‍යාව",
        image: "https://picsum.photos/seed/meddoc4/400/400.jpg",
        experience: "12 years",
        experienceSi: "වසර 12",
        available: "Mon, Wed, Fri",
        availableSi: "සඳු, බදා, සිකු"
    },
    {
        id: 5,
        name: "Dr. David Kumar",
        nameSi: "ඩොක්ටර් ඩේවිඩ් කුමාර්",
        category: "neurologist",
        specialization: "Neurology & Neurophysiology",
        specializationSi: "ස්නායු විද්‍යාව සහ ස්නායු භෞත විද්‍යාව",
        image: "https://picsum.photos/seed/meddoc5/400/400.jpg",
        experience: "18 years",
        experienceSi: "වසර 18",
        available: "Mon - Fri",
        availableSi: "සඳු - සිකු"
    },
    {
        id: 6,
        name: "Dr. Anna Silva",
        nameSi: "ඩොක්ටර් ඇනා සිල්වා",
        category: "neurologist",
        specialization: "Stroke & Cerebrovascular Medicine",
        specializationSi: "ස්නායු ආබාධ හා ස්නායු රුධිර වෛද්‍ය විද්‍යාව",
        image: "https://picsum.photos/seed/meddoc6/400/400.jpg",
        experience: "14 years",
        experienceSi: "වසර 14",
        available: "Tue - Sat",
        availableSi: "අඟහ - සෙන"
    }
];

// ===== TRANSLATIONS =====
const translations = {
    en: {
        navHome: "Home",
        navDoctors: "Doctors",
        navContact: "Contact",
        heroBadge: "Trusted Healthcare Since 2010",
        heroTitle: "Your Health, Our Priority",
        heroDesc: "Providing world-class healthcare with compassion and expertise. Our team of specialists is dedicated to your well-being.",
        heroCta: "Book an Appointment",
        docTitle: "Our Specialist Doctors",
        docSubtitle: "Meet our experienced medical professionals dedicated to your care",
        filterAll: "All",
        filterPhysician: "Physician",
        filterPsychiatrist: "Psychiatrist",
        filterNeurologist: "Neurologist",
        experience: "Experience",
        available: "Available",
        bookNow: "Book Now",
        modalTitle: "Book an Appointment",
        nameLabel: "Your Name",
        phoneLabel: "Phone Number",
        doctorLabel: "Select Doctor",
        doctorPlaceholder: "Choose a doctor...",
        dateLabel: "Preferred Date",
        submitBtn: "Confirm Booking",
        cancelBtn: "Cancel",
        toastMsg: "Appointment booked successfully!",
        footerDesc: "Committed to providing exceptional healthcare services with a personal touch.",
        footerQuickLinks: "Quick Links",
        footerContact: "Contact Us",
        footerAddress: "123 Medical Center Drive, Colombo 07, Sri Lanka",
        footerRights: "All rights reserved."
    },
    si: {
        navHome: "මුල් පිටුව",
        navDoctors: "වෛද්‍යවරුන්",
        navContact: "සම්බන්ධ කරගන්න",
        heroBadge: "2010 සිට විශ්වාසදායක සෞඛ්‍ය සේවාව",
        heroTitle: "ඔබේ සෞඛ්‍යය, අපගේ ප්‍රමුඛතාවය",
        heroDesc: "කරුණාවෙන් සහ විශේෂඥ දැනුමෙන් ලෝක මට්ටමේ සෞඛ්‍ය සේවා සපයමු. අපගේ විශේෂඥ කණ්ඩායම ඔබේ යහපත සඳහා කැපවී සිටී.",
        heroCta: "ඇපොයින්ට්මන්ට් එකක් වෙන්කරන්න",
        docTitle: "අපගේ විශේෂඥ වෛද්‍යවරුන්",
        docSubtitle: "ඔබගේ ප්‍රතිකාර සඳහා කැපවූ අපගේ දක්ෂ වෛද්‍ය වෘත්තීයයන් මුණගැසෙන්න",
        filterAll: "සියල්ල",
        filterPhysician: "වෛද්‍යවරයා",
        filterPsychiatrist: "මනෝ වෛද්‍යවරයා",
        filterNeurologist: "ස්නායු විශේෂඥයා",
        experience: "අත්දැකීම",
        available: "ලබාගත හැක",
        bookNow: "දැන් වෙන්කරන්න",
        modalTitle: "ඇපොයින්ට්මන්ට් එකක් වෙන්කරන්න",
        nameLabel: "ඔබේ නම",
        phoneLabel: "දුරකථන අංකය",
        doctorLabel: "වෛද්‍යවරයා තෝරන්න",
        doctorPlaceholder: "වෛද්‍යවරයෙකු තෝරන්න...",
        dateLabel: "කැමති දිනය",
        submitBtn: "වෙන්කිරීම තහවුරු කරන්න",
        cancelBtn: "අවලංගු කරන්න",
        toastMsg: "ඇපොයින්ට්මන්ට් එක සාර්ථකව වෙන්කරන ලදි!",
        footerDesc: "පෞද්ගලික ස්පර්ශයක් සහිතව විශිෂ්ට සෞඛ්‍ය සේවා සපයන්න කැපවී සිටිමු.",
        footerQuickLinks: "ඉක්මන් සබැඳි",
        footerContact: "සම්බන්ධ කරගන්න",
        footerAddress: "123 වෛද්‍ය මධ්‍යස්ථාන මාර්ගය, කොළඹ 07, ශ්‍රී ලංකාව",
        footerRights: "සියලු හිමිකම් රක්ෂිතයි."
    }
};

// ===== STATE =====
let currentLang = localStorage.getItem('medicare_lang') || 'en';
let currentTheme = localStorage.getItem('medicare_theme') || 'light';
let currentFilter = 'all';

// ===== DOM ELEMENTS =====
const html = document.documentElement;
const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');
const currentLangSpan = document.getElementById('currentLang');
const langOptions = document.querySelectorAll('.lang-option');
const hamburger = document.getElementById('hamburger');
const navRight = document.getElementById('navRight');
const docGrid = document.getElementById('docGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalCancel = document.getElementById('modalCancel');
const appointmentForm = document.getElementById('appointmentForm');
const heroCtaBtn = document.getElementById('heroCtaBtn');
const doctorSelect = document.getElementById('doctorSelect');
const toastContainer = document.getElementById('toastContainer');

// ===== THEME MANAGEMENT =====
function applyTheme(theme) {
    currentTheme = theme;
    if (theme === 'dark') {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
    localStorage.setItem('medicare_theme', theme);
}

function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
}

themeToggle.addEventListener('click', toggleTheme);

// ===== LANGUAGE MANAGEMENT =====
function applyLanguage(lang) {
    currentLang = lang;
    html.setAttribute('lang', lang === 'si' ? 'si' : 'en');

    // Update current lang display
    currentLangSpan.textContent = lang === 'en' ? 'English' : 'සිංහල';

    // Update active state on dropdown options
    langOptions.forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });

    // Translate all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Re-render doctor cards with new language
    renderDoctors(currentFilter);

    // Re-populate doctor select in modal
    populateDoctorSelect();

    localStorage.setItem('medicare_lang', lang);
}

function toggleLangDropdown() {
    langDropdown.classList.toggle('open');
}

langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleLangDropdown();
});

langOptions.forEach(opt => {
    opt.addEventListener('click', () => {
        applyLanguage(opt.dataset.lang);
        langDropdown.classList.remove('open');
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!document.getElementById('langSwitcher').contains(e.target)) {
        langDropdown.classList.remove('open');
    }
});

// ===== HAMBURGER MENU =====
hamburger.addEventListener('click', () => {
    navRight.classList.toggle('open');
});

// Close mobile menu when clicking a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navRight.classList.remove('open');
    });
});

// ===== DOCTOR CARDS RENDERING =====
function getCategoryBadgeClass(category) {
    const map = {
        physician: 'badge-physician',
        psychiatrist: 'badge-psychiatrist',
        neurologist: 'badge-neurologist'
    };
    return map[category] || 'badge-physician';
}

function getCategoryLabel(category) {
    const map = {
        en: {
            physician: 'Physician',
            psychiatrist: 'Psychiatrist',
            neurologist: 'Neurologist'
        },
        si: {
            physician: 'වෛද්‍ය',
            psychiatrist: 'මනෝ වෛද්‍ය',
            neurologist: 'ස්නායු විශේෂඥ'
        }
    };
    return map[currentLang][category] || category;
}

function renderDoctors(filter) {
    currentFilter = filter;
    const filtered = filter === 'all'
        ? doctors
        : doctors.filter(doc => doc.category === filter);

    if (filtered.length === 0) {
        docGrid.innerHTML = `
            <div class="empty-state">
                <iconify-icon icon="lucide:user-x" width="48" height="48"></iconify-icon>
                <p>No doctors found for this category.</p>
            </div>
        `;
        return;
    }

    const t = translations[currentLang];

    docGrid.innerHTML = filtered.map((doc, index) => `
        <div class="doc-card" style="animation-delay: ${index * 0.08}s">
            <img class="doc-card-img" src="${doc.image}" alt="${currentLang === 'si' ? doc.nameSi : doc.name}" loading="lazy">
            <div class="doc-card-body">
                <div class="doc-card-top">
                    <h3 class="doc-card-name">${currentLang === 'si' ? doc.nameSi : doc.name}</h3>
                    <span class="doc-card-badge ${getCategoryBadgeClass(doc.category)}">${getCategoryLabel(doc.category)}</span>
                </div>
                <p class="doc-card-spec">${currentLang === 'si' ? doc.specializationSi : doc.specialization}</p>
                <div class="doc-card-meta">
                    <div class="doc-meta-item">
                        <iconify-icon icon="lucide:award" width="16" height="16"></iconify-icon>
                        <span>${t.experience}: ${currentLang === 'si' ? doc.experienceSi : doc.experience}</span>
                    </div>
                    <div class="doc-meta-item">
                        <iconify-icon icon="lucide:clock" width="16" height="16"></iconify-icon>
                        <span>${t.available}: ${currentLang === 'si' ? doc.availableSi : doc.available}</span>
                    </div>
                </div>
                <button class="doc-card-book" onclick="openModalWithDoctor(${doc.id})">
                    ${t.bookNow}
                </button>
            </div>
        </div>
    `).join('');
}

// ===== FILTER BUTTONS =====
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderDoctors(btn.dataset.filter);
    });
});

// ===== APPOINTMENT MODAL =====
function populateDoctorSelect() {
    const t = translations[currentLang];
    const placeholder = t.doctorPlaceholder;

    doctorSelect.innerHTML = `<option value="" disabled selected>${placeholder}</option>`;
    doctors.forEach(doc => {
        const name = currentLang === 'si' ? doc.nameSi : doc.name;
        const spec = currentLang === 'si' ? doc.specializationSi : doc.specialization;
        const option = document.createElement('option');
        option.value = doc.id;
        option.textContent = `${name} — ${spec}`;
        doctorSelect.appendChild(option);
    });
}

function openModal() {
    modalOverlay.classList.add('open');
    body.style.overflow = 'hidden';
    // Set min date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('appointmentDate').min = today;
}

function closeModal() {
    modalOverlay.classList.remove('open');
    body.style.overflow = '';
    appointmentForm.reset();
}

function openModalWithDoctor(doctorId) {
    openModal();
    doctorSelect.value = doctorId;
}

heroCtaBtn.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);
modalCancel.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
        closeModal();
    }
});

// ===== FORM SUBMISSION =====
appointmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const t = translations[currentLang];

    closeModal();
    showToast(t.toastMsg);
});

// ===== TOAST NOTIFICATION =====
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <iconify-icon icon="lucide:check-circle" width="20" height="20"></iconify-icon>
        <span>${message}</span>
    `;
    toastContainer.appendChild(toast);

    // Auto remove after 3.5 seconds
    setTimeout(() => {
        toast.classList.add('removing');
        toast.addEventListener('animationend', () => {
            toast.remove();
        });
    }, 3500);
}

// ===== INITIALIZATION =====
function init() {
    // Apply saved theme
    applyTheme(currentTheme);

    // Apply saved language
    applyLanguage(currentLang);

    // Render doctor cards
    renderDoctors('all');

    // Populate modal select
    populateDoctorSelect();
}

// Run on DOM ready
init();