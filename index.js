const URL ='https://jsonplaceholder.typicode.com'

$('#btn').on('click', ()=> {
    $.get(`${URL}/users`, (response, status)=>{
        if (status === 'success') {
            console.log(response)
            for (const user of response) {
                $('body').prepend(`
                <h3>${user.name}</h3>
                `)
            }
        }

    })
})

$('#btnCreate').on('click', ()=> {
    $.ajax({
        method: 'POST',
        url: `${URL}/users`,
        body: { username: 'Oscar'},
        success: (response) => {
            console.log(response)
        }
    })
})