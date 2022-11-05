export const dateFormatting = (date: Date): string => {
  const newFormatDate = String(
    date.getDate() +
      '/' +
      date.getMonth() +
      '/' +
      date.getFullYear() +
      ' ' +
      date.getHours() +
      ':' +
      date.getMinutes()
  );

  return newFormatDate;
};
