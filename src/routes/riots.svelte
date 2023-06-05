<script lang="ts">
  import Im1 from "$lib/assets/1968/1.jpg";
  import Im2 from "$lib/assets/1968/2.jpg";
  import Im3 from "$lib/assets/1968/3.jpg";
  import Im4 from "$lib/assets/1968/4.jpg";
  import Im5 from "$lib/assets/1968/5.jpg";
  import Im6 from "$lib/assets/1968/6.jfif";
  import Im7 from "$lib/assets/1968/7.jpg";
  import { trackName, audio, trackPlaying } from "./stores";

  import Jungle from "$lib/assets/1968/jungle.mp3";
  import Saos from "saos";
  import PlayBtn from "./play_btn.svelte";
  import Narration from "$lib/assets/1968/Riots_mixdown.mp3";

  let jungleAudio: HTMLAudioElement;
  let jungleAudioPlaying = false;
  let handleJungleAudio = () => {
    if (jungleAudioPlaying) {
      jungleAudio.pause();
      $trackPlaying = false;
      jungleAudioPlaying = false;
    } else {
      if ($audio) $audio.pause();

      $trackPlaying = false;
      jungleAudio.play();
      $trackName = "Jungle";
      $audio = jungleAudio;
      $trackPlaying = true;
      jungleAudioPlaying = true;
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
      $trackName = "1968 Riots Narration";
      $audio = narrationAudio;
      $trackPlaying = true;
      narrationAudioPlaying = true;
    }
  };
  trackPlaying.subscribe((val) => {
    if ($audio == jungleAudio) {
      jungleAudioPlaying = val;
    }
    if ($audio == narrationAudio) {
      narrationAudioPlaying = val;
    }
  });
</script>

<div
  class="section h-screen w-screen flex flex-col items-center bg-slate-200 p-10 justify-center"
>
  <audio src={Jungle} preload="auto" bind:this={jungleAudio} hidden controls>
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
        <div class="flex flex-col gap-2">
          <h1 class="text-8xl font-Riots font-medium">1968 Riots</h1>
          <div class="flex gap-2.5">
            <h3 class="text-4xl font-Riots font-normal">Funk</h3>
            {#if narrationAudio}
              <PlayBtn
                trackName="Narration"
                playing={narrationAudioPlaying}
                onClick={() => handleNarrationAudio()}
              />
            {/if}
            {#if jungleAudio}
              <PlayBtn
                trackName="Jungle"
                playing={jungleAudioPlaying}
                onClick={() => handleJungleAudio()}
              />
            {/if}
          </div>
          <p class="text-lg font-Riots font-normal">Young Senators</p>
        </div>
        <div />
      </div>
      <div class="w-full h-full flex-1">
        <div
          class="flex flex-wrap gap-2.5 grow shrink basis-auto max-w-full max-h-full object-cover"
        >
          <img
            src={Im1}
            class="rounded-lg drop-shadow-md h-[19vh] grow shrink basis-auto object-cover"
          />
          <img
            src={Im3}
            class="rounded-lg drop-shadow-md h-[19vh] grow shrink basis-auto object-cover"
          />
          <img
            src={Im2}
            class="rounded-lg drop-shadow-md h-[19vh] grow shrink basis-auto object-cover"
          />
          <img
            src={Im6}
            class="rounded-lg drop-shadow-md h-[19vh] grow shrink basis-auto object-cover"
          />
          <img
            src={Im5}
            class="rounded-lg drop-shadow-md h-[19vh] grow shrink basis-auto object-cover object-top"
          />
          <img
            src={Im7}
            class="rounded-lg drop-shadow-md h-[19vh] grow shrink basis-auto object-cover object-bottom"
          />
        </div>
      </div>
    </div>
  </Saos>
</div>
