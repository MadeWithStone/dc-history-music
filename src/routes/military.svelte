<script lang="ts">
  import { trackName, audio, trackPlaying, section } from "./stores";
  import Jps from "$lib/assets/Military/jps.jpg";
  import Marine from "$lib/assets/Military/marine.jpg";
  import Vintage from "$lib/assets/Military/vintage.jpg";
  import Vrc from "$lib/assets/Military/vrc.jpg";
  import Download from "$lib/assets/Military/download.jpg";
  import Down from "$lib/assets/Military/download.jfif";
  import PlayBtn from "./play_btn.svelte";
  import Stars from "$lib/assets/Military/stars.mp3";
  import Saos from "saos";
  import Narration from "$lib/assets/Military/Military_mixdown.mp3";
  import { page } from '$app/stores';

  let starsAudio: HTMLAudioElement;
  let starsAudioPlaying = false;
  let handleStarsAudio = () => {
    if (starsAudioPlaying) {
      starsAudio.pause();
      $trackPlaying = false;
      starsAudioPlaying = false;
    } else {
      if ($audio) $audio.pause();

      $trackPlaying = false;
      starsAudio.play();
      $trackName = "Stars and Stripes Forever";
      $audio = starsAudio;
      $trackPlaying = true;
      starsAudioPlaying = true;
    }
  };
  let narrationAudio: HTMLAudioElement;
  let narrationAudioPlaying = false;
  let handleNarrationAudio = () => {
    if (narrationAudioPlaying) {
      narrationAudio.pause();
      $trackPlaying = false;
      narrationAudioPlaying = false;
    } else {
      if ($audio) $audio.pause();
      $trackPlaying = false;
      narrationAudio.play();
      $trackName = "Military Marches Narration";
      $audio = narrationAudio;
      $trackPlaying = true;
      narrationAudioPlaying = true;
    }
  };
  
  $: if ($section == "#military" && narrationAudio) {
      console.log("Military path")
        handleNarrationAudio()
    }
  $: if (narrationAudio) {
    console.log("loaded narration audio")
      narrationAudio.onended = function(){
        handleNarrationAudio()
        window.location.href = "#blues"
        $section = "#blues"
      }
    }
    
  
  
  trackPlaying.subscribe((val) => {
    if ($audio == starsAudio) {
      starsAudioPlaying = val;
    }
    if ($audio == narrationAudio) {
      narrationAudioPlaying = val;
    }
  });
</script>

<div
  class="section h-screen w-screen flex flex-col items-center bg-slate-200 p-10 justify-center"
  id="military"
>
  <audio src={Stars} preload="auto" bind:this={starsAudio} hidden controls>
    <track kind="captions" />
  </audio>
  <audio
    src={Narration}
    preload="auto"
    bind:this={narrationAudio}
    hidden
    controls
  >
    <track kind="captions" />
  </audio>
  <Saos animation={"fade-in 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
    <div
      class="max-w-screen-lg flex flex-col items-start w-full p-10 bg-gray-50 rounded-lg drop-shadow-md gap-5"
    >
      <div class="flex flex-col shrink-0">
        <div>
          <h1 class="text-8xl font-1800s font-medium">1800s</h1>
          <div class="flex gap-2.5">
            <h3 class="text-4xl font-1800s font-normal">Military Marches</h3>
            {#if narrationAudio}
              <PlayBtn
                trackName="Narration"
                playing={narrationAudioPlaying}
                onClick={() => handleNarrationAudio()}
              />
            {/if}
            {#if starsAudio}
              <PlayBtn
                trackName="Stars and Stripes Forever"
                playing={starsAudioPlaying}
                onClick={() => handleStarsAudio()}
              />
            {/if}
          </div>
          <p class="text-lg font-1800s font-normal">John Philip Sousa</p>
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
