<script setup lang="ts">
import BaseCard from "./BaseCard.vue"
</script>

<template>
  <div class="flex flex-col w-full h-full bg-white p-[30px]">
    <div class="relative">
      <img
        src="@/assets/images/schedule-banner.png"
        alt="avatar"
        class="w-full"
      />
      <p
        class="text-2xl font-medium absolute bottom-1/2 translate-y-2/4 translate-x-7"
      >
        September 2021
      </p>
    </div>

    <div class="flex mt-[30px] items-start">
      <div
        class="flex flex-col w-1/6 items-center text-lg font-semibold justify-center"
      >
        <p>Sen</p>
        <p class="border-b-4 border-b-green w-min mt-[18px]">23</p>
      </div>
      <div class="w-5/6 flex flex-col gap-[15px]">
        <BaseCard variant="green" size="lg" class-name="text-sm">
          Kunjungan ke musium dinosaurus
        </BaseCard>

        <BaseCard variant="green" size="lg" class-name="text-sm">
          Pengumpulan Tugas Tematik - ..
        </BaseCard>

        <BaseCard variant="green" size="lg" class-name="text-sm"
          >Kelas Online bersama Ibu Jamila...
        </BaseCard>
      </div>
    </div>

    <div class="flex mt-[30px] items-start">
      <div
        class="flex flex-col w-1/6 items-center text-lg font-semibold justify-center text-dark-green"
      >
        <p>Sen</p>
        <p class="w-min mt-[18px]">23</p>
      </div>
      <div class="w-5/6 flex flex-col gap-[15px]">
        <BaseCard
          variant="cream"
          size="lg"
          class-name="text-dark-green text-sm"
        >
          Kunjungan ke musium dinosaurus
        </BaseCard>

        <BaseCard
          variant="cream"
          size="lg"
          class-name="text-dark-green text-sm"
        >
          Pengumpulan Tugas Tematik - ..
        </BaseCard>
      </div>
    </div>

    <div class="flex justify-between flex-grow items-end">
      <p class="text-sm font-semibold">Hari Ini</p>
      <p class="text-blue text-sm font-semibold">25-27 ></p>
    </div>
  </div>
</template>
