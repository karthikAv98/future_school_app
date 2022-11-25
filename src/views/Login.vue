<template>
    <div class="row q-gutter-sm justify-center" style="height: 100%; width: 100%">
        <div class="col-5" style="margin-top: 10%">
            <div class="row q-gutter-sm q-mt-xl">
                <div class="col">
                    <h2 class="text-center">Sign In</h2>
                </div>
            </div>
            <div class="row q-gutter-sm q-mb-lg justify-center">
                <div class="col-7">
                    <q-input type="text" filled label="Email" />
                </div>
            </div>
            <div class="row q-gutter-sm justify-center">
                <div class="col-7">
                    <q-input type="text" filled label="Password" />
                </div>
            </div>
            <div class="row q-gutter-sm justify-center">
                <div class="col-7">
                    <p @click="todo()" class="text-right" style="color: #3dbeff; cursor: pointer">Forgotten your password</p>
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

<script setup>
const todo = () => {
    alert("to do ui for forgot password");
}

defineExpose({
    todo,
})
</script>

<style scoped>
#login-section {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-120%, -40%);
}
</style>