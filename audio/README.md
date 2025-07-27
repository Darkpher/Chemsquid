# Audio Files for ChemSquid

This directory should contain the following audio files for the game:

## Required Audio Files

1. **background.mp3** - Background tension music (low volume, loopable)
   - Duration: 2-3 minutes (will loop)
   - Style: Tension-building, Squid Game inspired
   - Volume: Keep low (30% max) as it plays continuously

2. **correct.mp3** - Correct answer sound effect
   - Duration: 1-2 seconds
   - Style: Positive chime or success sound
   - Volume: Medium (50% max)

3. **wrong.mp3** - Wrong answer sound effect
   - Duration: 1-2 seconds
   - Style: Negative buzzer or failure sound
   - Volume: Medium (50% max)

4. **eliminated.mp3** - Player elimination sound
   - Duration: 2-3 seconds
   - Style: Dramatic elimination sound (gunshot-like, but subtle)
   - Volume: Medium (50% max)

5. **tick.mp3** - Timer ticking sound
   - Duration: 0.5-1 second
   - Style: Clock ticking or countdown sound
   - Volume: Low (30% max)

## Audio Sources

You can find free audio files from:
- **Freesound.org** - Free sound effects and music
- **Zapsplat.com** - Free sound effects (requires account)
- **Pixabay.com** - Free music and sound effects
- **YouTube Audio Library** - Free music and sound effects

## Audio Format Requirements

- **Format**: MP3 (preferred) or WAV
- **Bitrate**: 128-320 kbps for MP3
- **Sample Rate**: 44.1 kHz
- **Channels**: Stereo or Mono

## File Naming

Make sure to use the exact filenames listed above, as the game code references these specific names.

## Testing Audio

After adding the audio files:
1. Open the game in a web browser
2. Click the sound toggle button (🔊) to enable/disable audio
3. Test each round to ensure audio plays correctly
4. Check that background music loops properly
5. Verify timer ticking sounds work in speed rounds

## Troubleshooting

If audio doesn't play:
- Check that files are named correctly
- Ensure files are in the correct directory
- Try refreshing the page
- Check browser console for audio errors
- Some browsers require user interaction before playing audio

## Alternative: No Audio Mode

The game works perfectly without audio files. Users can disable sound using the toggle button, and the game will function normally with visual feedback only. 