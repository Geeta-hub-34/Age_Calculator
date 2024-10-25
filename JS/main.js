function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function age() {
    let d1 = document.getElementById('date').value;
    let m1 = document.getElementById('month').value;
    let y1 = document.getElementById('year').value;

    let date = new Date();
    let d2 = date.getDate();
    let m2 = 1 + date.getMonth();
    let y2 = date.getFullYear();
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (isLeapYear(y1)) {
        month[1] = 29; // Update February days to 29 if it's a leap year
    }

    let ageContainer = document.getElementById('ageContainer'); // Get the age container div

    if (d1 <= 0 || d1 > 31) {
        document.getElementById('age').innerHTML = 'Enter valid date';
        ageContainer.style.display = 'block';
    } else if (m1 <= 0 || m1 > 12) {
        document.getElementById('age').innerHTML = 'Enter valid month';
        ageContainer.style.display = 'block';
    } else if ((m1 == 2 && d1 > month[1]) || ((m1 == 4 || m1 == 6 || m1 == 9 || m1 == 11) && d1 > 30)) {
        document.getElementById('age').innerHTML = 'Enter valid date and month';
        ageContainer.style.display = 'block';
    } else if (y1 <= 0 || y1 > y2) {
        document.getElementById('age').innerHTML = 'Enter valid year';
        ageContainer.style.display = 'block';
    } else if ((y1 == y2 && m1 > m2) || (y1 == y2 && d1 > d2 && m1 == m2)) {
        document.getElementById('age').innerHTML = 'Enter valid month and date';
        ageContainer.style.display = 'block';
    } else {
        if (d1 > d2) {
            d2 = d2 + month[m2 - 1];
            m2 = m2 - 1;
        }

        if (m1 > m2) {
            m2 = m2 + 12;
            y2 = y2 - 1;
        }

        let d = d2 - d1;
        let m = m2 - m1;
        let y = y2 - y1;

        document.getElementById('age').innerHTML = 'Your Age is ' + y + ' Years ' + m + ' Months ' + d + ' Days';
        ageContainer.style.display = 'block'; // Show the right div with the result
    }
}
