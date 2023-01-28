<script>
  export let value;

  import jsonToMathString from "./scripts/jsonToMathString.js";
  import MathView from "mathview-svelte/Math.svelte";

  $: data = jsonToMathString(value);
</script>

<MathView value={data} />
