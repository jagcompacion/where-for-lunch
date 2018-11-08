export function getRandom(list) {
  if (!list || list.length === 0) return null;
  const rand = list[Math.floor(Math.random() * list.length)];
  return rand;
}

export function tConvert(time) {
  let newTime = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  if (newTime.length > 1) {
    newTime = newTime.slice(1);
    newTime[5] = +newTime[0] < 12 ? 'AM' : 'PM';
    newTime[0] = +newTime[0] % 12 || 12;
  }
  return newTime.join('');
}

export function insertStr(str, index, value) {
  return str.substr(0, index) + value + str.substr(index);
}
