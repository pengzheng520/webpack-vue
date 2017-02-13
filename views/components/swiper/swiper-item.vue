<template>
<div class="swiper-slide" v-if="zSrc">
    <a :href="zHref"><img class="imgload" :src="zSrc" :alt="zAlt"></a>
</div>
</template>

<script>
export default {
    props: ['zSrc', 'zAlt', 'zHref']
}
</script>
<style lang="sass">
.imgload {
    width: 100%;
}
</style>
