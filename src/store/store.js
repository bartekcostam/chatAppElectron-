import { firebaseAuth, firebaseDb } from 'boot/firebase'

// store module needs to have 4 diffrent objects.
//state - where all our data from the app go
const state = {}
//
const mutations = {}
const actions = {}
const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
