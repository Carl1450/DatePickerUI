document.addEventListener('DOMContentLoaded', function() {
    const daysContainer = document.getElementById('calendar-days');
    const monthLabel = document.querySelector('.month-label').textContent.trim();
    const [monthName, yearStr] = monthLabel.split(' ');
    const year = Number(yearStr)
    const monthIndex = new Date(`${monthName} 1, ${year}`).getMonth();

    const firstOfMonth = new Date(year, monthIndex, 1);
    const startDay = firstOfMonth.getDate();
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

    for (let i = 0; i < 35; i++) {
        const span = document.createElement('span');
        span.className = 'day';
        const dayNumber = i - startDay + 1;
        if (dayNumber > 0 && dayNumber <= daysInMonth) {
            span.textContent = String(dayNumber);
        } else {
            span.textContent = '';
            span.classList.add('empty');
        }
        daysContainer.appendChild(span);
    }
});