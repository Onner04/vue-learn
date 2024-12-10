const handleFormError = (error,formErrorMessage) => {
    formErrorMessage.value = {}
    if(error.response.status == 422){
        Object.keys(error.response.data.errors).forEach(key => {
            console.log(error.response.data.errors[key][0]);
            formErrorMessage.value[key] = error.response.data.errors[key][0]
        })
    } else{
        formErrorMessage.value.message = error.response.data.message
    }
}
export default handleFormError