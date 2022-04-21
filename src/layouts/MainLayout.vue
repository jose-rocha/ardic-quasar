<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class=" q-py-sm bg-black" >
      <q-toolbar class="justify-between">
        <q-toolbar-title
          :style="$q.screen.lt.sm ? ' height: 90px; flex:1;' : 'width: 20px; max-width: 20%;'"
          @mouseover="storeHide.hideDropdownShow = false">
          <router-link to="/" @click="storeMenuLinks.menuMobile = false">
            <q-img
            :src="LogoTipo"
            :fit="$q.screen.lt.sm ? 'contain' : 'scale-down'"
            :height="$q.screen.lt.sm ? '95px' : '40px'"
            style="cursor: pointer"
          />
          </router-link>
        </q-toolbar-title>

        <!-- <div v-if="!$q.screen.lt.md" id="nav" class="flex q-px-md"> -->
        <div  id="nav" class="flex q-px-md " v-if="!$q.screen.lt.md">
          <div class="flex q-px-sm" @mouseover="storeHide.hideDropdownShow = false">
            <router-link  to="/" class="links">Home</router-link>
          </div>

          <!-- <div class="flex q-px-sm" style="flex-direction: column; cursor: pointer;"
            @mouseover="storeHide.hideDropdownShow = true"
          >
            <div class="letsCode">Soluções</div>

            <div
              v-if="storeHide.hideDropdownShow"
              class="flex bg-black q-px-lg q-py-sm"
              style="position: absolute; z-index: 1;
              margin: 40px -20px; flex-direction: column; border-radius: 5px;"
              >
              <router-link to="/solutions"
                class="links" @click="storeHide.hideDropdownShow = false">
                Nosso Time
              </router-link>

              <router-link to="/solutions" class="q-mt-sm links"
                @click="storeHide.hideDropdownShow = false">
              Carreiras</router-link>
            </div>
          </div> -->

          <div class="flex q-px-sm"  >
            <a class="links" style="cursor: pointer;"
              @mouseover="storeHide.hideDropdownShow = true"
            >Soluções
              <q-menu >
                <q-list dense style="min-width: 100px" >
                 <q-item clickable v-close-popup v-if="storeHide.hideDropdownShow">
                  <router-link  to="/solutions" class="links text-dark">Nosso Time</router-link>
                 </q-item>
                 <q-separator  v-if="storeHide.hideDropdownShow"/>
                 <q-item clickable v-close-popup  v-if="storeHide.hideDropdownShow">
                  <router-link  to="/solutions" class="links text-dark" >Carreiras</router-link>
                 </q-item>
                </q-list>
              </q-menu>
            </a>
          </div>

          <div class="flex q-px-sm" @mouseover="storeHide.hideDropdownShow = false">
            <router-link :to="{name: 'lgpd'}" class="links">
               LGPD
            </router-link>
          </div>

          <div class="flex q-px-sm">
            <router-link to="/contact" class="links">Contact</router-link>

          </div>

          <div class="flex q-px-sm">
            <router-link to="/blog" class="links">Blog</router-link>
          </div>

        </div>

        <q-icon
          name="mdi-menu" color="negative" size="20px" v-if="$q.screen.lt.md"
          style="cursor: pointer;"
          @click="() => storeMenuLinks.menuMobile = !storeMenuLinks.menuMobile"/>
      </q-toolbar>
      <LinksMobile />
    </q-header>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useStoreHideDropdown } from 'src/stores/hideDropdown';
import LinksMobile from 'components/LinksMobile.vue';
import { useMenuMobile } from 'src/stores/linksMobile';
import LogoTipo from 'src/assets/Logotipo.png';

const store = useStoreHideDropdown();
const storeHide = store.$state;

const storeMenu = useMenuMobile();
const storeMenuLinks = storeMenu.$state;

// const img = 'src/assets/Logotipo.png';

</script>

<style scoped lang="scss">
#nav .links.router-link-exact-active {
  color: #fff;
  border-bottom: 1px solid #A1A7E2;
}

.links:hover {
  color: #fff;
    border-bottom: 1px solid #A1A7E2;

}

.letsCode:hover {
  color: #fff;
  border-bottom: 1px solid #A1A7E2;

}

.links, .letsCode {
  text-decoration: none;
  color: grey;
}

// .menuHamburguer { display: none;}

@media (max-width: 599px) {
  // .linksRight { display: none; }
  // .menuHamburguer { display: flex; cursor: pointer}
}
</style>
