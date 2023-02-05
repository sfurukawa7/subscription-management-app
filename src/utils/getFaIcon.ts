import {
  findIconDefinition,
  IconLookup,
  IconName,
  IconPrefix,
} from "@fortawesome/fontawesome-svg-core";

export const getFontAwesomeIcon = (prefix: IconPrefix, iconName: IconName) => {
  const iconLookup: IconLookup = { prefix: prefix, iconName: iconName };

  return findIconDefinition(iconLookup);
};
