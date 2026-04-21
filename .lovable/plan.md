

## Goal
Give the yellow nav buttons ("Нови Казина", "ТОП 10", "Печалби") a thin white border for a more modern, visible look, and visually darken the button matching the currently active route.

## Visual changes

- **All nav buttons**: add a 1px white border (`border border-white`) matching the white label text. Keeps the existing yellow gradient background and Orbitron styling.
- **Active state**: when the button corresponds to the current route, darken it (e.g. apply a dark overlay / reduced brightness so the yellow becomes a deeper amber) and keep the white border for continuity. A subtle inner shadow will reinforce the "pressed" look.
- Applies to both desktop nav row and the mobile collapsible menu.

## How active state is determined

The nav buttons currently use `onClick` + `useNavigate`. We'll read the current path with `useLocation()` from `react-router-dom` and compare:

| Button | Active when path is |
|---|---|
| Нови Казина | `/novi-kazina` |
| ТОП 10 | `/top-10` |
| Печалби | (no route yet — never active) |

## Technical changes

**`src/components/CasinoLayout.tsx`**
- Import `useLocation` from `react-router-dom`.
- Compute `pathname` once inside the component.
- Add a small helper `navBtnClass(path)` that returns `"nav-btn border border-white"` plus, when `pathname === path`, an active modifier class (e.g. `"nav-btn-active"`).
- Apply the helper to both the desktop and mobile button sets.

**`src/index.css`** (where `.nav-btn` is defined)
- Add `border-color` to existing `.nav-btn` rule (or rely on Tailwind `border border-white` utility on the element — preferred, no CSS change needed for the border).
- Add a new `.nav-btn-active` rule that darkens the button:
  - `filter: brightness(0.7)` (or a darker gradient override)
  - `box-shadow: inset 0 2px 6px rgba(0,0,0,0.35)` for the pressed feel
  - Keep the white border visible.

## Scope
- Only the top navigation buttons in `CasinoLayout` are affected.
- No changes to casino cards, footer, or page content.
- Behavior on landing (`/`), `/novi-kazina`, and `/top-10` all benefit automatically.

