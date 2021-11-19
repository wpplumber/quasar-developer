<template>
<div>
<q-btn :label="label" color="secondary" size="xl"></q-btn>
      <div class="text-h4 q-mb-md">Test UI kit elem
      ent</div>
</div>
</template>

<script>
import { QBtn } from 'quasar'

export default {
name: 'GeoBtn',

props: {
	label: {
		type: String,
		required: true,
	}
},

components: {QBtn}

}

</script>