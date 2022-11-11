<template>
    <q-input v-model="text" label="Standard" />
    <q-btn color="primary" icon="check" label="OK" @click="onClick" />
</template>

<script>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

export default {
    name: "Login",
    setup() {
        const router = useRouter();
        const text = ref("")

        function onClick() {
            router.push("/")
        }

        return {
            onClick,
            text
        }
    },
}
</script>