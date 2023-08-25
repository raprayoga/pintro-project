<script setup lang="ts">
import BaseCard from "./BaseCard.vue"
import BaseButton from "./BaseButton.vue"
</script>

<template>
  <BaseCard
    variant="white"
    size="lg"
    class="flex flex-col w-full h-full bg-white p-[30px]"
  >
    <div class="flex justify-between mb-10">
      <p class="text-lg font-semibolds">Jadwal Hari Ini</p>
      <BaseButton variant="gray" class-name="w-[110px] justify-between">
        Hari Ini
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="4"
          viewBox="0 0 6 4"
          fill="none"
        >
          <path
            d="M4.67069 0H1.5C0.597289 0 0.156657 1.10158 0.810344 1.72414L2.47496 3.30948C2.87524 3.69071 3.50889 3.67485 3.88961 3.27409L5.39569 1.68875C6.00082 1.05177 5.54929 0 4.67069 0Z"
            fill="#333333"
          />
        </svg>
      </BaseButton>
    </div>

    <ul>
      <li class="flex gap-5 items-center mb-10">
        <img
          src="@/assets/images/icons/icon-book.png"
          alt="book icon"
          class="w-[58] h-[58px]"
        />
        <div>
          <p class="text-sm font-semibold text-gray-1">Pendidikan Agama</p>
          <p class="text-dark-green text-sm font-medium leading-5">
            E312 &#9679; 08.00 - 10.00
          </p>
        </div>
      </li>

      <li class="flex gap-5 items-center mb-10">
        <img
          src="@/assets/images/icons/icon-book.png"
          alt="book icon"
          class="w-[58] h-[58px]"
        />
        <div>
          <p class="text-sm font-semibold text-gray-1">Matematika</p>
          <p class="text-dark-green text-sm font-medium leading-5">
            E312 &#9679; 08.00 - 10.00
          </p>
        </div>
      </li>

      <li class="flex gap-5 items-center mb-10">
        <img
          src="@/assets/images/icons/icon-book.png"
          alt="book icon"
          class="w-[58] h-[58px]"
        />
        <div>
          <p class="text-sm font-semibold text-gray-1">Olahraga</p>
          <p class="text-dark-green text-sm font-medium leading-5">
            E312 &#9679; 08.00 - 10.00
          </p>
        </div>
      </li>

      <li class="flex gap-5 items-center mb-10">
        <img
          src="@/assets/images/icons/icon-book.png"
          alt="book icon"
          class="w-[58] h-[58px]"
        />
        <div>
          <p class="text-sm font-semibold text-gray-1">Pendidikan Agama</p>
          <p class="text-dark-green text-sm font-medium leading-5">
            E312 &#9679; 08.00 - 10.00
          </p>
        </div>
      </li>
    </ul>
  </BaseCard>
</template>
