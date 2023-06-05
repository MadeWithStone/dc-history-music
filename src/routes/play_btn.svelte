<script>
  import FaPlay from "svelte-icons/fa/FaPlay.svelte";
  import FaPause from "svelte-icons/fa/FaPause.svelte";
  import Saos from "saos";

  export let trackName = "";
  export let onClick = () => {};
  export let playing = false;
</script>

<button
  on:click={onClick}
  class={`${
    playing
      ? "bg-indigo-400 hover:bg-indigo-500"
      : "bg-red-400 hover:bg-red-500"
  } rounded-[20px] px-4 h-[40px]  flex items-center gap-1`}
  ><div class="text-gray-50 w-[16px] h-[16x]">
    {#if !playing}<FaPlay />{:else}<FaPause />
    {/if}
  </div>
  <p class="text-gray-50 font-semibold">{trackName}</p></button
>
