<script>
  let { data } = $props();
  console.log(data.tasks);
</script>

{#each data.tasks as task}
  <h1>{task.task}</h1>
{/each}
