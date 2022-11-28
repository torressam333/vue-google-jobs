<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <a
          :href="url"
          class="flex items-center h-full text-xl"
          target="_blank"
          >{{ companyName }}</a
        >
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="item in navItems"
              :key="item"
              class="h-full ml-9 first:ml-0"
              data-test="main-nav-item"
            >
              <a href="" class="flex items-center h-full py-3">{{ item }}</a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <ActionButton button-text="Sign In" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ActionButton from '@/components/ActionButton';

export default {
  name: 'MainNav',
  components: { ActionButton },
  data() {
    return {
      companyName: 'Torres Careers',
      url: 'https://careers.google.com',
      navItems: [
        'Teams',
        'Locations',
        'Life at Torres Co',
        'How we hire',
        'Students',
        'Jobs',
      ],
    };
  },
};
</script>

<style scoped></style>
