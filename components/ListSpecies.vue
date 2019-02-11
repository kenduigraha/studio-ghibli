<template>
  <div class="uk-child-width-1-2@s uk-margin-medium" uk-grid>
    <div class="uk-width-6-12">
      <div class="uk-dark uk-background-muted uk-padding">
        <h3>
          {{ species.name }}
        </h3>
        <p>
          Classification : {{ species.classification }}
        </p>
        <p>
          Eye Colors : {{ species.eye_colors }}
        </p>
        <p>
          Hair Colors : {{ species.hair_colors }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListSpecies',
  props: {
    species: {
      type: Object,
      default: () => ({
        id: '',
        name: '',
        classification: '',
        eye_colors: '',
        hair_colors: '',
        url: '',
        people: [''],
        films: ['']
      })
    }
  }
}
</script>
