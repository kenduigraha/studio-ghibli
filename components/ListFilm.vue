<template>
  <div class="uk-child-width-expand@s" uk-grid>
    <div class="uk-grid-item-match">
      <div class="uk-card uk-card-default uk-card-body">
        <h3>{{ film.title }}</h3>
        <div>
          <span>
            Score : {{ film.rt_score }}
          </span>
        </div>
        <div>
          <span>
            Release Date : {{ film.release_date }}
          </span>
        </div>
        <div>
          <span>
            Director : {{ film.director }}
          </span>
        </div>
        <div>
          <span>
            Producer : {{ film.producer }}
          </span>
        </div>
      </div>
    </div>
    <div>
      <h3>{{ film.title }}</h3>
      <p>
        {{ film.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListFilm',
  props: {
    film: {
      type: Object,
      default: () => ({
        id: '',
        title: '',
        description: '',
        director: '',
        producer: '',
        release_date: '',
        rt_score: ''
      })
    }
  }
}
</script>
