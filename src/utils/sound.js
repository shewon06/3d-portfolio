// Web Audio API Sound Generator & Mission: Impossible Theme Synthesizer Engine

class SoundEngine {
  constructor() {
    this.audioCtx = null;
    this.enabled = true;
    this.musicPlaying = false;
    this.musicTimer = null;
    this.bgAudio = null;
  }

  init() {
    if (!this.audioCtx && typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  toggleSound() {
    this.enabled = !this.enabled;
    if (!this.enabled && this.musicPlaying) {
      this.stopMissionImpossibleTheme();
    }
    return this.enabled;
  }

  playHover() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.audioCtx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.015, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.05);
    } catch (e) {}
  }

  playClick() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, this.audioCtx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.04, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.08);
    } catch (e) {}
  }

  playSuccess() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;

      const now = this.audioCtx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50];

      notes.forEach((freq, index) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + index * 0.08);

        gain.gain.setValueAtTime(0.03, now + index * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.08 + 0.25);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now + index * 0.08);
        osc.stop(now + index * 0.08 + 0.25);
      });
    } catch (e) {}
  }

  /* =========================================================
     MISSION: IMPOSSIBLE THEME SYNTHESIZER & MUSIC ENGINE
  ========================================================= */

  toggleMissionImpossibleTheme() {
    if (this.musicPlaying) {
      this.stopMissionImpossibleTheme();
      return false;
    } else {
      this.playMissionImpossibleTheme();
      return true;
    }
  }

  playMissionImpossibleTheme() {
    this.init();
    if (!this.enabled) this.enabled = true;
    this.musicPlaying = true;

    // Check if HTML audio element or MP3 is available
    if (typeof window !== 'undefined') {
      if (!this.bgAudio) {
        this.bgAudio = new Audio('/mission-impossible.mp3');
        this.bgAudio.loop = true;
        this.bgAudio.volume = 0.35;
      }
      
      const playPromise = this.bgAudio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {})
          .catch(() => {
            // Fallback to Web Audio API synthesized Mission: Impossible theme!
            this.startSynthesizedMissionImpossible();
          });
      }
    }
  }

  stopMissionImpossibleTheme() {
    this.musicPlaying = false;
    if (this.bgAudio) {
      this.bgAudio.pause();
      this.bgAudio.currentTime = 0;
    }
    if (this.musicTimer) {
      clearTimeout(this.musicTimer);
      this.musicTimer = null;
    }
  }

  startSynthesizedMissionImpossible() {
    if (!this.musicPlaying || !this.audioCtx) return;

    const stepDuration = 0.11; // 16th note speed
    let currentStep = 0;

    // 5/4 Mission Impossible Ostinato & Melody Sequence
    const bassline = [
      { note: 196.00, dur: 3 }, // G3
      { note: 196.00, dur: 3 }, // G3
      { note: 233.08, dur: 2 }, // Bb3
      { note: 261.63, dur: 2 }, // C4
      { note: 196.00, dur: 3 }, // G3
      { note: 196.00, dur: 3 }, // G3
      { note: 174.61, dur: 2 }, // F3
      { note: 185.00, dur: 2 }  // F#3
    ];

    const leadMelody = [
      { note: 587.33, start: 0, dur: 6 },  // D5
      { note: 523.25, start: 6, dur: 4 },  // C5
      { note: 466.16, start: 10, dur: 6 }, // Bb4
      { note: 440.00, start: 16, dur: 4 }  // A4
    ];

    const playLoop = () => {
      if (!this.musicPlaying) return;
      const now = this.audioCtx.currentTime;
      let timeOffset = 0;

      // Play Bassline
      bassline.forEach(({ note, dur }) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(note, now + timeOffset);

        gain.gain.setValueAtTime(0.04, now + timeOffset);
        gain.gain.exponentialRampToValueAtTime(0.001, now + timeOffset + dur * stepDuration - 0.02);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now + timeOffset);
        osc.stop(now + timeOffset + dur * stepDuration - 0.01);

        timeOffset += dur * stepDuration;
      });

      // Play Lead Brass Melody
      leadMelody.forEach(({ note, start, dur }) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'square';
        osc.frequency.setValueAtTime(note, now + start * stepDuration);

        gain.gain.setValueAtTime(0.03, now + start * stepDuration);
        gain.gain.exponentialRampToValueAtTime(0.001, now + (start + dur) * stepDuration - 0.03);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now + start * stepDuration);
        osc.stop(now + (start + dur) * stepDuration - 0.02);
      });

      const totalLoopTime = 20 * stepDuration * 1000;
      this.musicTimer = setTimeout(playLoop, totalLoopTime);
    };

    playLoop();
  }
}

export const soundFx = new SoundEngine();
