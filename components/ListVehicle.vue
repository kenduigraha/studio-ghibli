<template>
  <div>
    <div class="uk-card uk-card-default uk-card-body uk-margin-large">
      <p>
        Name : {{ vehicle.name }}
      </p>
      <p>
        Description : {{ vehicle.description }}
      </p>
      <p>
        Vehicle Class : {{ vehicle.vehicle_class }}
      </p>
      <p>
        Length : {{ vehicle.length }}
      </p>
      <p>
        Pilot : {{ vehicle.pilot }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListVehicle',
  props: {
    vehicle: {
      type: Object,
      default: () => ({
        id: '',
        name: '',
        description: '',
        vehicle_class: '',
        length: '',
        pilot: '',
        films: '',
        url: ''
      })
    }
  }
}
</script>
