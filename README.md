# Personal Profile Portfolio

A modern, responsive personal portfolio website built with React and Tailwind CSS. This project showcases design skills, development capabilities, and professional experience in an elegant and user-friendly interface.

## 🚀 Features

- **Responsive Design**: Works seamlessly across all device sizes (mobile, tablet, desktop)
- **Modern UI**: Clean, professional design with gradient accents and smooth animations
- **Interactive Components**: Smooth scrolling navigation, contact form with Formspree integration
- **Social Media Integration**: Links to Instagram, GitHub, and LinkedIn profiles
- **Skills Showcase**: Highlighted capabilities in UI/UX Design, Frontend Development, Branding, and Motion Graphics
- **Contact Form**: Functional contact form powered by Formspree

## 🛠️ Technologies Used

- **React**: JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Lucide React**: Beautiful icon library
- **Formspree**: Contact form backend service
- **Create React App**: React application setup tool
- **PostCSS & Autoprefixer**: CSS processing and browser compatibility

## 📁 Project Structure

```
src/
├── components/
│   ├── heroSection.js      # Hero section with profile and CTA
│   ├── aboutSection.js     # About section with personal information
│   ├── skillSection.js     # Skills showcase section
│   ├── portofolioSection.js # Portfolio/Contact section
│   ├── contactSection.js   # Contact form section
│   ├── navbar.js           # Navigation bar component
│   └── footer.js           # Footer component
├── assets/
│   └── images/             # Profile image
├── helpers/
│   └── smoothScroll.js     # Smooth scrolling functionality
└── App.js                  # Main application component
```

## 📋 Components

### Hero Section
- Personal introduction with name and title
- Call-to-action buttons (view work, contact)
- Social media links
- Profile picture with gradient background

### About Section
- Detailed personal information
- Skill tags and specialties
- Connect button with LinkedIn link

### Skills Section
- Four main skill areas with icons:
  - UI/UX Design (Figma, Adobe XD, Sketch)
  - Frontend Development (React, Vue, Tailwind)
  - Branding (Logo, Identity, Print)
  - Motion Graphics (After Effects, Lottie)

### Portfolio Section
- Project showcase area (implementation pending)

### Contact Section
- Contact information (email, phone)
- Social media links
- Functional contact form with validation

### Navigation
- Smooth scrolling navigation to different sections
- Mobile-friendly responsive menu

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Navigate to the project directory:
```bash
cd personal-profile
```

3. Install dependencies:
```bash
npm install
```

### Running the Application

To run the application in development mode:
```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Building for Production

To build the application for production:
```bash
npm run build
```

The optimized production build will be available in the `build` folder.

## 🔧 Configuration

### Contact Form Setup
The contact form uses Formspree. To set up your own form:

1. Create an account at [formspree.io](https://formspree.io)
2. Create a new form and get your endpoint URL
3. Replace the `xdkpzegv` form ID in `portofolioSection.js` with your own form ID
4. Update the form handler to send emails to your desired address

### Customization

You can customize the following elements:

- **Personal Information**: Update text and links in all components
- **Profile Image**: Replace `src/assets/images/profie.jpg` with your own image
- **Color Scheme**: Modify Tailwind classes to match your preferred colors
- **Content**: Edit all text content in the component files

## 📱 Responsive Design

The website is fully responsive and adapts to different screen sizes:

- **Mobile**: Single column layout for optimal viewing on smartphones
- **Tablet**: Flexible layouts that adjust based on screen width
- **Desktop**: Multi-column layouts for better content organization

## 🎨 Styling

- **Tailwind CSS**: Used for all styling
- **Gradient Backgrounds**: Modern gradient backgrounds throughout
- **Smooth Animations**: Hover effects and transitions for better UX
- **Typography**: Clear, readable fonts with proper sizing hierarchy

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Create React App](https://github.com/facebook/create-react-app)
- Icons from [Lucide React](https://lucide.dev/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

## 📞 Contact

- **Email**: rohmanmauldihi@email.com
- **GitHub**: [abdulrohmanmaulidhi](https://github.com/abdulrohmanmaulidhi)
- **LinkedIn**: [abdulrohmanmaulidhi](https://linkedin.com/in/abdulrohmanmaulidhi)
- **Instagram**: [abdul.rohmanm](https://instagram.com/abdul.rohmanm)
- **Portfolio**: [abdulrohmanmaulidhi.vercel.app](https://abdulrohmanmaulidhi.vercel.app)

---

**Note**: This portfolio is designed to be customized with your personal information, projects, and contact details. Feel free to modify any content to better represent your professional identity.