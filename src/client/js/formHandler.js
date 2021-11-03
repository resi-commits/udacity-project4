function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    getWeather(event).then(()=>{
        updateUI();
        })
    }
    
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=71069&units=metric'
    const apiKey = '&appid=fedf4384c03e6130b3fd1de93c0832b8'
    
    let d = new Date();
    let newDate = d.getDate()+'.'+ (d.getMonth()+1)+'.'+ d.getFullYear();
    
    let data = [];
    const getWeather = async (event) =>{
        const res = await fetch(baseURL+apiKey)
        try {
          data = await res.json();
          // console.log(data);
        } catch(error) {
          console.log("error", error);
        }
    }
      
    // async function to get all data stored in the projectData
    const updateUI = async ()=>{
        document.getElementById('results').innerHTML = data.main.temp;
    
    }
    
      
    
    export { handleSubmit }