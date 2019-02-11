<template>
  <section>
    <div v-if="params === 'films'">
      <div v-if="getFetchData.length > 0">
        <div v-for="film in getFetchData" :key="film.id">
          <ListFilm :film="film" />
        </div>
      </div>
      <div v-else>
        <ListFilm :film="getFetchData" />
      </div>
    </div>

    <div v-if="params === 'people'">
      <div v-if="getFetchData.length > 0">
        <div v-for="people in getFetchData" :key="people.id" class="uk-flex-center">
          <ListPeople :people="people" />
        </div>
      </div>
      <div v-else>
        <ListPeople :people="getFetchData" />
      </div>
    </div>

    <div v-if="params === 'locations'">
      <div v-if="getFetchData.length > 0">
        <div v-for="location in getFetchData" :key="location.id">
          <ListLocation :location="location" />
        </div>
      </div>
      <div v-else>
        <ListLocation :location="getFetchData" />
      </div>
    </div>

    <div v-if="params === 'species'">
      <div v-if="getFetchData.length > 0">
        <div v-for="species in getFetchData" :key="species.id">
          <ListSpecies :species="species" />
        </div>
      </div>
      <div v-else>
        <ListSpecies :species="getFetchData" />
      </div>
    </div>

    <div v-if="params === 'vehicle'">
      <div v-if="getFetchData.length > 0">
        <div v-for="vehicle in getFetchData" :key="vehicle.id">
          <ListVehicle :vehicle="vehicle" />
        </div>
      </div>
      <div v-else>
        <ListVehicle :vehicle="getFetchData" />
      </div>
    </div>
  </section>
</template>

<script>
import ListFilm from '~/components/ListFilm.vue'
import ListPeople from '~/components/ListPeople.vue'
import ListLocation from '~/components/ListLocation.vue'
import ListSpecies from '~/components/ListSpecies.vue'
import ListVehicle from '~/components/ListVehicle.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ListFeature',
  components: {
    ListFilm,
    ListPeople,
    ListLocation,
    ListSpecies,
    ListVehicle
  },
  props: {
    params: {
      type: String,
      default: () => ''
    }
  },
  computed: mapGetters(['getFetchData']),
  created() {
    this.fetchData({ params: this.params })
  },
  methods: {
    ...mapActions(['fetchData'])
  }
}
</script>
