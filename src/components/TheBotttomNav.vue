<script setup lang="ts"></script>

<template>
  <div
    id="bottom-nav"
    class="flex w-full items-end justify-between max-w-[1184px] h-[57px] bg-white px-4 pb-3 text-2.5 font-semibold"
  >
    <div class="flex items-center flex-col border-t-2 border-t-blue pt-2.5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
      >
        <g clip-path="url(#clip0_466_479)">
          <path
            d="M9.5 4.2675L13.25 7.6425V13.5H11.75V9H7.25V13.5H5.75V7.6425L9.5 4.2675ZM9.5 2.25L2 9H4.25V15H8.75V10.5H10.25V15H14.75V9H17L9.5 2.25Z"
            fill="#1D4ED8"
          />
        </g>
        <defs>
          <clipPath id="clip0_466_479">
            <rect
              width="18"
              height="18"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>
      <p class="text-[10px] text-blue">Home</p>
    </div>

    <div class="flex items-center flex-col">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
      >
        <path
          d="M11 6.75H8C7.5875 6.75 7.25 6.4125 7.25 6C7.25 5.5875 7.5875 5.25 8 5.25H11C11.4125 5.25 11.75 5.5875 11.75 6C11.75 6.4125 11.4125 6.75 11 6.75Z"
          fill="#4F4F4F"
        />
        <path
          d="M11 9H8C7.5875 9 7.25 8.6625 7.25 8.25C7.25 7.8375 7.5875 7.5 8 7.5H11C11.4125 7.5 11.75 7.8375 11.75 8.25C11.75 8.6625 11.4125 9 11 9Z"
          fill="#4F4F4F"
        />
        <path
          d="M15.125 2.625L14 1.5L12.875 2.625L11.75 1.5L10.625 2.625L9.5 1.5L8.375 2.625L7.25 1.5L6.125 2.625L5 1.5V12H3.5C3.0875 12 2.75 12.3375 2.75 12.75V14.25C2.75 15.495 3.755 16.5 5 16.5H14C15.245 16.5 16.25 15.495 16.25 14.25V1.5L15.125 2.625ZM11.75 15H5C4.5875 15 4.25 14.6625 4.25 14.25V13.5H11.75V15ZM14.75 14.25C14.75 14.6625 14.4125 15 14 15C13.5875 15 13.25 14.6625 13.25 14.25V12.75C13.25 12.3375 12.9125 12 12.5 12H6.5V3.75H14.75V14.25Z"
          fill="#4F4F4F"
        />
        <path
          d="M13.25 6.75C13.6642 6.75 14 6.41421 14 6C14 5.58579 13.6642 5.25 13.25 5.25C12.8358 5.25 12.5 5.58579 12.5 6C12.5 6.41421 12.8358 6.75 13.25 6.75Z"
          fill="#4F4F4F"
        />
        <path
          d="M13.25 9C13.6642 9 14 8.66421 14 8.25C14 7.83579 13.6642 7.5 13.25 7.5C12.8358 7.5 12.5 7.83579 12.5 8.25C12.5 8.66421 12.8358 9 13.25 9Z"
          fill="#4F4F4F"
        />
      </svg>
      <p class="text-[10px]">Transaksi</p>
    </div>

    <div class="flex items-center flex-col">
      <img src="@/assets/images/icons/rocket-icon.png" alt="rocket icon" />
      <p class="text-[10px]">Tugas</p>
    </div>

    <div class="flex items-center flex-col">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
      >
        <g clip-path="url(#clip0_466_507)">
          <path
            d="M9.50005 4.95C8.00605 4.95 6.80005 6.156 6.80005 7.65C6.80005 9.144 8.00605 10.35 9.50005 10.35C10.994 10.35 12.2 9.144 12.2 7.65C12.2 6.156 10.994 4.95 9.50005 4.95ZM9.50005 9C8.75305 9 8.15005 8.397 8.15005 7.65C8.15005 6.903 8.75305 6.3 9.50005 6.3C10.247 6.3 10.85 6.903 10.85 7.65C10.85 8.397 10.247 9 9.50005 9Z"
            fill="#4F4F4F"
          />
          <path
            d="M9.50005 1.8C5.52205 1.8 2.30005 5.022 2.30005 9C2.30005 12.978 5.52205 16.2 9.50005 16.2C13.478 16.2 16.7 12.978 16.7 9C16.7 5.022 13.478 1.8 9.50005 1.8ZM9.50005 14.85C8.15905 14.85 6.92605 14.391 5.93605 13.626C6.97105 12.978 8.19505 12.6 9.50005 12.6C10.805 12.6 12.029 12.978 13.064 13.626C12.074 14.391 10.841 14.85 9.50005 14.85ZM14.063 12.654C12.767 11.763 11.192 11.25 9.50005 11.25C7.80805 11.25 6.24205 11.772 4.93705 12.654C4.13605 11.655 3.65005 10.386 3.65005 9C3.65005 5.778 6.27805 3.15 9.50005 3.15C12.722 3.15 15.35 5.778 15.35 9C15.35 10.386 14.864 11.655 14.063 12.654Z"
            fill="#4F4F4F"
          />
        </g>
        <defs>
          <clipPath id="clip0_466_507">
            <rect
              width="18"
              height="18"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>
      <p class="text-[10px]">Akun</p>
    </div>
  </div>
</template>

<style scoped>
#bottom-nav {
  border-top: 1px solid #f0f0f0;
  background: #fff;

  /* shadow-navbar-bottom */
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.04);
}
</style>
