

// class CountdownTimer {


// }

// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate:new Date('Sep 20, 2021'),
//   });
const refs = {
  clock: document.getElementById('timer-1'),
  days: document.querySelector('[data-value="days]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="hours"]'),
  secs: document.querySelector('[data-value="secs"]'),
};

 const targetDate = new Date('Sep 20, 2021')
 const currentTime = Date.now();
 const totalTimeLeft = currentTime - targetDate;
 console.log(totalTimeLeft)
  function getTimeComponents(totalTimeLeft){
    const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalTimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((totalTimeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((totalTimeLeft % (1000 * 60)) / 1000);
    return {days, hours, mins, secs}
  };
  console.log(getTimeComponents(totalTimeLeft));

  function updateClock() {
    var t = getTimeComponents(totalTimeLeft);
 
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
 
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
 
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
//   /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);

// // console.log(new Date('11.09.1988'));
// // console.log(Date.now());
// console.log(Date.parse('09.07.2021'));
// const date = new Date('09.07.2021');
// // console.log(date.getDay());
// // console.log(date.getDate());
// // console.log(date.getMonth());
// // console.log(date.getYear());
// const options = {
//   weekday: 'long',
//   year: 'numeric',
//   month: 'short',
//   day: 'numeric',
//   hour: '2-digit',
//   minute: '2-digit',
//   second: '2-digit',
// };
// console.log(date.toLocaleString('Uk-uk', options));
// console.log(date.toString());
// console.log(date.toDateString('Uk-uk', options));
// console.log(date.toTimeString());
// const currentDate = Date.now().toLocaleString('Uk-uk', options);
// console.log(targetDate);