const masculino = [
    {
        minimo: [
            {
                meses: 26,
                minimos: [
                    a = 100,
                    b=1000,
                    c=400,
                    d=400
                ]
            },
            {
                meses: 27,
                minimos: [
                    a= 400,
                    b=600,
                    c=200,
                    d=300
                ]
            },
            {
                meses: 28,
                minimos: [
                    a= 900,
                    b=1000,
                    c=200,
                    d=500
                ]
            },
            {
                meses: 29,
                minimos: [
                    a= 100,
                    b=1000,
                    c=1000,
                    d=900
                ]
            },
            {
                meses: 30,
                minimos: [
                    a= 600,
                    b=1000,
                    c=600,
                    d=1000
                ]
            }
        ]
    },
    {
        maximo: [
            {
                meses: 26,
                maximos: [
                    a= 4900,
                    b=4700,
                    c=5000,
                    d=4400
                ]
            },
            {
                meses: 27,
                maximos: [
                    a= 4700,
                    b=4400,
                    c=4700,
                    d=4700
                ]
            },
            {
                meses: 28,
                maximos: [
                    a= 4600,
                    b=5000,
                    c=5000,
                    d=4300
                ]
            },
            {
                meses: 29,
                maximos: [
                    a= 4600,
                    b=4400,
                    c=4200,
                    d=4900
                ]
            },
            {
                meses: 30,
                maximos: [
                    a= 4500,
                    b=4900,
                    c=4600,
                    d=4300
                ]
            }
        ]
    }

]


/* 
    Por falta de Tiempo ya no hice Femeninos pero es solo cuestion de llenar el objetos con sus arrays
    La logica ya esta lista

*/


const femenino = []

document.addEventListener('DOMContentLoaded', ()=>{
    const  btnCalcular = document.querySelector('#btnCalcular')
    const type = document.querySelector('#type')
    const date = document.querySelector('#date')
    const sex = document.querySelector('#sex')
    //TODO: validar form



    btnCalcular.addEventListener('click', ()=> calculoMotor(type.value, date.value, sex.value))
})



function calculoMotor(tipoNomina, fechaPrimerEmpleo, genero){
    const primerEmpleo  = new Date(fechaPrimerEmpleo)
    const hoy = new Date();
    const meses = hoy.getMonth() - primerEmpleo.getMonth() + (12 * (hoy.getFullYear() - primerEmpleo.getFullYear()))
    const data = (genero.toLowerCase() === 'm') ? masculino : femenino
    const table = document.querySelector('#content')
    const tr = document.createElement('tr')
    let td = document.createElement('td')
    tipos = ['A', 'B', 'C', 'D']
    td.textContent= tipos[tipoNomina]
    tr.append(td)
    td = document.createElement('td')
    td.textContent= fechaPrimerEmpleo
    tr.append(td)
    td = document.createElement('td')
    td.textContent= genero
    tr.append(td)
    let montoMaximo, montoMinimo
    console.log("MESES", meses)
    data.map(row=>{
        if(row.minimo){
            row.minimo.forEach(item => {
                
                
                if(Number(meses) <27){
                    if(Number(item.meses) <27){
                        montoMinimo = item.minimos[tipoNomina]

                    }
                }else if(Number(meses) >= 30){
                    if(Number(item.meses) ==30){
                        montoMinimo = item.minimos[tipoNomina]
     
                    }
                }else{
                    montoMinimo = item.minimos[tipoNomina]
                    console.log("epa", montoMinimo)
                    return
                }                
            });
            
        }
        if(row.maximo){
            row.maximo.forEach(item => {
                console.log("item", item)
                if(meses <27){
                    if(Number(item.meses) <27){
                        montoMaximo = item.maximos[tipoNomina]
                        return
                    }
                }else if(meses >=30){
                    if(item.meses ==30){
                        montoMaximo = item.maximos[tipoNomina]
                        return
                    }
                }else{
                    montoMaximo = item.maximos[tipoNomina]
                    return
                }                
            });
        }

    })
    td = document.createElement('td')
    td.textContent= montoMinimo
    tr.append(td)

    td = document.createElement('td')
    td.textContent= montoMaximo
    tr.append(td)

    p1 = montoMinimo + Math.sqrt(montoMaximo - montoMinimo)
    p2 = montoMinimo + 0.0175 * (montoMaximo - montoMinimo)
    lineaCreditoOptima = Math.max(p1, p2)
    td = document.createElement('td')
    td.textContent= lineaCreditoOptima
    tr.append(td)
    
    table.appendChild(tr)

}