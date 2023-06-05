<script lang="ts">
  import Jps from "$lib/assets/Military/jps.jpg";
  import Marine from "$lib/assets/Military/marine.jpg";
  import Vintage from "$lib/assets/Military/vintage.jpg";
  import Vrc from "$lib/assets/Military/vrc.jpg";
  import Download from "$lib/assets/Military/download.jpg";
  import Down from "$lib/assets/Military/download.jfif";
  import PlayBtn from "./play_btn.svelte";
  import Stars from "$lib/assets/Military/stars.mp3";
  import Saos from "saos";
</script>

<div
  class="section h-screen w-screen flex flex-col items-center bg-slate-200 p-10 justify-center"
>
  <Saos animation={"fade-in 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
    <div
      class="max-w-screen-lg flex flex-col items-start w-full p-10 bg-gray-50 rounded-lg drop-shadow-md gap-5"
    >
      <div class="flex flex-col shrink-0 w-full">
        <div class="flex flex-col w-full gap-4">
          <h1 class="text-8xl font-title font-medium">
            Welcome to a Musical Journey
          </h1>
          <div class="flex gap-2.5">
            <h3 class="text-4xl font-title font-normal">
              Through the history of Washington DC
            </h3>
          </div>
          <p class="text-lg font-normal font-normal">
            Washington DC is one of the most diverse cities in the country and
            with that comes an incredible fusion of cultures. Some of the
            greatest musicians originated in the capital city I call home. As a
            musician with a passion for trying new styles, I want to take you on
            a journey through time, culture, and music as I show you the
            artforms that have shaped Washington DC.
          </p>
          <p class="text-lg font-normal font-normal">
            This website follows a guided, interactive, multimedia documentary
            with visual, audio, and written aids. Please feel free to play the
            content in order by pressing the first "Play" button below or skip
            around to the sections you like. Please enjoy the music by playing
            individual songs at the top of each section.
          </p>
          <div>
            <PlayBtn trackName="Play" onClick={() => {}} />
          </div>
        </div>
        <div />
      </div>
    </div>
  </Saos>
</div>
