const buttons = document.querySelectorAll('button');
const resetBtn = document.getElementById('reset');
let bill = document.getElementById('bill');
let people = document.getElementById('people');
const customBtn = document.getElementById('custom-btn');
const tip = document.getElementById('tip');
const total = document.getElementById('total');
const peopleError = document.getElementById('people-error');



buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();

    // Toggle active button
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    customBtn.value = '';
    let z = button.value;
    let billValue = bill.value;
    let numOfPeople = people.value;

    // Check if people input is not empty ..if empty display an error message

    if (numOfPeople == 0) {
      peopleError.textContent = "Can't be zero";
      document.querySelector('.people').style.border = '1px red solid';
    } else {
      let v1 = (billValue / numOfPeople)
      let v2 = (z / 100) * v1
      let v3 = v2 + v1

      tip.textContent = `${v2.toFixed(2)}`;
      total.textContent = `${v3.toFixed(2)}`;
    }
  })
});

customBtn.addEventListener('input', () => {
  buttons.forEach(button => {
    button.classList.remove('active');

    let customInput = customBtn.value;
    let billValue = bill.value;
    let numOfPeople = people.value;

    // Check if people input is not empty ..if empty display an error message

    if (numOfPeople == 0) {
      peopleError.textContent = "Can't be zero";
      document.querySelector('.people').style.border = '1px red solid';
    } else {
      let v1 = (billValue / numOfPeople)
      let v2 = (customInput / 100) * v1
      let v3 = v2 + v1

      tip.textContent = `${v2.toFixed(2)}`;
      total.textContent = `${v3.toFixed(2)}`;
    }
  });
})


resetBtn.addEventListener('click', () => {
  tip.textContent = '0.00';
  total.textContent = '0.00';
  buttons.forEach(btn => {
    btn.classList.remove('active');
  });
  peopleError.textContent = "";
  document.querySelector('.people').style.border = '';
})


// The Logic
// Bill divided by 5 = sum per person
// Then the percentage of the sum per person
// tip amount per per person is the percentage of the sum per person
// Add the percentage to the sum per person
// Total per person is sum per person + tip amount