<template>
    <div class="row q-gutter-sm justify-center" style="height: 100%; width: 100%">
        <div class="col-5" style="margin-top: 10%">
            <div class="row q-gutter-sm q-mt-xl">
                <div class="col">
                    <h2 class="text-center">Sign In</h2>
                </div>
            </div>
            <div class="row q-gutter-sm q-mb-lg justify-center">
                <div class="col-12 col-md-7 col-lg-7 col-xl-7">
                    <q-input v-model="email" type="text" filled label="Email" :rules="email_rules" />
                </div>
            </div>
            <div class="row q-gutter-sm justify-center">
                <div class="col-12 col-md-7 col-lg-7 col-xl-7">
                    <q-input v-model="password" filled label="Password" :type="isPwd ? 'password' : 'text'">
                        <template v-slot:append>
                        <q-icon
                            :name="isPwd ? 'visibility_off' : 'visibility'"
                            class="cursor-pointer"
                            @click="isPwd = !isPwd"
                        />
                        </template>
                    </q-input>
                </div>
            </div>
            <div class="row q-gutter-sm justify-center">
                <div class="col-12 col-md-7 col-lg-7 col-xl-7">
                    <p @click="todo()" class="text-right" style="color: #3dbeff; cursor: pointer">Forgotten your password</p>
                </div>
            </div>
        </div>
        <div class="gt-sm col-6 flex justify-center items-center">
            <q-img
                class="shadow-5"
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
import { ref } from 'vue';

const todo = () => {
    // alert("to do ui for forgot password");
    console.log("email", email.value);
    console.log("password", password.value);
}

const isPwd = ref(true);
const email = ref(null);
const email_rules = [
    v => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v) || "Invalid Email"
]
const password = ref(null);

defineExpose({
    todo,
    isPwd,
    email,
    email_rules,
    password
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