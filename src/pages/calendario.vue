<template>
    <div class="main_calendario">
        <calendarioCard/>
    </div>
</template>


<script>

import calendarioCard from '@/components/calendarioCard.vue'

    export default{

        components:{
            calendarioCard
        }
    }


</script>

<style>

.main_calendario{
    margin-top: 5vh;
    margin-bottom: 5vh;
}
</style>