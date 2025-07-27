# ChemSquid: Periodic Table Survival Game

A **Squid Game-themed chemistry quiz web application** that combines periodic table knowledge with survival game mechanics. Perfect for science fair presentations with real-world interaction using QR codes and mobile devices.

## 🎮 Game Concept

**Tagline**: "Wrong answer about periodic table… you're eliminated!"

Players must survive through 4 increasingly difficult rounds of chemistry questions, with each wrong answer leading to elimination. The game features authentic Squid Game aesthetics with red-black-pink color schemes and dramatic elimination mechanics.

## 🎯 Features

### 4 Unique Rounds

1. **Red Light Green Light** - 4 speed questions with 15-second timer
2. **Sugar Honeycomb** - 4 interactive container selection questions
3. **Glass Bridge** - 4 A/B choice path questions with glass-breaking effects
4. **Final Survival** - 4 advanced chemistry questions with 8-second timer

### Game Mechanics

- **Timer System**: Visual countdown with color-coded urgency (15s → 12s → 10s → 8s)
- **Score Tracking**: 10 points per correct answer + round completion bonuses
- **Progress Tracking**: "Question X/4" display for each round
- **Elimination System**: Dramatic elimination screens with round-specific messages
- **Sound Effects**: Background music and sound effects
- **Mobile Responsive**: Optimized for smartphone usage
- **Fullscreen Mode**: Immersive gaming experience

### Visual Design

- **Squid Game Aesthetic**: Red (#DC143C), Hot Pink (#FF1493), Black (#000000)
- **Neon Accents**: Green (#00FF00) for correct answers
- **Smooth Animations**: CSS transitions and keyframe animations
- **Typography**: Orbitron font for futuristic look

## 🚀 Quick Start

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely in the browser

### Installation

1. **Clone or Download** the project files
2. **Open** `index.html` in your web browser
3. **Start Playing** immediately!

### For Science Fair Use

1. **Deploy** to GitHub Pages or Netlify (see deployment section)
2. **Generate QR Code** linking to your deployed game
3. **Set up physical elements** (ball pit, candy containers)
4. **Display QR code** for attendees to scan and play

## 📁 Project Structure

```
ChemSquid/
├── index.html          # Main HTML structure
├── styles.css          # Squid Game styling and animations
├── script.js           # Game logic and interactions
├── questions.js        # Chemistry question database
├── audio/              # Sound effects directory
│   └── README.md       # Audio setup instructions
└── README.md           # This file
```

## 🎵 Audio Setup

The game includes audio support for enhanced immersion:

- **Background Music**: Tension-building loop
- **Sound Effects**: Correct/wrong answers, elimination, timer ticks
- **Toggle Control**: Users can enable/disable audio

See `audio/README.md` for detailed audio file requirements and sources.

## 🎨 Customization

### Adding Questions

Edit `questions.js` to add or modify questions:

```javascript
{
    question: "Your question here?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correct: 0, // Index of correct answer (0-3)
    explanation: "Explanation of the answer"
}
```

### Modifying Styling

Edit `styles.css` to customize:
- Color scheme
- Animations
- Layout
- Mobile responsiveness

### Changing Game Rules

Edit `ROUND_CONFIG` in `questions.js` to modify:
- Time limits
- Questions per round
- Round descriptions

## 🌐 Deployment

### GitHub Pages

1. **Create Repository**: New GitHub repository
2. **Upload Files**: Add all project files
3. **Enable Pages**: Settings → Pages → Source: Deploy from branch
4. **Access URL**: `https://yourusername.github.io/repository-name`

### Netlify

1. **Drag & Drop**: Upload project folder to Netlify
2. **Automatic Deployment**: Site deploys instantly
3. **Custom Domain**: Optional custom domain setup

### Local Development

1. **Live Server**: Use VS Code Live Server extension
2. **Python Server**: `python -m http.server 8000`
3. **Node.js**: `npx serve .`

## 📱 Mobile Optimization

The game is fully optimized for mobile devices:

- **Touch-Friendly**: Large buttons and touch targets
- **Responsive Design**: Adapts to all screen sizes
- **QR Code Ready**: Perfect for science fair QR code access
- **Offline Capable**: Works without perfect internet connection

## 🎓 Educational Value

### Chemistry Topics Covered

- **Element Symbols**: Au, Fe, Ag, Cu, Pb, etc.
- **Periodic Table Groups**: Noble gases, halogens, alkali metals
- **Atomic Numbers**: Basic element identification
- **Element Properties**: Metals, nonmetals, states of matter
- **Advanced Concepts**: Valence electrons, electronegativity, atomic radius

### Learning Objectives

- Reinforce periodic table knowledge
- Improve element symbol recognition
- Understand element classifications
- Practice chemistry terminology
- Engage with interactive learning

## 🔧 Technical Details

### Browser Compatibility

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+

### Performance

- **Fast Loading**: Optimized assets and minimal dependencies
- **Smooth Animations**: CSS-based animations for performance
- **Memory Efficient**: No heavy frameworks or libraries

### Accessibility

- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Friendly**: Semantic HTML structure
- **High Contrast Support**: CSS media queries for accessibility
- **Focus Indicators**: Clear focus states for navigation

## 🎪 Science Fair Integration

### Physical Setup Ideas

1. **Ball Pit**: Real ball pit with periodic table elements
2. **Candy Containers**: Physical containers with element symbols
3. **Glass Bridge**: Cardboard or foam bridge panels
4. **Player Numbers**: Green tracksuits or numbered badges

### QR Code Implementation

1. **Generate QR Code**: Use any QR code generator
2. **Link to Game**: Point to your deployed game URL
3. **Display Prominently**: Large, visible QR code display
4. **Instructions**: Clear instructions for scanning and playing

### Multiplayer Setup

- **Multiple Devices**: Set up several tablets/phones
- **Leaderboard**: Track scores across multiple players
- **Tournament Mode**: Eliminate players until one survivor remains

## 🐛 Troubleshooting

### Common Issues

**Audio Not Playing**
- Check browser autoplay policies
- Ensure user interaction before audio
- Verify audio file paths

**Mobile Display Issues**
- Check viewport meta tag
- Test on different devices
- Verify touch event handling

**Game Not Loading**
- Check file paths and structure
- Verify all files are present
- Check browser console for errors

### Performance Issues

- **Slow Loading**: Optimize image and audio file sizes
- **Laggy Animations**: Reduce animation complexity
- **Memory Issues**: Close other browser tabs

## 🤝 Contributing

### Adding Features

1. **Fork** the repository
2. **Create** feature branch
3. **Implement** changes
4. **Test** thoroughly
5. **Submit** pull request

### Suggested Improvements

- **Multiplayer Mode**: Real-time multiplayer functionality
- **Difficulty Levels**: Easy/Medium/Hard question sets
- **Language Support**: Multiple language options
- **Admin Panel**: Question management interface
- **Analytics**: Player performance tracking

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Squid Game**: Inspiration for game mechanics and aesthetics
- **Chemistry Education**: Periodic table and element knowledge
- **Web Technologies**: HTML5, CSS3, Vanilla JavaScript
- **Open Source Community**: Free resources and tools

## 📞 Support

For questions, issues, or suggestions:

1. **Check** this README and documentation
2. **Search** existing issues
3. **Create** new issue with detailed description
4. **Contact** project maintainers

---

**Ready to test your chemistry knowledge? Survive the ChemSquid challenge! 🧪⚗️🎮** 