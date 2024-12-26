# Transcoding with fluent-ffmpeg

This project is a basic example of how to use fluent-ffmpeg for transcoding videos in a Node.js environment. The project is setup to accept an input URL and transcode the video into a lower bitrate and resolution video. The output video is saved to a file named `processed-small.mp4` in the same directory as the project. The project also includes a script for generating thumbnails for the video.

The project uses environment variables for configuration. The following environment variables should be set:

- `INPUT_URL`: The URL of the video to transcode.
- `SIZE_WIDTH` and `SIZE_HEIGHT`: The width and height of the output video.
- `BITRATE`: The bitrate of the output video.

The project uses the following dependencies:

- `fluent-ffmpeg`: The library used for transcoding.
- `dotenv`: The library used to load environment variables from a `.env` file.

## Running the project

To run the project, navigate to the project directory and run `npm start`. This will start the transcoding process and generate a thumbnail for the video.

## Configuration

The project can be configured by setting environment variables in a `.env` file. The following variables can be set:

- `INPUT_URL`: The URL of the video to transcode.
- `SIZE_WIDTH` and `SIZE_HEIGHT`: The width and height of the output video.
- `BITRATE`: The bitrate of the output video.

For example, to transcode a video with a width of 640 pixels, a height of 480 pixels, and a bitrate of 500 kbps
