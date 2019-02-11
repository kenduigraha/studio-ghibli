<template>
  <div class="uk-card uk-card-default uk-card-body uk-margin-medium">
    <h3 class="uk-card-title">
      {{ location.name }}
    </h3>
    <p>
      Climate : {{ location.climate }}
    </p>
    <p>
      Terrain : {{ location.terrain }}
    </p>
    <p>
      Surface Water : {{ location.surface_water }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ListLocation',
  props: {
    location: {
      type: Object,
      default: () => ({
        id: '',
        name: '',
        climate: '',
        terrain: '',
        surface_water: '',
        residents: [''],
        films: [''],
        url: ['']
      })
    }
  }
}
</script>
