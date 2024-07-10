import { useCartStore } from "@/stores/cart-store";
import { useCheckoutStore } from "@/stores/checkout-store"

export const generateMessage = ()=>{
    const{ name, address}= useCheckoutStore(state=>state);
    const { cart } = useCartStore(state=>state);

    let orderProducts = [];
    for(let item of cart){
        orderProducts.push(`${item.quantity} x ${item.product.name} - (R$ ${item.product.price.toFixed(2)}) = ${(item.quantity * item.product.price).toFixed(2)}`);
    }

    let subtotal = 0;
    for(let item of cart){
        subtotal += item.quantity * item.product.price;
    }


    return `**Dados do Cliente:**
Nome: ${name}
Endereço: ${address.street} - ${address.number} - (${address.complement})
${address.district} - ${address.city} 
---------
**Pedido:**
${orderProducts.join("\n")}

Total: R$ ${subtotal.toFixed(2)}`;
}