const { spawn } = require("child_process");

console.log("Starting SSHX on Render...");

const sshx = spawn("sh", ["-c", "curl -sSf https://sshx.io/get | sh -s run"], {
  stdio: "inherit"
});

sshx.on("close", (code) => {
  console.log(`SSHX exited with code ${code}`);
});

setInterval(() => {}, 1000);
