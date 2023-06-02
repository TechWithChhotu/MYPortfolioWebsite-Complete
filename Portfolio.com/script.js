// After page refreshing goto top of page
window.scrollTo(0, 0);

// ================Change nav icon(xmark to bars)====================//
function ChangeIcon() {
  let Icon = document.querySelector(".fa-solid");
  if (Icon.className == "fa-solid fa-bars") {
    Icon.classList.replace("fa-bars", "fa-xmark");
  } else {
    Icon.classList.replace("fa-xmark", "fa-bars");
  }
}

// =========================Typing Animation===========================//
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

//================Counting=================

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
