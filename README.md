# VPN Affiliate Website

A professional, responsive React website for comparing and promoting VPN services (NordVPN, Surfshark, and Affiliate VPN) with affiliate links.

## Features

- 🎨 Modern, professional design with trust-building elements
- 📱 Fully responsive layout for all devices
- 🔒 Security-focused design with trust indicators
- 💰 Prominent savings badges and discount displays
- ⭐ Customer testimonials and ratings
- 🎯 Clear call-to-action buttons for affiliate links
- 🖼️ Placeholder spaces for VPN logos (ready for your icons)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding Your Affiliate Links

Edit `src/components/VPNComparison.js` and replace the placeholder affiliate links:

```javascript
affiliateLink: '#nordvpn-affiliate-link' // Replace with your actual affiliate link
```

## Adding VPN Logos

1. Place your VPN logo images in `public/images/` directory
2. Update the logo placeholder in `src/components/VPNComparison.js`:

```javascript
<div className="logo-box">
  <img src="/images/nordvpn-logo.png" alt="NordVPN" className="vpn-logo" />
</div>
```

## Customization

- **Colors**: Edit CSS variables in component CSS files
- **Content**: Update text in component JS files
- **Styling**: Modify CSS files in `src/components/`

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── VPNComparison.js
│   │   ├── Features.js
│   │   ├── Testimonials.js
│   │   └── Footer.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## Technologies Used

- React 18
- React Icons
- CSS3 (with modern features)
- Responsive Design

## License

This project is for affiliate marketing purposes.

