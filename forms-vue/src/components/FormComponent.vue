<template>
    <div>
        
        <form action="">
            <input type="text" name="" placeholder="Nome">
            <hr>
            <input type="email" name="" placeholder="E-mail">
            <hr>
            <input type="number" name="" placeholder="Idade">
            <hr>
            <input type="radio" name="sex"  value="M"> Masculino
            <input type="radio" name="sex"  value="F"> Feminino
            <hr>
            <select name="" id="">
                <option value="">Selecione o Estado</option>
                <option value="SP">São Paulo</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="MG">Minas Gerais</option>
            </select>
            <hr>
            <label for="agree">Concordo com os termos de uso</label>
            <input type="checkbox" name="" id="agree">
            <hr>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <hr>
            <button type="submit">Enviar agora</button>
        </form>

    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>