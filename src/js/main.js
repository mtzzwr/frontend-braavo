const buttonClick = () => {
    let name_field = document.getElementById('name_field')
    let email_field = document.getElementById('email_field')

    validFields(name_field.value, email_field.value)
}

const validFields = (name_field, email_field) => {
    const re = /\S+@\S+\.\S+/
    if(name_field == '' || email_field == ''){
        alert('Por favor, preencha todos os campos')
    }else if(!re.test(email_field)){
        alert('E-mail não é válido')
    }else{
        alert(`Bem vindo, ${name_field}!!!`)
    }
}
