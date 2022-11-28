export const dateFormatting = (date: Date): string => {
  const newFormatDate = String(
    date.getDate() +
    '/' +
    (date.getMonth() + 1) +
    '/' +
    date.getFullYear() +
    ' ' +
    date.getHours() +
    ':' +
    date.getMinutes()
  );

  return newFormatDate;
};
