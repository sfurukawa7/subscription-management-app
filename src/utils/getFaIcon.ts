import {
  findIconDefinition,
  IconLookup,
  IconName,
  IconPrefix,
} from "@fortawesome/fontawesome-svg-core";

export const getFontAwesomeIcon = (iconPrefix: IconPrefix, iconName: IconName) => {
  const iconLookup: IconLookup = { prefix: iconPrefix, iconName: iconName };

  return findIconDefinition(iconLookup);
};
