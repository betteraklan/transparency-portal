/**
 * This portal's configuration: the only file a fork needs to edit.
 * What each field means: src/config.ts. Generate one with `npm run setup`;
 * check it against the live API with `npm run check`.
 *
 * The Province of Aklan, Region VI. One district engineering office,
 * "Aklan District Engineering Office", serves both legislative districts
 * (Tier B), so its budget is shown once, whole, and never split between
 * them. The place name brings in the lines of all four programs whose
 * title names Aklan: Central Office projects, farm-to-market roads,
 * health facilities and irrigation.
 */
import { defineConfig } from './src/config';

export default defineConfig({
  id: 'aklan-province',
  kind: 'province',
  name: 'Province of Aklan',
  shortName: 'Aklan',
  operator: { name: 'BetterAklan', url: 'https://betteraklan.org' },
  // The canonical URL of this deployment, for link previews.
  siteUrl: 'https://transparency.betteraklan.org',
  scope: {
    // The one office the FY2027 documents list for Aklan, named as published.
    offices: ['Aklan District Engineering Office'],
    places: [{ label: 'Aklan', region: 'VI' }],
    // Both legislative districts (RA 11917 split Aklan in two).
    districts: ['leg:aklan:1st', 'leg:aklan:2nd'],
    exclude: [],
  },
  reporting: { enabled: false },
});
