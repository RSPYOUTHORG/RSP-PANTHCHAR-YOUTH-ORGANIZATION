// --- Smooth Scrolling for Navigation Links ---
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Stop default jump behavior

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Smooth scroll effect
        });
    });
});

// --- Dynamic Content Loading (Slogan, Mission, Contact) ---
// This makes it easy to update these texts without touching the HTML directly
document.addEventListener('DOMContentLoaded', () => {
    // Slogan for the hero section
    const heroSlogan = "युवा सशक्तीकरण र पाँचथरको उज्ज्वल भविष्यका लागि हाम्रो प्रतिबद्धता!";
    const heroSubtitle = "राष्ट्रिय स्वतन्त्र पार्टीको युवा संगठन, पाँचथरका युवाहरूको आवाज।";

    const heroH2 = document.querySelector('.hero h2');
    const heroP = document.querySelector('.hero p');
    if (heroH2) heroH2.textContent = heroSlogan;
    if (heroP) heroP.textContent = heroSubtitle;

    // About Us section details
    const aboutContent = `
        <p>राष्ट्रिय स्वतन्त्र युवा संघ पाँचथर युवा सशक्तीकरण, सामाजिक न्याय, र क्षेत्रको समग्र विकासका लागि प्रतिबद्ध छ। हामी पाँचथरका युवाहरूलाई संगठित गरी उनीहरूको आवाज बुलन्द गर्दै राष्ट्र निर्माणमा सक्रिय भूमिका खेल्ने लक्ष्य राख्छौं। हाम्रो मुख्य उद्देश्य युवाहरूमा सकारात्मक सोचको विकास, नेतृत्व क्षमताको अभिवृद्धि, र सामाजिक सेवाका लागि प्रेरित गर्नु हो।</p>
        <p>हामी विश्वास गर्छौं कि जब युवाहरू सक्षम र जागरुक हुन्छन्, तब मात्र समाजमा दिगो परिवर्तन सम्भव हुन्छ। विपत्तिमा परेकाहरूलाई सहयोग गर्न, स्थानीय समस्याहरूको समाधानमा सक्रिय हुन, र समाजमा सकारात्मक परिवर्तन ल्याउन हामी सधैं अग्रपंक्तिमा रहनेछौं।</p>
    `;
    const aboutSection = document.querySelector('#about .container');
    if (aboutSection) {
        // Find the existing paragraph and insert content after it, or append if none
        let existingP = aboutSection.querySelector('p');
        if (existingP) {
            existingP.insertAdjacentHTML('afterend', aboutContent);
        } else {
            aboutSection.innerHTML += aboutContent; // Append if no paragraphs exist
        }
    }

    // Activities section details
    const activitiesContent = `
        <ul>
            <li><strong>नेतृत्व विकास तालिम:</strong> युवाहरूलाई नेतृत्व क्षमता विकासका लागि विभिन्न तालिम तथा कार्यशालाहरू आयोजना गर्ने।</li>
            <li><strong>सामाजिक सेवा कार्यक्रम:</strong> रक्तदान, सरसफाइ अभियान, विपद् राहत जस्ता सामाजिक कार्यहरूमा सक्रिय सहभागिता।</li>
            <li><strong>शैक्षिक सहयोग:</strong> आर्थिक रूपमा कमजोर तथा जेहेनदार विद्यार्थीहरूलाई शैक्षिक सामग्री र छात्रवृत्तिको लागि पहल।</li>
            <li><strong>खेलकुद तथा सांस्कृतिक कार्यक्रम:</strong> युवाहरूलाई स्वस्थ जीवनशैली र रचनात्मकताका लागि खेलकुद तथा सांस्कृतिक गतिविधिहरूमा प्रोत्साहन।</li>
        </ul>
    `;
    const activitiesSection = document.querySelector('#activities .container');
    if (activitiesSection) {
        let existingP = activitiesSection.querySelector('p');
        if (existingP) {
            existingP.insertAdjacentHTML('afterend', activitiesContent);
        } else {
            activitiesSection.innerHTML += activitiesContent;
        }
    }

    // Contact section details
    const contactContent = `
        <p>हामीलाई निम्न ठेगानामा सम्पर्क गर्न सक्नुहुन्छ वा इमेल पठाउन सक्नुहुन्छ:</p>
        <p><strong>इमेल:</strong> <a href="mailto:rastriyaswatantrayubasangh@gmail.com">rastriyaswatantrayubasangh@gmail.com</a></p>
        <p><strong>ठेगाना:</strong> पाँचथर जिल्ला, नेपाल</p>
        <p>हामीसँग जोडिन र परिवर्तनको हिस्सा बन्न आजै हामीलाई सम्पर्क गर्नुहोस्!</p>
    `;
    const contactSection = document.querySelector('#contact .container');
    if (contactSection) {
        let existingP = contactSection.querySelector('p');
        if (existingP) {
            existingP.insertAdjacentHTML('afterend', contactContent);
        } else {
            contactSection.innerHTML += contactContent;
        }
    }

    // Handle CTA button click
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            alert('हामीसँग जोडिनु भएकोमा धन्यवाद! हामी चाँडै थप जानकारी प्रदान गर्नेछौं।');
            // You might want to scroll to the #contact section here instead
            // document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
        });
    }
});

// --- Scroll-to-Top Button ---
// Create the button element
const scrollTopBtn = document.createElement('button');
scrollTopBtn.id = 'scrollTopBtn';
scrollTopBtn.textContent = '↑';
document.body.appendChild(scrollTopBtn);

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Show after scrolling 300px
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Scroll to top when button is clicked
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});