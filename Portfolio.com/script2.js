// After page refreshing goto top of page
window.scrollTo(0, 0);

const count1 = document.querySelectorAll(".CounterNumber");
const duration = 3000; // in milliseconds
const totalCount1 = 20;
const totalCount2 = 20;
const totalCount3 = 10;
const intervalTime1 = duration / totalCount1;
const intervalTime2 = duration / totalCount2;
const intervalTime3 = duration / totalCount3;
let countValue1 = 0;
let countValue2 = 0;
let countValue3 = 0;

const updateCount1 = () => {
  countValue1++;
  count1[0].innerHTML = `${countValue1}+`;

  if (countValue1 >= totalCount1) {
    clearInterval(intervalId1);
  }
};
const updateCount2 = () => {
  countValue2++;
  count1[1].innerHTML = `${countValue2}+`;
  if (countValue2 >= totalCount2) {
    clearInterval(intervalId2);
  }
};
const updateCount3 = () => {
  countValue3++;
  count1[2].innerHTML = `${countValue3}+`;
  if (countValue3 >= totalCount3) {
    clearInterval(intervalId3);
  }
};
intervalId1 = setInterval(updateCount1, intervalTime1);
intervalId2 = setInterval(updateCount2, intervalTime2);
intervalId3 = setInterval(updateCount3, intervalTime3);

// document.querySelector("form").addEventListener("submit", function (event) {
//   event.preventDefault();

//   // Reset the form fields.
//   var inputs = document.querySelectorAll("input, textarea");
//   for (var i = 0; i < inputs.length; i++) {
//     inputs[i].value = "";
//   }
// });
