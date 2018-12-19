<template>
    <div class="button-container">
        <a class="button" :href="link">{{text}}</a>
    </div>
</template>

<script>
export default {
    name: "ComponentButton",
    props: {
        text : {
            type: String,
            required: true,
            validator: function (value) {
                return [
                    "syncing",
                    "synced",
                    "version-conflict",
                    "error"
                ].indexOf(value) !== -1
            }
        }
    }
}
</script>

<style scoped lang="scss">
.button-container {
    .button {
        background: #ccc;
        border: 1px solid #ccc;
        padding: 4px 8px;
    }
}
</style>