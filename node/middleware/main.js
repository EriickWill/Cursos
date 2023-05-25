function passo1(ctx,next){
    ctx.paz = 'Olá mundo'

    next()
}

function passo2(ctx,next){
    ctx.p = "Bom dia"

    next()
}

function passo3(ctx,next){
    ctx.pa = "Bom tarde"
}

function main(ctx,...middleware){
    const iniciar = index =>{
       if(middleware && index < middleware.length){
            middleware[index](ctx, ()=> iniciar(1+index))
       }               
    }

    iniciar(0)
}


let ctx = {}

main(ctx,passo1,passo2,passo3)
console.log(ctx)