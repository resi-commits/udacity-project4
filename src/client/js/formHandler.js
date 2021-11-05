function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (Client.checkForURL(formText)) {
        console.log("::: Form Submitted :::")
        requestMeaning('http://localhost:8081/meaning', {url: formText}).then((data)=>{
            updateUI(data);
            })
    } else {
        alert('Please enter a valid URL into the field!')
    }
}


const requestMeaning = async (url = "", data = {}) => {
    console.log(url, data)
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        console.log(res)
        return await res.json()
    } catch(error) {
        console.log('error', error);
    }
}
// async function to get all data stored in the projectData
const updateUI = async (data)=>{
    console.log(data)
    document.getElementById('url').innerHTML = `You requested this URL: ${data.url}`;
    document.getElementById('scoreTag').innerHTML = `Score Tag: ${data.scoreTag}`;
    document.getElementById('agreement').innerHTML = `Agreement: ${data.agreement}`;
    document.getElementById('confidence').innerHTML = `Confidence: ${data.confidence}`;
    document.getElementById('irony').innerHTML = `Irony: ${data.irony}`;
    document.getElementById('subjectivity').innerHTML = `Subjectivity: ${data.subjectivity}`;
}
    
      
    
export { handleSubmit }