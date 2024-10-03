# TourMate

TourMate is a modern travel booking web application built with Next.js, offering users the ability to explore and book various tour packages. The app is designed with a sleek interface, optimized performance, and seamless user experience, leveraging technologies like TailwindCSS, Mantine UI, and TypeScript.

## Features

-   **Explore Tour Packages**: Browse through a variety of tour packages, each with details like pricing, duration, and customer ratings.
-   **Responsive Design**: Optimized for both mobile and desktop experiences.
-   **Dynamic Routing**: Each tour has its own detailed page for more in-depth information.
-   **User-friendly Interface**: Built using Mantine UI for a polished, intuitive design.

---

## Project Setup

### Prerequisites

-   **Node.js** (version 18 or later)
-   **npm** or other compatible package manager for package management

### Installation

#### Step 1: Clone the Repository

```bash
git clone https://github.com/hrmasss/tour-mate.git
cd tour-mate
```

#### Step 2: Install Dependencies

```bash
npm install
```

#### Step 3: Start the Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser to see the app.

---

## Directory Structure

```
tour-mate/
│
├── public/                         # Public assets like favicon
│   └── favicon.svg
├── src/
│   ├── app/                        # Next.js app routes
│   │   ├── layout.tsx              # Global layout for all pages
│   │   ├── page.tsx                # Main landing page
│   │   └── ...                     # Other routes
│   ├── components/                 # Reusable UI components
│   ├── lib/                        # Utility functions and static data
│   ├── styles/                     # Global and module-based CSS
│       ├── globals.css             # Global CSS
│       └── modules/
├── .gitignore                       # Git ignore rules
├── next.config.mjs                  # Next.js configuration
├── package.json                     # Node.js dependencies and scripts
├── postcss.config.mjs               # PostCSS configuration
├── tailwind.config.ts               # TailwindCSS configuration
├── tsconfig.json                    # TypeScript configuration
└── README.md                        # Project documentation
```

## Routes

-   **`/`**: Home page that introduces the platform.
-   **`/tours`**: Displays a list of all available tours.
-   **`/tours/[slug]`**: Dynamic route that shows detailed information for a specific tour.
-   **`/about`**: Information about the platform.
-   **`/contact`**: Contact page for inquiries and support.

## Available Scripts

-   **`npm run dev`**: Runs the app in development mode.
-   **`npm run build`**: Builds the app for production.
-   **`npm run start`**: Starts the production server.
-   **`npm run lint`**: Lints the code using ESLint.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
