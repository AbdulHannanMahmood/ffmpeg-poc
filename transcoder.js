const ffmpeg = require("fluent-ffmpeg");

const INPUT_URL = process.env.INPUT_URL;
const OUTPUT_URL = `./output/processed-small.mp4`;

console.log("Transcoding file started...");
const transcode = (url) => {
  console.log("transcode method initializing...");
  ffmpeg(url)
    .outputOptions([
      "-c:a",
      "aac", // Audio codec
      "-ar",
      "48000", // Audio sample rate
      "-c:v",
      "h264", // Video codec
      "-profile:v",
      "main", // Main profile
      "-crf",
      "20", // Quality factor
      "-sc_threshold",
      "0", // Scene cut threshold
      "-g",
      "48", // GOP size
      "-keyint_min",
      "48", // Minimum GOP size
      "-b:v",
      resolution?.bitrate, // Video bitrate
      "-maxrate",
      `${parseInt(resolution?.bitrate) * 1.07}k`, // Maximum bitrate
      "-bufsize",
      `${parseInt(resolution?.bitrate) * 1.5}k`, // Buffer size
      "-b:a",
      "128k",
    ])
    .output(OUTPUT_URL)
    .on("start", () => {
      console.log(`[START]: ${url}`);
    })
    .on("progress", (data) => {
      console.log(
        `[PROGRESS]: Frames=${data?.frames}, timemark=${
          data?.timemark
        } & percent=${parseInt(data?.percent?.toString())}`
      );
    })
    .on("error", (err) => {
      console.log(`[ERROR]: ${err}`);
    })
    .on("end", async () => {
      console.log(`[END]: ${OUTPUT_URL}`);
    })
    .run();
};

transcode(INPUT_URL);
