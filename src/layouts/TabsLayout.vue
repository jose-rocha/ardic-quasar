<template>
    <q-layout view="hHh Lpr lFf"   class="shadow-2 rounded-borders">
      <q-header elevated class="bg-black">
        <q-toolbar>
          <q-btn v-if="!$q.screen.lt.sm" flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>Header</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-if="!$q.screen.lt.sm"
        v-model="drawer"
        show-if-above
        :width="150"
        :breakpoint="500"
        bordered
        class="bg-grey-3"
      >
        <q-scroll-area class="fit" >
          <q-list>

                <q-tabs
                  v-model="tabsDr.$state.tabsDrawerSet"
                  vertical
                  class="text-teal"
                  active-color="white"
                  active-bg-color="grey"
                >
                  <q-tab name="mails" icon="mail" label="Mails" />
                  <!-- <q-separator /> -->

                  <q-tab name="alarms" icon="alarm" label="Alarms" />
                  <!-- <q-separator /> -->

                  <q-tab name="movies" icon="movie" label="Movies" />
                  <!-- <q-separator /> -->

                </q-tabs>

          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <!-- <q-page padding>
          <p v-for="n in 15" :key="n">teste</p>
        </q-page> -->
        <!-- <router-view /> -->
        <TabsIndexVue />
      </q-page-container>

      <!-- Tabs Mobile -->
      <!-- <q-footer v-if="$q.screen.lt.sm">
        <q-tabs
          v-model="tabsDr.$state.tabsDrawerSet"
          no-caps
          class="bg-black shadow-2 text-teal"
          active-color="white"
          dense
        >
        <q-tab name="mails" icon="mail" label="Mails" />
        <q-tab name="alarms" icon="alarm" label="Alarms" />
        <q-tab name="movies" icon="movie" label="Movies" />
      </q-tabs>
      </q-footer> -->
    </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import { tabsDrawer } from 'src/stores/tabs';
import TabsIndexVue from 'src/pages/TabsIndex.vue';

const drawer = ref(false);
const tabsDr = tabsDrawer();
</script>
