import {Injectable} from '@angular/core';
import {Howl, Howler} from 'howler';
import {Track} from '../models/tracks/track';


@Injectable()
export class PlayerService {
    sound = null;
    playing = false;
    soundId = 0;

    track: Track = null;

    constructor() {


    }

    play(track = null) {
        if (track === null) {
            if (this.sound === null) {
                return;
            }
            this.sound.play();
            return;
        }
        this.track = track;
        this.stop();
        this.sound = new Howl({
            src: [track.sample],
            format: ['mp3', 'aac'],

            onplayerror: (error) => {
                console.log(error);
            },
            onloaderror: (id, error) => {
                console.log(error);
            },

            onplay: (id) => {
                this.playing = true;
                this.soundId = id;
            },
            onend: () => {
                this.playing = false;

            }, autoplay: true
        });
        this.sound.play();
    }

    pause() {
        if (this.sound !== null) {
            this.sound.pause();
            this.playing = false;
        }
    }

    stop() {
        if (this.sound !== null) {
            this.sound.stop(this.soundId);
            this.sound.unload();
            this.playing = false;
        }
    }

    mute() {
        if (this.sound !== null) {
            console.log(this.sound);
            this.sound.mute();
        }
    }

    isPlaying() {
        return this.sound != null && this.playing;
    }

    getTrack() {
        return this.track;
    }

    getTrackName() {
        return this.track != null ? this.track.name : '';
    }

    setVolume(value: number) {
        if (this.sound !== null) {
            this.sound.volume(value);

        }
    }

    getVolume() {
        if (this.sound !== null) {
            return this.sound.volume();
        }
        return 0;
    }


}
