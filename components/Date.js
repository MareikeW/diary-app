var date = new Date();
var entryDayAndTime = `${date.getDate()}.${date.getMonth()+ 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
export { entryDayAndTime };