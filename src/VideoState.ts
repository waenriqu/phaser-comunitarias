class VideoState extends Phaser.State {
  private readonly videoURL: string;
  private readonly video: Phaser.Video;

  constructor(videoURL: string) {
    super();
    this.videoURL = videoURL;
  }

  create() {
    const video = new Phaser.Video(this.game);
    video.createVideoFromURL(this.videoURL).addToWorld(0, 0, 0, 0);
    video.play();
  }
}

export default VideoState;
