//contact us page for the form
//alert message
function emejen() {
    alert("Your message was submitted successfully! Thank you for your feedback");
}
//calender
var currentDate = new Date();
var currentMonth = currentDate.getMonth();
var currentYear = currentDate.getFullYear();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function showCalendar(month, year) {
    var firstDay = new Date(year, month, 1);
    var lastDay = new Date(year, month + 1, 0);
    var days = document.getElementById('days');
    var monthYear = document.getElementById('month-year');
    var today = new Date();

    days.innerHTML = '';

    for (var i = 0; i < firstDay.getDay(); i++) {
        var day = document.createElement('div');
        day.className = 'day other-month';
        days.appendChild(day);
    }

    for (var i = 1; i <= lastDay.getDate(); i++) {
        var day = document.createElement('div');
        day.className = 'day';
        day.innerHTML = i;

        if (year === today.getFullYear() && month === today.getMonth() && i === today.getDate()) {
            day.classList.add('today');
        }

        days.appendChild(day);
    }

    monthYear.innerHTML = months[month] + ' ' + year;
}

function prevMonth() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (
        currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function nextMonth() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

showCalendar(currentMonth, currentYear);