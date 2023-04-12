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


const femenino = [{
        minimo: [
            {
                meses: 24,
                minimos: [
                    a = 800,
                    b=800,
                    c=200,
                    d=500
                ]
            },
            {
                meses: 25,
                minimos: [
                    a= 800,
                    b=700,
                    c=900,
                    d=1000
                ]
            },
            {
                meses: 26,
                minimos: [
                    a= 800,
                    b=100,
                    c=700,
                    d=600
                ]
            },
            {
                meses: 27,
                minimos: [
                    a= 600,
                    b=600,
                    c=800,
                    d=400
                ]
            },
            {
                meses: 28,
                minimos: [
                    a= 200,
                    b=700,
                    c=100,
                    d=700
                ]
            }
        ]
    },
    {
        maximo: [
            {
                meses: 24,
                maximos: [
                    a= 400,
                    b=4700,
                    c=4600,
                    d=5000
                ]
            },
            {
                meses: 25,
                maximos: [
                    a= 4200,
                    b=4200,
                    c=4900,
                    d=4900
                ]
            },
            {
                meses: 26,
                maximos: [
                    a= 4100,
                    b=4500,
                    c=4600,
                    d=4700
                ]
            },
            {
                meses: 27,
                maximos: [
                    a= 4200,
                    b=4300,
                    c=4700,
                    d=5000
                ]
            },
            {
                meses: 28,
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
    td.textContent= genero.toUpperCase()
    tr.append(td)
    let montoMaximo, montoMinimo
    console.log("MESES", meses)
    console.log("data", data)
    data.map(row=>{
        if(row.minimo){
            row.minimo.forEach(item => {
                if(genero.toLowerCase() == 'm'){
                    if(Number(meses) <27){
                        if(Number(item.meses) <27){
                            montoMinimo = item.minimos[tipoNomina]

                        }
                    }else if(Number(meses) >= 30){
                        if(Number(item.meses) == 30){
                            montoMinimo = item.minimos[tipoNomina]
                        }
                    }else{
                        montoMinimo = item.minimos[tipoNomina]
                        return
                    } 
                }else{
                    if(Number(meses) <25){
                        if(Number(item.meses) <25){
                            montoMinimo = item.minimos[tipoNomina]

                        }
                    }else if(Number(meses) >= 28){
                        if(Number(item.meses) == 28){
                            montoMinimo = item.minimos[tipoNomina]
                        }
                    }else{
                        montoMinimo = item.minimos[tipoNomina]
                        return
                    } 
                }              
            });
            
        }
        if(row.maximo){
            row.maximo.forEach(item => {
                if(genero.toLowerCase() == 'm'){
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
                }else{
                    if(Number(meses) <25){
                        if(Number(item.meses) <25){
                            montoMaximo = item.maximos[tipoNomina]

                        }
                    }else if(Number(meses) >= 28){
                        if(Number(item.meses) == 28){
                            montoMaximo = item.maximos[tipoNomina]
                        }
                    }else{
                        montoMaximo = item.maximos[tipoNomina]
                        return
                    } 
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