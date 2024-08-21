document.querySelectorAll('.menu-bar div').forEach(item => {
    item.addEventListener('click', event => {
        // Get the class name of the clicked item
        const targetClass = item.className.split(' ')[0];

        // Determine the corresponding section class based on the clicked item
        let targetSectionClass;
        switch(targetClass) {
            case 'home5':
                targetSectionClass = 'home-child';
                break;
            case 'about4':
                targetSectionClass = 'about3';
                break;
            case 'skills4':
                targetSectionClass = 'skill';
                break;
            case 'my-work6':
                targetSectionClass = 'my-work3';
                break;
            case 'career6':
                targetSectionClass = 'career3';
                break;
            case 'education6':
                targetSectionClass = 'education3';
                break;  
            case 'contact6':
                targetSectionClass = 'contact3';
                break;                  
            // Add more cases for other menu items if needed
            default:
                targetSectionClass = null;
        }

        // If a target section is found, scroll to it smoothly
        if (targetSectionClass) {
            const targetSection = document.querySelector(`.${targetSectionClass}`);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

let currentIndex = 0;
const certificates = document.querySelectorAll('.certificate');

function showCertificate(index) {
    certificates.forEach((certificate, i) => {
        certificate.classList.remove('active');
        if (i === index) {
            certificate.classList.add('active');
        }
    });
}

function nextCertificate() {
    currentIndex = (currentIndex + 1) % certificates.length;
    showCertificate(currentIndex);
}

function prevCertificate() {
    currentIndex = (currentIndex - 1 + certificates.length) % certificates.length;
    console.log("Prev clicked: ",currentIndex);
    showCertificate(currentIndex);
}

// Initially show the first certificate
showCertificate(currentIndex);
