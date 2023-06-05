<script lang="ts">
  import Saos from "saos";
  import { trackName, audio, trackPlaying, section } from "./stores";

  import Im1 from "$lib/assets/Blues/blues-skip-james-john-hurt.jpg";
  import Im2 from "$lib/assets/Blues/download (1).jfif";
  import Im3 from "$lib/assets/Blues/lede-image-1-1500x844.jpg";
  import Im4 from "$lib/assets/Blues/piano-Jelly-Roll-Morton-1915.webp";
  import Im5 from "$lib/assets/Blues/RoyBuchananPerforming_flip.jpg";
  import Im6 from "$lib/assets/Blues/the-republic-theatre-2048x1152.webp";
  import PlayBtn from "./play_btn.svelte";
  import Doctor from "$lib/assets/Blues/doctor.mp3";
  import Narration from "$lib/assets/Blues/Blues_mixdown.mp3";
  import { page } from '$app/stores';

  let doctorAudio: HTMLAudioElement;
  let doctorAudioPlaying = false;
  let handleDoctorAudio = () => {
    if (doctorAudioPlaying) {
      doctorAudio.pause();
      $trackPlaying = false;
      doctorAudioPlaying = false;
    } else {
      if ($audio) $audio.pause();
      $trackPlaying = false;
      doctorAudio.play();
      $trackName = "Doctor Jazz";
      $audio = doctorAudio;
      $trackPlaying = true;
      doctorAudioPlaying = true;
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
      $trackName = "Blues Narration";
      $audio = narrationAudio;
      $trackPlaying = true;
      narrationAudioPlaying = true;
    }
  };
  $: if ($section == "#blues" && narrationAudio) {
        handleNarrationAudio()
    }
  $: if (narrationAudio) {
      narrationAudio.onended = function(){
        handleNarrationAudio()
        window.location.href = "#jazz"
        $section = "jazz"
      }
    }
  trackPlaying.subscribe((val) => {
    if ($audio == doctorAudio) {
      doctorAudioPlaying = val;
    }
    if ($audio == narrationAudio) {
      narrationAudioPlaying = val;
    }
  });
</script>

<div
  class="section h-screen w-screen flex flex-col items-center bg-slate-200 p-10 justify-center"
  id="blues"
>
  <audio src={Doctor} preload="auto" bind:this={doctorAudio} hidden controls>
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
          <h1 class="text-8xl font-Blues font-medium">The Great Migration</h1>
          <div class="flex gap-2.5">
            <h3 class="text-4xl font-Blues font-normal">The Blues</h3>
            {#if narrationAudio}
              <PlayBtn
                trackName="Narration"
                playing={narrationAudioPlaying}
                onClick={() => handleNarrationAudio()}
              />
            {/if}
            {#if doctorAudio}
              <PlayBtn
                trackName="Doctor Jazz"
                playing={doctorAudioPlaying}
                onClick={() => handleDoctorAudio()}
              />
            {/if}
          </div>
          <p class="text-lg font-Blues font-normal">
            Jelly Roll Morton and Roy Buchanan
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
            class="rounded-lg drop-shadow-md h-[18vh] grow shrink basis-auto object-cover"
          />
          <img
            src={Im2}
            class="rounded-lg drop-shadow-md h-[18vh] grow shrink basis-auto object-cover"
          />
          <img
            src={Im3}
            class="rounded-lg drop-shadow-md h-[18vh] grow shrink basis-auto object-cover"
          />
          <img
            src={Im4}
            class="rounded-lg drop-shadow-md h-[18vh] grow shrink basis-auto object-cover"
          />
          <img
            src={Im5}
            class="rounded-lg drop-shadow-md h-[18vh] grow shrink basis-auto object-cover"
          />
          <img
            src={Im6}
            class="rounded-lg drop-shadow-md h-[18vh] grow shrink basis-auto object-cover"
          />
        </div>
      </div>
    </div>
  </Saos>
</div>
