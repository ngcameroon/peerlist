/**
 * Font Awesome suit of utility functions
 */

/**
 * Create a fontawesome string representation for solid icons
 * @param icon the name of the fontawesome icon
 * @return returns the combine string representation of the fontawesome icon
 */
export const faIcon = (icon: string): string => `fa-solid fa-${icon}`;

/**
 * Create a fontawesome string representation for brand icons
 * @param icon the name of the fontawesome icon
 * @return returns the combine string representation of the fontawesome icon
 */
export const faBrandIcon = (icon: string): string => `fa-brands fa-${icon}`;