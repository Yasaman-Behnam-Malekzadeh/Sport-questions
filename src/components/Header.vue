<template>
<div>
    <b-navbar  type="dark" variant="info">
        <b-navbar-brand active> Questions & Answer </b-navbar-brand>
        <b-navbar-nav>Question:{{ index +1 }}/10</b-navbar-nav>
    </b-navbar>
</div>
</template>
<script>
export default {
    props:{
        index:Number,
    }
}
</script>
