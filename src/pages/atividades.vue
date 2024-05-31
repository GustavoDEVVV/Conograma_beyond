<template>
    <div class="app-vue">
        <CrudComponent />
    </div>
</template>


<script>

    import CrudComponent from '@/components/CrudComponent.vue';

    export default{
        components: {
            CrudComponent
        },

    }
</script>

<style>

.app-vue{
    margin-top: 20vh;
    margin-bottom: 40vh;
}
</style>