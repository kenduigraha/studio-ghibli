<template>
  <div class="uk-card uk-card-default uk-width-1-2@m uk-margin-medium">
    <div class="uk-card-header">
      <div class="uk-grid-large uk-flex-middle" uk-grid>
        <div class="uk-width-expand">
          <h3 class="uk-card-title uk-margin-remove-bottom">
            {{ people.name }}
          </h3>
          <p class="uk-text-meta uk-margin-remove-top">
            {{ people.gender }} | {{ people.age }}
          </p>
        </div>
      </div>
    </div>
    <div class="uk-card-body">
      <p>
        {{ people.name }} has {{ people.eye_color }} eye color and {{ people.hair_color }} hair color.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListPeople',
  props: {
    people: {
      type: Object,
      default: () => ({
        id: '',
        name: '',
        gender: '',
        age: '',
        eye_color: '',
        hair_color: '',
        films: [''],
        species: '',
        url: ''
      })
    }
  }
}
</script>
