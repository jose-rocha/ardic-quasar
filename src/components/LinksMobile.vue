<template>
<div id="nav" class="flex q-px-sm items-center column " v-if="storeMenuLinks.menuMobile">
      <div class="flex q-pa-sm" @mouseover="storeHide.hideDropdownShow = false">
        <router-link  to="/" @click="storeMenuLinks.menuMobile = false" >Home</router-link>
      </div>

      <div class="flex q-pa-sm" style="flex-direction: column; cursor: pointer;"
        @mouseover="storeHide.hideDropdownShow = true"
      >
        <div class="letsCode"> Soluções</div>

        <div
          v-if="storeHide.hideDropdownShow"
          class="flex bg-black q-px-lg q-py-sm"
          style="position: absolute; z-index: 1;
          margin: 17px -20px; flex-direction: column; border-radius: 5px;"
          >
          <router-link to="/solutions" @click="storeHide.hideDropdownShow = false">
            Nosso Time
          </router-link>
          <router-link to="/solutions" class="q-mt-sm"
            @click="storeHide.hideDropdownShow = false">
          Carreiras</router-link>
        </div>
      </div>

      <div class="flex q-pa-sm" @mouseover="storeHide.hideDropdownShow = false">
        <router-link to="/lgpd" @click="storeMenuLinks.menuMobile = false">
            LGPD
        </router-link>
      </div>

      <div class="flex q-pa-sm">
        <router-link to="/contact" @click="storeMenuLinks.menuMobile = false">Contato</router-link>
      </div>

      <div class="flex q-pa-sm">
        <router-link to="/blog" @click="storeMenuLinks.menuMobile = false">Blog</router-link>
      </div>

      <!-- <div class="flex q-pa-sm">
        <router-link to="/blog">Solicitar Orçamento</router-link>
      </div> -->
</div>
</template>

<script setup>
import { useStoreHideDropdown } from 'src/stores/hideDropdown';
import { useMenuMobile } from 'src/stores/linksMobile';

const store = useStoreHideDropdown();
const storeHide = store.$state;

const storeMenu = useMenuMobile();
const storeMenuLinks = storeMenu.$state;

</script>

<style scoped lang="scss">
#nav a.router-link-exact-active {
  color: #fff;
  // border-bottom: 1px solid rgb(245, 179, 36);
  border-bottom: 1px solid #33085D;

}

a:hover {
  color: #fff;
    border-bottom: 1px solid #33085D;

}

a {
  text-decoration: none;
  color: grey;
}

// .menuHamburguer { display: none;}

// @media (min-width: 805px) {
//   .linksMobile { display: none; }
// }
</style>
