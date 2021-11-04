function checkForURL(inputText) {
    // regex found on https://stackoverflow.com/questions/1500260/detect-urls-in-text-with-javascript
    const httpRegEx = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    console.log("::: Running checkForURL :::", inputText);


    if(inputText.match(httpRegEx)) {
        console.log('This is an URL!')
        return true
    }
    return false
}

export { checkForURL }
