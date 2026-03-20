# Motivation Flow ✨

A beautiful, modern quote app that inspires you with daily motivation. Discover random quotes, save your favorites, and build your personal collection of inspiration.

## Features

- **Random Quote Generator**: Fetch inspiring quotes from a public API with a single click
- **Like & Save**: Mark your favorite quotes to build a personal collection
- **Search Collection**: Search through your liked quotes by quote content or author name
- **Persistent Storage**: Your collection is saved to localStorage—it survives browser refreshes
- **Modern UI**: Glass-morphism design with smooth animations and gradient effects
- **Responsive**: Works seamlessly on desktop and mobile devices
- **Fast & Lightweight**: Built with React and Vite for optimal performance

## Tech Stack

- **React** — UI library
- **Vite** — Lightning-fast build tool
- **Tailwind CSS** — Utility-first styling
- **DummyJSON API** — Quote data source
- **localStorage** — Client-side data persistence

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Sarthaks-24/ReactProject1Term3.git
cd ReactProject1Term3
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

- **Get a Quote**: Click "Next" to fetch a new random quote
- **Like a Quote**: Click the heart icon to add the quote to your collection
- **View Collection**: Click the "Collection" button to see all your liked quotes
- **Search**: Use the search box in your collection to find quotes by content or author
- **Remove from Collection**: Hover over a liked quote and click the ❌ to remove it

## Project Structure

```
src/
├── components/
│   ├── QuoteCard.jsx       # Main quote display component
│   ├── LikedQuotes.jsx     # Collection view with search
│   └── LikedQuote.jsx      # Individual liked quote item
├── App.jsx                 # Main app component
├── main.jsx                # Entry point
└── index.css               # Global styles
```

## Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint

## Contributing

Feel free to fork, submit issues, and contribute improvements!

## License

This project is open source and available under the MIT License.
