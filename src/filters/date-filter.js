// Stolen from https://stackoverflow.com/a/31615643
const appendSuffix = n => {
  var s = ['th', 'st', 'nd', 'rd'],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

module.exports = function dateFilter(value) {
  const dateObject = new Date(value);

  const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  const day = dateObject.getDate();
  const dayWithPrefix = day > 9 ? day : `0${day}`;

  return `${dayWithPrefix}.${months[dateObject.getMonth()]}.${dateObject.getFullYear()}`;
};

