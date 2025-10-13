# Component Library — README

This project containerizes a **React Component Library** and its **Storybook** documentation using **Docker** and **NGINX**.
Both the React production build and the Storybook static build are served from a single container on **localhost:8083**.

---

## Project Overview

This project is a React-based **UI Component Library** built using **TypeScript** and **Styled Components**.
It includes reusable, responsive components designed for consistency and accessibility.

### Components Included

- Button
- Label
- Text
- Table (Header, Row, Cell, Footer)
- Dropdown
- Radio Button
- Image
- Hero Image
- Card

Each component includes the following files:
- `Component_name.tsx` — react component
- `Component_name.stories.tsx` — storybook documentation
- `Component_name.types.tsx` — typeScript definitions
- `Component_name.tests.tsx` — jest test file
- `index.ts` — export file

All components are:
- Responsive
- Built with Styled Components
- Have both default and disabled states
- Include Storybook controls for customization
- Include at least two tests (visibility and disabled color change)

---

## Component Styling

All components use **Styled Components** for styling.
This approach keeps CSS modular and scoped to each component, allowing styles to adapt to props dynamically.

npm install styled-components @types/styled-components

