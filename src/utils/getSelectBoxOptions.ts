export const getFrequencyOptions = (locale: string | undefined) => {
  let options;
  switch (locale) {
    case "en":
      options = [
        { key: "1 month", value: "month" },
        { key: "1 year", value: "year" },
      ];
      break;
    case "ja":
      options = [
        { key: "1ヶ月", value: "month" },
        { key: "1年", value: "year" },
      ];
      break;
    default:
      options = [
        { key: "1ヶ月", value: "month" },
        { key: "1年", value: "year" },
      ];
      break;
  }

  return options;
};
