<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <q-icon name="menu"/>
        </q-btn>
        <div class="row">
          <router-link :to="{ name: 'collect' }" tag="span" style="cursor: pointer">
            <q-toolbar-title>Crafted Crowds</q-toolbar-title>
          </router-link>

        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered content-class="bg-grey-2">
      <q-list>
        <q-item-label header>Crafted Crowds app</q-item-label>

        <q-item clickable :to="{name: 'collect'}">
          <q-item-section avatar>
            <q-icon name="note"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Signup with Email</q-item-label>
            <q-item-label caption>Signup receive information on app..</q-item-label>
          </q-item-section>
        </q-item>

        <div v-if="isLoggedIn">
          <q-item clickable :to="{name: 'profile'}">
            <q-item-section avatar>
              <q-icon name="settings"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Profile</q-item-label>
              <q-item-label caption>view your profile</q-item-label>
            </q-item-section>
          </q-item>
        </div>

        <div v-if="isLoggedIn">
          <q-item clickable @click="signOut">
            <q-item-section avatar>
              <q-icon name="stop"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Logout</q-item-label>
            </q-item-section>
          </q-item>
        </div>

        <div v-if="!isLoggedIn">
          <q-item clickable :to="{name: 'auth'}">
            <q-item-section avatar>
              <q-icon name="group"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Login/SignUp</q-item-label>
              <q-item-label caption>Login or Signup</q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
export default {
  name: 'MyLayout',
  data () {
    return {
      user: '',
      signedIn: 'false',
      leftDrawerOpen: false//this.$q.platform.is.desktop
    }
  },
  computed: {
    isLoggedIn () {
      return this.signedIn
    }
  },
  mounted () {
    this.$AmplifyEventBus.$on('authState', info => {
      this.signedIn = true
    })
  },
  beforeCreate () {
    this.$Auth.currentAuthenticatedUser()
      .then(user => {
        this.user = user
        this.signedIn = true
      })
      .catch(() => {
        this.signedIn = false
      })
  },
  methods: {
    openURL,
    async signOut () {
      await this.$Auth.signOut()
        .then(data => console.log(data))
        .catch(err => console.log(err))
      this.signedIn = false
      parent.signedIn = false
      this.$router.push({ name: 'auth' })
    }
  }
};
</script>

<style>
</style>