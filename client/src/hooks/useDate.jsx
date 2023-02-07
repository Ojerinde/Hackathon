// A function to format date based on location
const useDate = (data) => {
  if (!data) return;

  const now = new Date(data);
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "short",
  };
  // etting the browser location
  const locale = navigator.language;
  const formattedDate = new Intl.DateTimeFormat(locale, options).format(now);

  return formattedDate;
};
export default useDate;
