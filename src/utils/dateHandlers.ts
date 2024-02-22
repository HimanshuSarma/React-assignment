const getFormattedDate: Function = (timestamp: number): string => {
  const date = new Date(timestamp);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};

const getHoursIn12HourFormat: Function = (hours: number): string => {
  console.log('hours', hours);
  if (hours === 0) {
    return `12AM`;
  } else if (hours < 12) {
    return `${hours}AM`;
  } else if (hours === 12) {
    return `12PM`;
  } else {
    return `${hours - 12}PM`;
  }
}

export { getFormattedDate, getHoursIn12HourFormat };