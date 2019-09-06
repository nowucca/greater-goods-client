<template>
  <span>{{ formatPrice(amount) }}</span>
</template>

<script>
// From https://flaviocopes.com/how-to-format-number-as-currency-javascript/
const PriceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

export default {
  props: {
    amount: {
      type: Number,
      required: true
    }
  },
  methods: {
    formatPrice: function(price) {
      return PriceFormatter.format(price / 100.0)
    }
  }
}
</script>

<style lang="scss" scoped></style>
