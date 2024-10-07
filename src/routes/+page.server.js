import { spawn } from 'child_process';

const childPython = function () {
  const childPython = spawn('python', ['--version']);
  // const childPython = spawn('python', ['src/lib/combine.py']);

  childPython.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  childPython.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  childPython.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
}