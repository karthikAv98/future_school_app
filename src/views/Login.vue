<template>
    <div class="row q-gutter-sm" style="height: 100%; width: 100%">
        <div class="col-5 text-center q-ma-xl" style="margin-top: 10%">
            <div class="row q-gutter-sm items-center">
                <div class="col self-center q-mt-xl">
                    <h2>Sign In</h2>
                </div>
            </div>
            <div class="row q-gutter-sm q-mt-xl q-mb-xl">
                <div class="col">
                    <q-input type="text" filled label="Email" />
                </div>
            </div>
            <div class="row q-gutter-sm q-mt-xl">
                <div class="col self-center">
                    <q-input type="text" filled label="Password" />
                </div>
            </div>
        </div>
        <div class="col-6 flex justify-center items-center">
            <q-img
                src="https://files.auroville.org/auroville-org/7b974fa4-ad03-4bc1-a3b6-a3ef3effa056.jpeg"
                spinner-color="primary"
                spinner-size="82px"
                height="500px"
                style="border-radius: 25px"
            />
        </div>
    </div>
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

<style scoped>
#login-section {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-120%, -40%);
}
</style>