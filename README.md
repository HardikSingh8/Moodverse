# MoodVerse 🎭✨

MoodVerse is an interactive web application that generates unique poems based on your emotional state, paired with dynamic visual effects. Express your feelings and watch them transform into beautiful poetry with matching atmospheric animations.

## Features

- **Mood Detection**: Analyzes your input text to determine emotional tone
- **Custom Poetry Generation**: Creates unique poems in different styles (haiku, free verse) based on detected mood
- **Dynamic Visualizations**: Real-time particle animations that match your emotional state
- **Responsive Design**: Works seamlessly across desktop and mobile devices

## Live Demo

[Add your deployment link here]

## Technologies Used

- HTML5/CSS3
- JavaScript (ES6+)
- p5.js for visual effects
- Google Fonts (Playfair Display, Roboto)

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, etc.)

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Navigate to the project directory:
```bash
cd moodverse
```

3. Open `index.html` in your web browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server
```

## Usage

1. Open the application in your web browser
2. Type your current feelings in the text area
3. Click "Create My Poem" button
4. Watch as your emotions transform into a unique poem with matching visuals

## Project Structure

```
moodverse/
│
├── index.html          # Main HTML file
├── sketch.js          # JavaScript logic for poem generation and visuals
└── README.md          # Project documentation
```

## Features in Detail

### Mood Categories

- **Happy**: Generates uplifting haikus with warm-colored animations
- **Sad**: Creates reflective free verse with cool-colored particles
- **Neutral**: Produces balanced poetry with neutral-toned visuals

### Visual Effects

- Dynamic particle system
- Mood-based color schemes
- Smooth transitions between states
- Responsive canvas sizing

## Customization

You can modify the word banks and visual effects in `sketch.js`:

- Add new words to the mood arrays
- Adjust particle behavior
- Modify color schemes
- Change poetry generation parameters

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Enhancements

- [ ] Add more poetry styles
- [ ] Implement machine learning for better mood detection
- [ ] Add option to save and share poems
- [ ] Include background music based on mood
- [ ] Add more interactive visual elements

## Acknowledgments

- Inspired by the intersection of technology and emotional expression
- Thanks to the p5.js community for the amazing creative coding library
- Special thanks to all contributors and users of MoodVerse

## Contact

Hardik Singh - singhhardik1456@gamil.com

Project Link: https://hardiksingh8.github.io/Moodverse/
