<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 h-16 w-full bg-white" role="page-container">
      <div
        class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8"
      >
        <a
          :href="url"
          class="flex h-full items-center text-xl"
          target="_blank"
          >{{ companyName }}</a
        >
        <nav class="ml-12 h-full">
          <ul class="m-0 flex h-full list-none p-0">
            <li
              v-for="item in navItems"
              :key="item"
              class="ml-9 h-full first:ml-0"
              data-test="main-nav-item"
            >
              <a href="" class="flex h-full items-center py-3">{{ item }}</a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <ActionButton
            v-if="!isLoggedIn"
            button-text="Sign In"
            @click="toggleAuth"
          />
          <ProfileImage v-else @click="toggleAuth" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import ProfileImage from "./ProfileImage.vue";
export default {
  name: "MainNav",
  components: { ActionButton, ProfileImage },
  data() {
    return {
      companyName: "Torres Careers",
      url: "https://careers.google.com",
      navItems: [
        "Teams",
        "Locations",
        "Life at Torres Co",
        "How we hire",
        "Students",
        "Jobs",
      ],
      isLoggedIn: false,
    };
  },
  methods: {
    toggleAuth() {
      return (this.isLoggedIn = !this.isLoggedIn);
    },
  },
};
</script>

<style scoped></style>
