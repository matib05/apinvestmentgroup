let classes = [];
function highlightAndAddTotal(element) {
    let dollarAmountForSelectedClass = element.lastElementChild.textContent.trim();
    let amount = parseInt(dollarAmountForSelectedClass.substring(1, dollarAmountForSelectedClass.length));
    total = parseInt(document.getElementById('total').textContent);
    if (element.id === 'four-courses') {
        if (element.classList.contains('active')) {
            element.classList.remove('active');
            const index = classes.indexOf(element.id);
            if (index > -1) {
                classes.splice(index, 1);
            }
            if (total > 0) {
                total -= 250;
            }
        } else {
            element.classList.add('active');
            const index = classes.indexOf(element.id);
            if (index <= -1) {
                classes.push(element.id);
            }
            if (total < 500) {
                total += 250;
            }
        }
    } else if (element.id === 'I`rabul') {
        if (element.classList.contains('active')) {
            element.classList.remove('active');
            const index = classes.indexOf(element.id);
            if (index > -1) {
                classes.splice(index, 1);
            }
            if (total > 0) {
                total -= 50;
            }
        } else {
            element.classList.add('active');
            const index = classes.indexOf(element.id);
            if (index <= -1) {
                classes.push(element.id);
            }
            if (total < 500) {
                total += 50;
            }
        }
    } else {
        if (document.getElementById('Four-courses').classList.contains('active')) {
            alert('Please unselect Four Courses Bundle to unlock these classes');
        } else {
            if (element.classList.contains('active')) {
                element.classList.remove('active');
                const index = classes.indexOf(element.id);
                if (index > -1) {
                    classes.splice(index, 1);
                }
                if (total > 0) {
                    total -= 75;
                }
            } else {
                element.classList.add('active');
                const index = classes.indexOf(element.id);
                if (index <= -1) {
                    classes.push(element.id);
                }
                if (total < 500) {
                    total += 75;
                }
            }
        }
        
    }
    displayTotal(total);
    
}
function displayTotal() {
    document.getElementById('total').textContent = total
}

