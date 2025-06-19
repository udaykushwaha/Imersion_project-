# ProductHub - Product Search Application

A modern, responsive product search application built with React, TypeScript, and Tailwind CSS. Features real-time product search, input validation, and a beautiful glassmorphism design.

![ProductHub Screenshot](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&h=600&q=80)

## ✨ Features

- **🔍 Smart Search**: Real-time product search with input validation
- **📱 Responsive Design**: Optimized for all devices and screen sizes
- **🎨 Modern UI**: Glassmorphism design with smooth animations
- **⚡ Fast Performance**: Optimized loading states and error handling
- **🛡️ Input Validation**: Prevents empty searches and validates input length
- **🎯 Product Details**: Comprehensive product information display
- **🔄 Auto-refresh**: Easy product list refresh functionality
- **💫 Micro-interactions**: Hover effects and smooth transitions

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd product-search-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── SearchBar.tsx   # Search input with validation
│   ├── ProductCard.tsx # Individual product display
│   └── ProductGrid.tsx # Product grid layout
├── hooks/              # Custom React hooks
│   └── useProducts.ts  # Product data management
├── types/              # TypeScript type definitions
│   └── Product.ts      # Product interface types
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue to Indigo gradient (`from-blue-600 to-indigo-600`)
- **Background**: Multi-layer gradient (`from-blue-50 via-indigo-50 to-purple-50`)
- **Cards**: Semi-transparent white with backdrop blur
- **Text**: Gray scale for hierarchy

### Typography
- **Font Family**: Inter, system fonts fallback
- **Headings**: Bold weights with gradient text effects
- **Body**: Regular weight with proper line spacing

### Components
- **Cards**: Rounded corners (2xl), subtle shadows, hover animations
- **Buttons**: Gradient backgrounds, shadow effects, disabled states
- **Inputs**: Backdrop blur, focus states, validation styling

## 🔧 API Integration

The application uses the [DummyJSON API](https://dummyjson.com/) for product data:

- **Get Products**: `GET https://dummyjson.com/products?limit=30`
- **Search Products**: `GET https://dummyjson.com/products/search?q={query}&limit=30`

### Product Data Structure
```typescript
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
```

## 🔍 Features Deep Dive

### Search Functionality
- **Input Validation**: Minimum 2 characters required
- **Real-time Feedback**: Instant error messages and validation
- **Loading States**: Visual feedback during API calls
- **Error Handling**: Graceful error display and recovery options

### Product Display
- **Grid Layout**: Responsive grid (1-4 columns based on screen size)
- **Product Cards**: Rich information display with images, ratings, prices
- **Stock Indicators**: Visual stock level indicators
- **Discount Badges**: Prominent discount percentage display
- **Hover Effects**: Smooth scale and color transitions

### Performance Optimizations
- **Loading Skeletons**: Smooth loading experience
- **Image Fallbacks**: Graceful handling of missing images
- **Debounced Search**: Optimized API calls
- **Error Boundaries**: Robust error handling

## 🎯 Input Validation Rules

| Field | Validation | Error Message |
|-------|------------|---------------|
| Search Query | Not empty | "Please enter a search term" |
| Search Query | Min 2 characters | "Search term must be at least 2 characters long" |

## 📱 Responsive Breakpoints

| Breakpoint | Columns | Description |
|------------|---------|-------------|
| Mobile | 1 | Single column layout |
| Tablet | 2 | Two column grid |
| Desktop | 3 | Three column grid |
| Large Desktop | 4 | Four column grid |

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the deployment prompts

## 🛡️ Error Handling

The application includes comprehensive error handling:

- **Network Errors**: API connection failures
- **Validation Errors**: Input validation feedback
- **Image Loading**: Fallback images for broken links
- **Empty States**: Helpful messages for no results
- **Loading States**: Visual feedback during operations

## 🔧 Customization

### Styling
- Modify `tailwind.config.js` for theme customization
- Update color variables in components for brand colors
- Adjust spacing and typography in `src/index.css`

### API Configuration
- Update API endpoints in `src/hooks/useProducts.ts`
- Modify product limit in API calls
- Add additional API parameters as needed

## 📦 Dependencies

### Core Dependencies
- **React 18**: Modern React with hooks
- **TypeScript**: Type safety and better DX
- **Vite**: Fast build tool and dev server

### UI Dependencies
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library
- **PostCSS**: CSS processing

### Development Dependencies
- **ESLint**: Code linting and formatting
- **TypeScript ESLint**: TypeScript-specific linting rules

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [DummyJSON](https://dummyjson.com/) for providing the product API
- [Lucide](https://lucide.dev/) for the beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Unsplash](https://unsplash.com/) for placeholder images

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**