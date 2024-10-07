<main>
<h1>NPU Attendance Analyzer</h1>
<p>Drop attendance files in the dropzone below:</p>

<div id="dropzone">
<Dropzone on:drop={handleFilesSelect} multiple={true} accept=".csv, .xlsx"/>
</div>

<button>Analyze</button>

<ol>
  {#each files.accepted as item}
    <li>{item.name}</li>
  {/each}
</ol>
</main>

<script>
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