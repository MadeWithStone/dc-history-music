<script lang="ts">
  import Im1 from "$lib/assets/Go-go/1.jpg";
  import Im2 from "$lib/assets/Go-go/2.jpg";
  import Im3 from "$lib/assets/Go-go/3.jpg";
  import Im4 from "$lib/assets/Go-go/4.webp";
  import Im5 from "$lib/assets/Go-go/5.jpg";
  import Im6 from "$lib/assets/Go-go/6.webp";
  import { trackName, audio, trackPlaying } from "./stores";

  import Gogo from "$lib/assets/Go-go/gogo.mp3";
  import Saos from "saos";
  import PlayBtn from "./play_btn.svelte";
  import Narration from "$lib/assets/Go-go/Gogo_mixdown.mp3";

  let gogoAudio: HTMLAudioElement;
  let gogoAudioPlaying = false;
  let handleGogoAudio = () => {
    if (gogoAudioPlaying) {
      gogoAudio.pause();
      $trackPlaying = false;
      gogoAudioPlaying = false;
    } else {
      if ($audio) $audio.pause();

      $trackPlaying = false;
      gogoAudio.play();
      $trackName = "Go Go Swing";
      $audio = gogoAudio;
      $trackPlaying = true;
      gogoAudioPlaying = true;
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
      $trackName = "Go Go Narration";
      $audio = narrationAudio;
      $trackPlaying = true;
      narrationAudioPlaying = true;
    }
  };
  trackPlaying.subscribe((val) => {
    if ($audio == gogoAudio) {
      gogoAudioPlaying = $trackPlaying;
    }
    if ($audio == narrationAudio) {
      narrationAudioPlaying = val;
    }
  });
</script>

<div
  class="section h-screen w-screen flex flex-col items-center bg-slate-200 p-10 justify-center"
>
  <audio src={Gogo} preload="auto" bind:this={gogoAudio} hidden controls>
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
          <h1 class="text-8xl font-Gogo font-medium">A Style of its Own</h1>
          <div class="flex gap-2.5">
            <h3 class="text-4xl font-Gogo font-normal">Go-go</h3>
            {#if narrationAudio}
              <PlayBtn
                trackName="Narration"
                playing={narrationAudioPlaying}
                onClick={() => handleNarrationAudio()}
              />
            {/if}
            {#if gogoAudio}
              <PlayBtn
                trackName="Go Go Swing"
                playing={gogoAudioPlaying}
                onClick={() => handleGogoAudio()}
              />
            {/if}
          </div>
          <p class="text-lg font-Gogo font-normal">Chuck Brown</p>
        </div>
        <div />
      </div>
      <div class="w-full h-full flex-1">
        <div
          class="flex flex-wrap gap-2.5 grow shrink basis-auto max-w-full max-h-full object-cover"
        >
          <img
            src={Im5}
            class="rounded-lg drop-shadow-md h-[19vh] grow shrink basis-auto object-cover"
          />
          <img
            src={Im1}
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
            src={Im4}
            class="rounded-lg drop-shadow-md h-[19vh] grow shrink basis-auto object-cover object-top"
          />
          <img
            src={Im3}
            class="rounded-lg drop-shadow-md h-[19vh] grow shrink basis-auto object-cover"
          />
        </div>
      </div>
    </div>
  </Saos>
</div>
