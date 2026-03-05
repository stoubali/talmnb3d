const nameInput = document.getElementById('nameSearch');
const specialtyInput = document.getElementById('specialtySearch');
const searchBtn = document.getElementById('searchBtn');
const doctorCards = document.querySelectorAll('.project-card');

function highlightText(element, text) {
    const originalText = element.textContent;
    if (!text) {
        element.innerHTML = originalText; // Reset
        return;
    }
    const regex = new RegExp(`(${text})`, 'gi');
    element.innerHTML = originalText.replace(regex, '<span class="highlight">$1</span>');
}

function filterDoctors() {
    const nameFilter = nameInput.value.toLowerCase();
    const specialtyFilter = specialtyInput.value.toLowerCase();

    doctorCards.forEach(card => {
        const nameEl = card.querySelector('.project-title span');
        const specialtyEl = card.querySelector('.project-category');

        const nameText = nameEl.textContent.toLowerCase();
        const specialtyText = specialtyEl.textContent.toLowerCase();

        const nameMatch = !nameFilter || nameText.includes(nameFilter);
        const specialtyMatch = !specialtyFilter || specialtyText.includes(specialtyFilter);

        if (nameMatch && specialtyMatch) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }

        // Highlight matches
        highlightText(nameEl, nameFilter);
        highlightText(specialtyEl, specialtyFilter);
    });
}

searchBtn.addEventListener('click', filterDoctors);
nameInput.addEventListener('keyup', filterDoctors);
specialtyInput.addEventListener('keyup', filterDoctors);