console.log(
  "Running file for generating thumbnail for video = ",
  process.env.INPUT_URL
);
const ffmpeg = require("fluent-ffmpeg");
const { resolve } = require("path");
const generateThumbnail = (inputUrl, videoId) => {
  const screenshotPath = resolve(`./output/${videoId}_thumbnail.jpeg`);
  ffmpeg(inputUrl)
    .screenshots({
      timestamps: ["50%"],
      filename: screenshotPath,
      size: `${process.env.SIZE_WIDTH}x${process.env.SIZE_HEIGHT}`,
    })
    .outputOptions([
      `-vf scale=${process.env.SIZE_HEIGHT}:${process.env.SIZE_WIDTH},format=yuv420p`, // Fix filter chain issues
      "-q:v 31", // Lowest quality for small size
      "-pix_fmt yuv420p", // Ensure compatible pixel format
      "-r 30", // Force constant frame rate
    ])

    .output(screenshotPath)
    .on("error", (err) => {
      console.log(
        `VideoId:${videoId} -> Error while extracting screenshot`,
        err
      );
    });
};

generateThumbnail(process.env.INPUT_URL, Date.now().toString());
