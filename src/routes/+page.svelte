<main>
<h1>NPU Attendance Analyzer</h1>
<p>Drop attendance files in the dropzone below:</p>

<form method="post" use:enhance enctype="multipart/form-data">
<div id="dropzone">
  <!-- TODO: how to set input name?? -->
<Dropzone on:drop={handleFilesSelect} multiple={true} accept=".csv, .xlsx" inputElement="fileToUpload">
  <p>Drop All Attendance Files Here</p>
  </Dropzone>
</div>
<button type="submit">Analyze</button>
</form>

<ol>
  {#each files.accepted as item}
    <li>{item.name}</li>
  {/each}
</ol>

{#if form?.body || form?.message}
  <h2>{form?.message}</h2>
  <!-- <pre>{JSON.stringify(form, null, 2)}</pre> -->
{/if}
</main>

<script>
  import { enhance } from "$app/forms";
  export let form
  import Dropzone from "svelte-file-dropzone";

  let files = {
    accepted: [],
    rejected: []
  };

  function handleFilesSelect(e) {
    const { acceptedFiles, fileRejections } = e.detail;
    files.accepted = [...files.accepted, ...acceptedFiles];
    files.rejected = [...files.rejected, ...fileRejections];
  }
</script>

<style>

  * {
    font-family: sans-serif;
  }

  main {
    margin: 8svh 10svh;
  }

  #dropzone {
    border: 2px dashed #787878;
    border-radius: 5px;
    padding: 20px;
    text-align: center;
    transition: all 0.3s;
    font-family: sans-serif;
  }
</style>