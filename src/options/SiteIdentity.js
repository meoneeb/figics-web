export const SiteName = "Figics";


export const SiteLogoVariants = {
  Default: { href: "/logo/logo.svg" },
  White: { href: "/logo/logo-white.svg" },
  Text: { href: "/logo/logo-text.svg" },
  TextWhite: { href: "/logo/logo-text-white.svg" },
};

export const SiteLogo = (type = "Default") => {
  return SiteLogoVariants[type]
    ? SiteLogoVariants[type].href
    : SiteLogoVariants.Default.href;
};
