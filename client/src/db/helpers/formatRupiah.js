function formatRupiah(price = 0){
    return price.toLocaleString("id-ID", {style: "currency", currency: "IDR"})

}

export default formatRupiah 