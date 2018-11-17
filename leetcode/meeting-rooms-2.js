/**
 * Definition for an interval.
 */
function Interval(start, end) {
  this.start = start;
  this.end = end;
}

/**
 * @param {Interval[]} intervals
 * @return {number}
 */
/*eslint-disable*/
const minMeetingRooms = (intervals) => {
  if (!intervals.length) return 0;
  const rooms = [];
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  meetingLoop: for (let i = 0; i < intervals.length; i++) {
    const meeting = intervals[i];
    for (let r = 0; r < rooms.length; r++) {
      if (rooms[r] < meeting[0]) {
        rooms[r] = meeting[1];
        continue meetingLoop;
      }
    }
    rooms.push(meeting[1]);
  }
  return rooms.length;
};

const t1 = [[0,30],[5,10],[15,20]];

console.log(minMeetingRooms(t1));