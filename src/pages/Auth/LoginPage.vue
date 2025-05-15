<template>
    <div class="wrapper">
        <div class="split-form">
        <div class="image-side">
            <h2>МУП "Водоканал"</h2>
            <p>Личный кабинет</p>
        </div>
        <div class="form-side">
            <h2>Вход</h2>
            <ErrorItem v-if="error" :error="error" />
            <form>
                <input type="text" placeholder="Лицевой счет" v-model="login" required/>
                <input type="password" placeholder="Пароль" v-model="password" required/>
                <button type="submit" @click="loginUser">Войти</button>
            </form>
            <div class="forgot-password">
                <LinkItem to="/register">Регистрация</LinkItem>
                <LinkItem to="/reset-password">Забыли пароль?</LinkItem>
            </div>
        </div>
    </div>
    </div>
</template>

<script setup>
import LinkItem from '../../components/items/LinkItem.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { checkAuth } from '../../helpers/checkAuth'
import ErrorItem from '../../components/items/ErrorItem.vue'
const router = useRouter()
const login = ref('')
const password = ref('')
const error = ref('')
const loginUser = (e) => {
    e.preventDefault()
    const isAuth = checkAuth(login.value, password.value)
    if (isAuth) {
        router.push('/')
    } else {
        error.value = 'Неверный логин или пароль'
        setTimeout(() => {
            error.value = ''
        }, 3000)
    }
}
</script>

<style scoped lang="scss">
.wrapper {
    min-height: 100vh;
    display: flex;

    align-items: center;
    justify-items: center;

    .split-form {
        display: flex;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        .image-side {
            flex: 1;
            background: linear-gradient(45deg, #00BFFF, #FFE66D);
            padding: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            h2 {
                font-size: 2.5rem;
                margin-bottom: 1rem;
                background: none;
                color: #fff;
            }
            p {
                font-size: 1.2rem;
                background: none;
                color: #fff;
            }
        }
        .form-side {
            flex: 1;
            padding: 3rem;
            h2 {
                text-align: center;
                font-size: 2rem;
                margin-bottom: 1rem;
                color: #333;
            }
            .forgot-password {
                display: flex;
                justify-content: space-between;
                margin-top: 1rem;
            }
        }

        input {
            width: 100%;
            padding: 1rem;
            margin: 0.5rem 0;
            border: none;
            border-bottom: 2px solid #eee;
            outline: none;
            transition: border-color 0.3s ease;
        }
        input:focus {
            border-bottom-color: #00BFFF;
        }
        button {
            width: 100%;
            padding: 1rem;
            margin-top: 1.5rem;
            background-color: #00BFFF;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: transform 0.3s;

            &:hover {
                transform: translateY(-2px);
            }

            
        }
    }
    
}
</style>