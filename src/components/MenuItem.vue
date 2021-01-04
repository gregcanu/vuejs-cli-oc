<script>
export default {
    name: "MenuItem",
    props: ["addToShoppingCart", "image", "inStock", "name", "quantity", "price"],
    date: new Date(),
    data() {
        return {
            onSale: false
        }
    },
    computed: {
        generatedPrice() {
            if(this.onSale) {
                return (this.price * 0.9).toFixed(2)
            }
            return this.price
        }
    },
    beforeMount() {
        // const today = this.date.getDate();
        const today = new Date().getDate()
        if(today % 2 === 0) {
            this.onSale = true
        }
    }
}
</script>

<template>
    <div class="menu-item">
        <img class="menu-item__image" :src="image.source" :alt="image.alt" />
        <div>
            <a :href="/item/+name"><h3>{{ name }}</h3></a>
            <p v-if="onSale">Promo !</p>
            <p>{{ generatedPrice }} €</p>
            <p v-if="inStock">En stock</p>
            <p v-else>En rupture de stock</p>
            <div>
                <label for="add-item-quantity">Quantité : {{ quantity }}</label>
                <input v-model.number="quantity" id="add-item-quantity" type="number" />
                <button @click="addToShoppingCart(quantity)">
                    Ajouter au panier d'achat
                </button>
            </div>
        </div>
    </div>
</template>

<style></style>