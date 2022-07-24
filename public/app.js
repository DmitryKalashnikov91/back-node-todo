

document.addEventListener('click', event => {
    if (event.target.dataset.type === 'remove') {
        const id = event.target.dataset.id

        remove(id).then(() => {
            event.target.closest('li').remove()
        })
    } else if (event.target.dataset.type === 'edit') {
        const result = prompt('Ввудите новое название', `${event.target.value}`)
        console.log(event.target.value)
    }
})


async function remove(id) {
    await fetch(`/${id}`, {method: 'DELETE'})
}
async function edit(title) {
    await fetch(`/${title}`, {method: 'EDIT'})
}