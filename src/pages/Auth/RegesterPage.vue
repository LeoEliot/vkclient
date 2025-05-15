<template>
    <div class="wrapper">
        <div class="split-form">
        <div class="image-side">
            <h2>МУП "Водоканал"</h2>
            <p>Личный кабинет</p>
        </div>
        <div class="form-side">
            <h2>Регистрация</h2>
            <form>
                <input type="number" placeholder="Лицевой счет" required/>
                <input type="email"  placeholder="Email" required/>
                <input type="password" placeholder="Пароль" required/>
                <button type="submit">Зарегистрироваться</button>
            </form>
            <div class="forgot-password">
                <LinkItem to="/login">Войти</LinkItem>
            </div>
        </div>
    </div>
    </div>
</template>

<script setup>
import LinkItem from '../../components/items/LinkItem.vue'
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