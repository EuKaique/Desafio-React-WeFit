export function formatPrice(value: number){
    const price = value;
    
    return price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}