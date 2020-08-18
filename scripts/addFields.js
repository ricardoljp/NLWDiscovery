//Look for the button
document.querySelector("#add-time").addEventListener('click', clonefield)
// When I click on the button

//perform the following action 
function clonefield() {
    //duplicate the fields for a schedule-item
   const newFieldcontainer = document.querySelector('.schedule-item').cloneNode(true)
    //clear the fields data
    const fields = newFieldcontainer.querySelectorAll('input')

    //clear each of the fields and set to  ""

    fields.forEach(function(field) {
        field.value = 0;
    })

    //place on the page: define where
    document.querySelector('#schedule').appendChild(newFieldcontainer)


}


