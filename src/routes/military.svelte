<script lang="ts">
  import { trackName, audio, trackPlaying } from "./stores";
  import Jps from "$lib/assets/Military/jps.jpg";
  import Marine from "$lib/assets/Military/marine.jpg";
  import Vintage from "$lib/assets/Military/vintage.jpg";
  import Vrc from "$lib/assets/Military/vrc.jpg";
  import Download from "$lib/assets/Military/download.jpg";
  import Down from "$lib/assets/Military/download.jfif";
  import PlayBtn from "./play_btn.svelte";
  import Stars from "$lib/assets/Military/stars.mp3";
  import Saos from "saos";

  let starsAudio: HTMLAudioElement;
  let starsAudioPlaying = false;
  let handleStarsAudio = () => {
    if (starsAudioPlaying) {
      starsAudio.pause();
      $trackPlaying = false;
      starsAudioPlaying = false;
    } else {
      if ($audio) $audio.pause();
      starsAudio.play();
      $trackName = "Stars and Stripes Forever";
      $trackPlaying = true;
      $audio = starsAudio;
      starsAudioPlaying = true;
    }
  };
  trackPlaying.subscribe((val) => {
    if ($audio == starsAudio) {
      starsAudioPlaying = val;
    }
  });
</script>

<div
  class="section h-screen w-screen flex flex-col items-center bg-slate-200 p-10 justify-center"
>
  <Saos animation={"fade-in 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
    <div
      class="max-w-screen-lg flex flex-col items-start w-full p-10 bg-gray-50 rounded-lg drop-shadow-md gap-5"
    >
      <div class="flex flex-col shrink-0">
        <div>
          <h1 class="text-8xl font-1800s font-medium">1800s</h1>
          <div class="flex gap-2.5">
            <h3 class="text-4xl font-1800s font-normal">Military Marches</h3>
            {#if starsAudio}
              <PlayBtn
                trackName="Stars and Stripes Forever"
                playing={starsAudioPlaying}
                onClick={() => handleStarsAudio()}
              />
            {/if}
          </div>
          <p class="text-lg font-1800s font-normal">John Philip Sousa</p>
          <audio
            src={Stars}
            preload="auto"
            bind:this={starsAudio}
            hidden
            controls
          >
            <track kind="captions" />
          </audio>
        </div>
        <div />
      </div>
      <div class="w-full h-full flex-1">
        <div
          class="flex flex-wrap gap-2.5 grow shrink basis-auto max-w-full max-h-full object-cover"
        >
          <img
            src={Jps}
            class="rounded-lg drop-shadow-md h-[18vh] grow shrink basis-auto object-cover"
          />
          <img
            src={Vrc}
            class="rounded-lg drop-shadow-md h-[18vh] grow shrink basis-auto object-cover"
          />
          <img
            src={Marine}
            class="rounded-lg drop-shadow-md h-[18vh] grow shrink basis-auto object-cover"
          />
          <img
            src={Vintage}
            class="rounded-lg drop-shadow-md h-[18vh] grow shrink basis-auto object-cover"
          />
          <img
            src={Download}
            class="rounded-lg drop-shadow-md h-[18vh] grow shrink basis-auto object-cover"
          />
          <img
            src={Down}
            class="rounded-lg drop-shadow-md h-[18vh] grow shrink basis-auto object-cover"
          />
        </div>
      </div>
    </div>
  </Saos>
</div>
