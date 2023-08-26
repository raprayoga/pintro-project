<script setup lang="ts"></script>

<template>
  <div class="w-full flex justify-between pt-7 px-2">
    <div class="w-full md:w-3/6">
      <h1 class="text-gray-1 text-2xl">
        Selamat Datang, <span class="font-semibold">Ririh!</span>
      </h1>
      <p class="text-dark-greem text-sm">
        Kamu memiliki <span class="text-blue"> 3 Tugas </span> belum dikumpul,
        dan <span class="text-red"> 1 Transaksi </span> menunggu pembayaran
      </p>
    </div>
    <img
      src="@/assets/images/avatar.png"
      alt="avatar"
      class="relative bottom-[75px] hidden md:block"
    />
  </div>
</template>
