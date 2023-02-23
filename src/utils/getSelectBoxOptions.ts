export const getDateOptions = (locale: string | undefined) => {
  let options;
  switch (locale) {
    case "en":
      options = [
        "1st",
        "2nd",
        "3rd",
        "4th",
        "5th",
        "6th",
        "7th",
        "8th",
        "9th",
        "10th",
        "11th",
        "12th",
        "13th",
        "14th",
        "15th",
        "16th",
        "17th",
        "18th",
        "19th",
        "20th",
        "21st",
        "22nd",
        "23rd",
        "24th",
        "25th",
        "26th",
        "27th",
        "28th",
        "29th",
        "30th",
        "31st",
      ];
      break;
    case "ja":
      options = Array.from(Array(31), (_, i) => `${i + 1}日`);
      break;
    default:
      options = Array.from(Array(31), (_, i) => `${i + 1}日`);
      break;
  }

  return options;
};

export const getFrequencyOptions = (locale: string | undefined) => {
  let options;
  switch (locale) {
    case "en":
      options = ["1 month", "3 months", "6 months", "1 year"];
      break;
    case "ja":
      options = ["1ヶ月", "3ヶ月", "6ヶ月", "1年"];
      break;
    default:
      options = ["1ヶ月", "3ヶ月", "6ヶ月", "1年"];
      break;
  }

  return options;
};
