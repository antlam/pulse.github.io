# Icons (Burrito-style)

This project uses an SVG icon set aligned with the [Burrito Design System – Icons](https://burrito-design-system.jane.qa/?path=/story/components-icons--reference). The sprite lives in **`assets/icons.svg`**.

## Using icons

Use the sprite with the `.icon` class and `<use href="...">`:

```html
<svg class="icon" width="24" height="24" aria-hidden="true">
  <use href="assets/icons.svg#icon-chevron-down"/>
</svg>
```

Sizes: add `.icon--sm` (16px), default 24px, or `.icon--lg` (32px). Icons inherit `currentColor`.

## Available icons

| ID | Category |
|----|----------|
| `icon-chevron-down`, `icon-chevron-up`, `icon-chevron-left`, `icon-chevron-right` | Navigation |
| `icon-arrow-left`, `icon-arrow-right`, `icon-external-link` | Arrows / links |
| `icon-plus`, `icon-minus`, `icon-close`, `icon-check`, `icon-edit`, `icon-trash`, `icon-download`, `icon-upload` | Actions |
| `icon-calendar`, `icon-chart`, `icon-chart-line`, `icon-dollar`, `icon-document`, `icon-image` | Content |
| `icon-user`, `icon-users`, `icon-settings`, `icon-bell`, `icon-search`, `icon-menu`, `icon-home`, `icon-inbox`, `icon-mail` | App / user |
| `icon-info`, `icon-warning`, `icon-success`, `icon-error`, `icon-question` | Status |
| `icon-clock`, `icon-timer` | Time |
| `icon-filter`, `icon-more-vertical`, `icon-more-horizontal`, `icon-link`, `icon-eye`, `icon-eye-off`, `icon-refresh`, `icon-print`, `icon-share`, `icon-heart`, `icon-star`, `icon-lock`, `icon-unlock` | Misc |

## Replacing with official Burrito icons

The Burrito Storybook page is JS-rendered, so the exact assets aren’t scraped here. To use the **official** icons from Burrito:

1. Export or copy the icon SVGs from [Burrito – Icons](https://burrito-design-system.jane.qa/?path=/story/components-icons--reference) (or from your design system package).
2. Build a single SVG sprite with each icon as a `<symbol id="icon-...">` (same pattern as `assets/icons.svg`).
3. Replace **`assets/icons.svg`** with that file. Keep the same `id` values where possible so existing `<use href="assets/icons.svg#icon-...">` references keep working.

If Burrito provides a different naming scheme, do a find-and-replace on the icon IDs in your HTML/CSS to match.
