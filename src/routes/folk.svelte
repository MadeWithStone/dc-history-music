<script lang="ts">
  import { trackName, audio, trackPlaying } from "./stores";

  import Im1 from "$lib/assets/Folk/1.jpg";
  import Im2 from "$lib/assets/Folk/2.jpg";
  import Im3 from "$lib/assets/Folk/3.jpg";
  import Im4 from "$lib/assets/Folk/4.webp";
  import Im5 from "$lib/assets/Folk/5.jpg";
  import Im6 from "$lib/assets/Folk/6.jpeg";

  import Fox from "$lib/assets/Folk/fox.mp3";
  import Saos from "saos";
  import PlayBtn from "./play_btn.svelte";

  import Narration from "$lib/assets/Folk/Folk_mixdown.mp3";

  let foxAudio: HTMLAudioElement;
  let foxAudioPlaying = false;
  let handleFoxAudio = () => {
    if (foxAudioPlaying) {
      foxAudio.pause();
      $trackPlaying = false;
      foxAudioPlaying = false;
    } else {
      if ($audio) $audio.pause();
      foxAudio.play();
      $trackPlaying = false;
      $trackName = "Fox on the Run";
      $audio = foxAudio;
      $trackPlaying = true;
      foxAudioPlaying = true;
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
      $trackName = "Folk & Bluegrass Narration";
      $audio = narrationAudio;
      $trackPlaying = true;
      narrationAudioPlaying = true;
    }
  };
  trackPlaying.subscribe((val) => {
    if ($audio == foxAudio) {
      foxAudioPlaying = val;
    }
    if ($audio == narrationAudio) {
      narrationAudioPlaying = val;
    }
  });
</script>

<div
  class="section h-screen w-screen flex flex-col items-center bg-slate-200 p-10 justify-center"
>
  <audio src={Fox} preload="auto" bind:this={foxAudio} hidden controls>
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
          <h1 class="text-8xl font-Folk font-medium">Folk Revival</h1>
          <div class="flex gap-2.5">
            <h3 class="text-4xl font-Folk font-normal">Folk & Bluegrass</h3>
            {#if narrationAudio}
              <PlayBtn
                trackName="Narration"
                playing={narrationAudioPlaying}
                onClick={() => handleNarrationAudio()}
              />
            {/if}
            {#if foxAudio}
              <PlayBtn
                trackName="Fox on the Run"
                playing={foxAudioPlaying}
                onClick={() => handleFoxAudio()}
              />
            {/if}
          </div>
          <p class="text-lg font-Folk font-normal">
            The Seldom Scene and The Country Gentlemen
          </p>
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
            src={Im4}
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
        </div>
      </div>
    </div>
  </Saos>
</div>
