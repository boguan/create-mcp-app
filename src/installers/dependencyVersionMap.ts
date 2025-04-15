/*
 * This maps the necessary packages to a version.
 * This improves performance significantly over fetching it from the npm registry.
 */
export const dependencyVersionMap = {
  "zod-to-json-schema": "^3.24.5",
} as const;
export type AvailableDependencies = keyof typeof dependencyVersionMap;
