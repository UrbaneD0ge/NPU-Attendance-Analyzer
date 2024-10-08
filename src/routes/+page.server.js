import { fail } from '@sveltejs/kit';
import { writeFileSync } from 'fs';

export const actions = {
  default: async ({ request }) => {
    console.log('request');
    // log the name of the uploaded file
    // const formData = Object.fromEntries(await request.formData());
    const formData = await request.formData();
    const { fileToUpload } = formData;


    console.log('formData', fileToUpload);

    // if (
    //   !formData.files?.name ||
    //   formData.files?.name === 'undefined'
    // ) {
    //   return fail(400, {
    //     error: true,
    //     message: '⚠ You must provide a file to upload!'
    //   });
    // }

    writeFileSync(`static/${fileToUpload.name}`, Buffer.from(await fileToUpload.arrayBuffer()));

    return {
      success: true,
      files: fileToUpload.map((f) => f.name),
      message: `🎉 File uploaded successfully!`
    };
  }
};


// import { spawn } from 'child_process';

// const childPython = function () {
//   const childPython = spawn('python', ['--version']);
//   // const childPython = spawn('python', ['src/lib/combine.py']);

//   childPython.stdout.on('data', (data) => {
//     console.log(`stdout: ${data}`);
//   });

//   childPython.stderr.on('data', (data) => {
//     console.error(`stderr: ${data}`);
//   });

//   childPython.on('close', (code) => {
//     console.log(`child process exited with code ${code}`);
//   });
// }