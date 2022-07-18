const productos = []

const lista = document.querySelector('#listado')

fetch('file:///C:/Users/Sansung/OneDrive/Escritorio/cacu/javascritp/proyecto%20final%20-%203/data.json')
    .then( (res) => res.json())
    .then( (data) => {

        data.forEach((producto) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <h4>${producto.nombre}</h4>
                <p>${producto.precio}</p>
                <p>Código: ${producto.id}</p>
                <hr/>
            `
            lista.append(li)
        })
    })