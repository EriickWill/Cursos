function soBoaNota(nota){
    if(nota>=9){
        console.log("Nota Exemplar: " + nota)
    }else if(nota>=7 && nota<9){
        console.log("Nota boa: "+ nota)
    }else if(mota>=5 && nota<7){
        console.log("Nota média: " + nota)
    }else{
        console.log("Péssima nota: " + nota)
    }
}
soBoaNota(8)