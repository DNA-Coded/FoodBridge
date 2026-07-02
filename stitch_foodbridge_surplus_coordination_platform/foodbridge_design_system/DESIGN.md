---
name: FoodBridge Design System
colors:
  surface: '#f4fbf4'
  surface-dim: '#d4dcd5'
  surface-bright: '#f4fbf4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef6ee'
  surface-container: '#e8f0e9'
  surface-container-high: '#e3eae3'
  surface-container-highest: '#dde4dd'
  on-surface: '#161d19'
  on-surface-variant: '#3c4a42'
  inverse-surface: '#2b322d'
  inverse-on-surface: '#ebf3eb'
  outline: '#6c7a71'
  outline-variant: '#bbcabf'
  surface-tint: '#006c49'
  primary: '#006c49'
  on-primary: '#ffffff'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#4edea3'
  secondary: '#9d4300'
  on-secondary: '#ffffff'
  secondary-container: '#fd761a'
  on-secondary-container: '#5c2400'
  tertiary: '#005ac2'
  on-tertiary: '#ffffff'
  tertiary-container: '#71a1ff'
  on-tertiary-container: '#00367a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb690'
  on-secondary-fixed: '#341100'
  on-secondary-fixed-variant: '#783200'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#f4fbf4'
  on-background: '#161d19'
  surface-variant: '#dde4dd'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  title-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
---

## Brand & Style
The design system is engineered for an enterprise-grade surplus food coordination platform, balancing the urgency of logistics with the stability of a financial institution. The aesthetic is a fusion of high-performance utility (Linear) and sophisticated, approachable professionalism (Stripe).

The visual language prioritizes clarity and efficiency. It utilizes a **Modern Corporate** style characterized by hyper-clean layouts, high-contrast text against soft surfaces, and deliberate use of whitespace to reduce cognitive load during complex coordination tasks. The emotional response should be one of "calm reliability"—the user should feel that the platform is robust enough to handle critical food supply chains without unnecessary friction.

## Colors
The palette is rooted in a professional grayscale (Slate) to provide a neutral foundation for data-heavy dashboards. 

- **Primary (Emerald):** Used for primary actions, success states, and brand-critical touchpoints. It symbolizes growth and fresh food.
- **Secondary & Tertiary:** Used sparingly for category differentiation (e.g., different food types or logistics tiers).
- **Background vs. Surface:** The off-white background (#f9fafb) provides a subtle contrast to the pure white surface cards (#ffffff), creating a natural sense of depth without heavy shadows.
- **Contrast:** Ensure all text-on-background combinations maintain a minimum 4.5:1 ratio for accessibility, particularly for status badges and labels.

## Typography
The system uses Inter across all levels to maintain a cohesive, systematic feel. 

- **Headings:** Large headings use a semi-bold weight and negative letter-spacing to evoke the modern "Linear" look.
- **Body Text:** Optimized for readability in data-heavy environments. `body-md` is the workhorse for table data and dashboard descriptions.
- **Labels:** Used for small UI elements like badges, micro-copy, and chart axes.
- **Monospace:** Reserved for IDs, tracking numbers, or logistical codes to ensure character clarity.

## Layout & Spacing
The system follows a strict 4px/8px incremental grid. This ensures consistent rhythm across diverse components.

- **Grid:** A 12-column fluid grid is used for desktop layouts. On tablet (768px - 1024px), the grid shifts to 8 columns. On mobile, it collapses to a single-column stack with 16px side margins.
- **Sectioning:** Vertical spacing between major dashboard sections should use `2xl` (48px). Smaller component groups within a card should use `md` (16px).
- **Alignment:** All elements must snap to the 4px baseline.

## Elevation & Depth
This design system utilizes **Tonal Layers** combined with **Ambient Shadows** to create a sophisticated, flat-but-layered feel.

- **Level 0 (Background):** Slate-50. No shadow.
- **Level 1 (Cards/Surface):** White. Border: 1px solid Slate-200. Shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05).
- **Level 2 (Dropdowns/Popovers):** White. Border: 1px solid Slate-200. Shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1).
- **Level 3 (Modals):** White. Shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04).

Borders are the primary method of separation, while shadows are kept very soft and subtle to maintain the "Linear" aesthetic.

## Shapes
A consistent 12px (0.75rem) radius is applied to all primary containers to balance professional rigor with a modern, friendly touch.

- **Standard (12px):** Used for cards, buttons, input fields, and modals.
- **Small (6px):** Used for smaller nested elements like badges or checkboxes.
- **Pill:** Reserved exclusively for status indicators (e.g., "In Transit", "Delivered") to differentiate them from actionable buttons.

## Components
- **Sidebars:** High-contrast Slate-900 background with active states in Emerald Green. Navigation items should use `body-md` weight.
- **Top Navbar:** Pure white surface with a bottom border (Slate-200). Use breadcrumbs for deep navigation hierarchy.
- **Statistics Cards:** Feature a large `headline-lg` value, a `label-md` title, and a subtle Emerald (Success) or Red (Error) sparkline showing a 7-day trend.
- **Data Tables:** Use `body-md` for row text. Header rows in Slate-50 with `label-md` uppercase text. Include subtle hover states (Slate-50) for row interactivity.
- **Status Badges:** Subtle background tints with high-contrast text. (e.g., Success: Background #dcfce7, Text #166534).
- **Multi-step Forms:** Use a vertical or horizontal progress stepper with "Connector lines" in Slate-200. Completed steps should show an Emerald checkmark.
- **Empty States:** Use simplified, low-opacity Slate-300 icons with `title-md` text and a clear primary action button.
- **Skeleton Loaders:** Use a subtle Slate-100 to Slate-200 pulse animation, mirroring the shape of the actual content (12px roundedness).