<script lang="ts">
  import PlayBtn from "./play_btn.svelte";
  import { trackName, audio, trackPlaying } from "./stores";

  let handleAudio = () => {
    if ($trackPlaying) $audio.pause();
    else $audio.play();
    trackPlaying.set(!$trackPlaying);
  };
</script>

<div
  class="h-[60px] bg-gray-50 drop-shadow-md fixed w-screen z-10 px-10 py-2 flex items-center justify-between"
>
  <div>
    <h1 class="text-4xl font-title font-normal">The Musical History of DC</h1>
  </div>
  {#if $audio}
    <PlayBtn
      trackName={$trackName}
      playing={$trackPlaying}
      onClick={() => handleAudio()}
    />
  {/if}
</div>
