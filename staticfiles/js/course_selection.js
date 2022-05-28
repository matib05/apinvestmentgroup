let classes = [];
let total = '';
function highlightAndAddTotal(element) {
    let dollarAmountForSelectedClass = element.lastElementChild.textContent.trim();
    let amount = parseInt(dollarAmountForSelectedClass.substring(1, dollarAmountForSelectedClass.length));
    total = parseInt(document.getElementById('total').textContent);
    let areTheFourCoursesSelected = false;
    if (element.id === 'four-courses') {
        if (document.getElementById('Hiwar').classList.contains('active') ||
            document.getElementById('Lughah').classList.contains('active') ||
            document.getElementById('Nahw').classList.contains('active') ||
            document.getElementById('Qira`ah').classList.contains('active')) {
        } else {
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
        }
    } else if (element.id === 'I`rab') {
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
        if (document.getElementById('four-courses').classList.contains('active')) {
            $('#exampleModal').modal('show')
            $('.modal-body').html('Please deselect Four Courses Bundle to unlcok these courses')
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
    checkFourCourseBundle();
    displayTotal(total);
}
function displayTotal(total) {
    document.getElementById('total').textContent = total.toFixed(2)
}

function checkFourCourseBundle() {
     if (document.getElementById('Hiwar').classList.contains('active') &&
            document.getElementById('Lughah').classList.contains('active') &&
            document.getElementById('Nahw').classList.contains('active') &&
            document.getElementById('Qira`ah').classList.contains('active')) {
            $('#exampleModal').modal('show')
            $('.modal-body').html('If you wish to purchase all of these courses, please deselect them and click the Four Course Bundle instead to receive the discounted price.')
            areTheFourCoursesSelected = true;
     } else {
        areTheFourCoursesSelected = false;
     }
}

function goToCheckout() {
    if (null !== total ) { //&& classes.length > 0
        const csrftoken = document.getElementsByName('csrfmiddlewaretoken')[0].value;
        $.ajax({
            type: "POST",
            url: '/courses/',
            data: {
                csrfmiddlewaretoken: csrftoken,
                'total': total,
                'classes': classes
            },
            success: response => {
                $('body').html(response)
            },
            error: err => {
                console.log(err)
            }
        });
    } else {
        alert('Please select ')
    }
}

function highlightAndAddTotalForBeginnersCourse(element) {
    console.log('here');
    total = parseInt(document.getElementById('total').textContent);
    if (element.classList.contains('active')) {
        element.classList.remove('active');
        const index = classes.indexOf(element.id);
        if (index > -1) {
            classes.splice(index, 1);
        }
        if (total > 0) {
            total -= 150;
        }
    } else {
        element.classList.add('active');
        const index = classes.indexOf(element.id);
        if (index <= -1) {
            classes.push(element.id);
        }
        if (total <= 150) {
            total += 150;
        }
    }
    displayTotal(total);
}