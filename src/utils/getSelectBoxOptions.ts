export const getFrequencyOptions = (locale: string | undefined) => {
  let options;
  switch (locale) {
    case "en":
      options = ["1 month", "1 year"];
      break;
    case "ja":
      options = ["1ヶ月", "1年"];
      break;
    default:
      options = ["1ヶ月", "1年"];
      break;
  }

  return options;
};
