import { alto, ancho } from './dimens.ts';

class VideoState extends Phaser.State {
  private readonly videoURL: string;
  private readonly video: Phaser.Video;
  private readonly nextState: string;

  constructor(videoURL: string, nextState: string) {
    super();
    this.videoURL = videoURL;
    this.nextState = nextState;
  }

  create() {
    const video = new Phaser.Video(this.game);
    video
      .createVideoFromURL(this.videoURL)
      .addToWorld(ancho / 2, alto / 2, 0.5, 0.5);
    video.play();
    video.onComplete.add(this.goToNextState, this);
  }

  goToNextState() {
    this.game.state.start(this.nextState);
  }
}

export default VideoState;
