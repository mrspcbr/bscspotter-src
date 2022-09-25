<template>
    
    <div>User {{ $route.params.id }}</div>
</template>

<script>

export default {
        name: 'test_token',
  data() {
    return {
    
        id: this.$route.params.id
     
    };
  },

}
</script>
