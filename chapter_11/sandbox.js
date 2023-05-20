// dates & times
// call the constructor
const now = new Date();

console.log(now);
console.log(typeof now);

// year, months, day, times
console.log('getFullYear', now.getFullYear());
console.log('getMonth', now.getMonth());
console.log('getDate', now.getDate());
console.log('getDay', now.getDay());
console.log('getHours', now.getHours());
console.log('getMinutes', now.getMinutes());
console.log('getSeconds', now.getSeconds());

// timestamp milliseconds
console.log('timestamp:', now.getTime());

// date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());

const before = new Date('May 20 2023 16:55:40');
const present = new Date();

console.log(present.getTime(), before.getTime());
const diff = present.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(mins, hours, days);

// measure time
console.log(`the blog was written ${days} ago.`);

// converting timestamps into date object
const timestamp = 1675938474990;
console.log(new Date(timestamp));

