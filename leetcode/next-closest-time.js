
/* 
Given a time represented in the format "HH:MM", form the next closest time by reusing the current digits. There is no limit on how many times a digit can be reused.

You may assume the given input string is always valid. For example, "01:34", "12:09" are all valid. "1:34", "12:9" are all invalid.

Example 1:

Input: "19:34"
Output: "19:39"
Explanation: The next closest time choosing from digits 1, 9, 3, 4, is 19:39, which occurs 5 minutes later.  It is not 19:33, because this occurs 23 hours and 59 minutes later.
Example 2:

Input: "23:59"
Output: "22:22"
Explanation: The next closest time choosing from digits 2, 3, 5, 9, is 22:22. It may be assumed that the returned time is next day's time since it is smaller than the input time numerically.
 */

const nextClosestTime = (time) => {
  // determine available digits
  const digitsAvailable = [];
  let have0 = false;
  for (const char of time) {
    if (!isNaN(char)) {
      digitsAvailable.push(parseInt(char, 10));
      if (parseInt(char, 10) === 0) have0 = true;
    }
  }
  // get the given hour, minute as integer
  const hour = (digitsAvailable[0] * 10) + digitsAvailable[1];
  const minute = (digitsAvailable[2] * 10) + digitsAvailable[3];
  // build arrays of possible hours and possible minutes, concatenated with a copy of themselves
  let possibleHours = [], possibleMinutes = [];
  // loop through all hours in a day
  for (let n = have0 ? 0 : 11; n < 59; n += 1) {
    // check if that time can be constructed with our digits and if so, add to relevant array(s)
    if (digitsAvailable.includes(Math.floor(n / 10)) && digitsAvailable.includes(n % 10)) {
      if (n < 24) possibleHours.push(n);
      possibleMinutes.push(n);
    }
  }
  possibleHours = possibleHours.concat(possibleHours);
  possibleMinutes = possibleMinutes.concat(possibleMinutes);
  // find minutes first so we can track if we must advance the hour
  let hourFlipped = false;
  // find the index of the given minute in the array, and assign the next value as the best minute
  const bestMinute = possibleMinutes[possibleMinutes.indexOf(minute) + 1];
  if (bestMinute < minute) hourFlipped = true;
  const bestHour = hourFlipped ? possibleHours[possibleHours.indexOf(hour) + 1] : hour;
  // convert that hour:minute to the proper string format (add 0 up front if less than 10)
  let timeString = bestHour < 10 ? '0' : '';
  timeString += bestHour.toString() + ':';
  if (bestMinute < 10) timeString += '0';
  timeString += bestMinute.toString();
  return timeString;
};

nextClosestTime("20:48");