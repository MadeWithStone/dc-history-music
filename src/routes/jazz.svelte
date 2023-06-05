<script lang="ts">
  import Im1 from "$lib/assets/Jazz/1.webp";
  import Im2 from "$lib/assets/Jazz/2.png";
  import Im3 from "$lib/assets/Jazz/3.webp";
  import Im4 from "$lib/assets/Jazz/4.jpg";
  import Im5 from "$lib/assets/Jazz/5.jpg";
  import Im6 from "$lib/assets/Jazz/6.jpg";
  import { trackName, audio, trackPlaying, section } from "./stores";

  import Train from "$lib/assets/Jazz/train.mp3";
  import Desafinado from "$lib/assets/Jazz/desafinado.mp3";
  import PlayBtn from "./play_btn.svelte";
  import Saos from "saos";
  import Narration from "$lib/assets/Jazz/Jazz_mixdown.mp3";
  import { page } from '$app/stores';

  let trainAudio: HTMLAudioElement;
  let trainAudioPlaying = false;
  let handleTrainAudio = () => {
    if (trainAudioPlaying) {
      trainAudio.pause();
      $trackPlaying = false;
      trainAudioPlaying = false;
    } else {
      if ($audio) $audio.pause();

      $trackPlaying = false;
      trainAudio.play();
      $trackName = "Take the A Train";
      $audio = trainAudio;
      $trackPlaying = true;
      trainAudioPlaying = true;
    }
  };
  let desafinadoAudio: HTMLAudioElement;
  let desafinadoAudioPlaying = false;
  let handleDesafinadoAudio = () => {
    if (desafinadoAudioPlaying) {
      desafinadoAudio.pause();
      $trackPlaying = false;
      desafinadoAudioPlaying = false;
    } else {
      if ($audio) $audio.pause();
      $trackPlaying = false;
      desafinadoAudio.play();
      $trackName = "Desafinado";
      $audio = desafinadoAudio;
      $trackPlaying = true;
      desafinadoAudioPlaying = true;
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
      $trackName = "Jazz Narration";
      $audio = narrationAudio;
      $trackPlaying = true;
      narrationAudioPlaying = true;
    }
  };
  $: if ($section == "#jazz" && narrationAudio) {
        handleNarrationAudio()
    }
  $: if (narrationAudio) {
      narrationAudio.onended = function(){
        handleNarrationAudio()
        window.location.href = "#folk"
        $section = "#folk"
      }
    }
  trackPlaying.subscribe((val) => {
    if ($audio == trainAudio) {
      trainAudioPlaying = val;
    }
    if ($audio == desafinadoAudio) {
      desafinadoAudioPlaying = val;
    }
    if ($audio == narrationAudio) {
      narrationAudioPlaying = val;
    }
  });
</script>

<div
  class="section h-screen w-screen flex flex-col items-center bg-slate-200 p-10 justify-center"
  id="jazz"
>
  <audio src={Train} preload="auto" bind:this={trainAudio} hidden controls>
    <track kind="captions" />
  </audio>
  <audio
    src={Desafinado}
    preload="auto"
    bind:this={desafinadoAudio}
    hidden
    controls
  >
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
          <h1 class="text-8xl font-Jazz font-medium">
            The Civil Rights Movement
          </h1>
          <div class="flex gap-2.5">
            <h3 class="text-4xl font-Jazz font-normal">Jazz</h3>
            {#if narrationAudio}
              <PlayBtn
                trackName="Narration"
                playing={narrationAudioPlaying}
                onClick={() => handleNarrationAudio()}
              />
            {/if}
            {#if trainAudio}
              <PlayBtn
                trackName="Take the A Train"
                playing={trainAudioPlaying}
                onClick={() => handleTrainAudio()}
              />
            {/if}
            {#if trainAudio}
              <PlayBtn
                trackName="Desafinado"
                playing={desafinadoAudioPlaying}
                onClick={() => handleDesafinadoAudio()}
              />
            {/if}
          </div>
          <p class="text-lg font-Jazz font-normal">
            Duke Ellington, Charlie Parker, and Ella Fitzgerald, and Charlie
            Byrd
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
