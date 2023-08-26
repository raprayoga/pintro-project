<script lang="ts" setup>
import WellcomeCard from "@/components/WellcomeCard.vue"
import Schedule from "@/components/Schedule.vue"
import Bio from "@/components/Bio.vue"
import Task from "@/components/Task.vue"
import Events from "@/components/Events.vue"
import Lessons from "@/components/Lessons.vue"
import News from "@/components/News.vue"
</script>

<template>
  <main class="pb-28 md:py-10 w-full md:mt-20 px-4">
    <div
      class="grid lg:grid-cols-3 md:grid-cols-2 gap-6 max-w-[1184px] mx-auto"
    >
      <WellcomeCard class="md:col-span-2" />
      <Task class="md:hidden h-[328px] md:h-auto" style="height: 328px" />
      <Schedule class="md:row-span-2" />
      <Bio class="hidden md:block" />
      <Task class="hidden md:flex" />
      <Lessons class="md:hidden" />
      <Events class="md:col-span-2" />
      <Lessons class="hidden md:block md:row-span-2" />
      <News />
      <News />
    </div>
  </main>
</template>
