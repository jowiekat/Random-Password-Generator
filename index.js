const btnEl = document.getElementById("btn");
const pwordEl = document.getElementById("pword")


const apiKey = "vC5yQ9LrgN5LKWwsi5TRkg==gEnMwa8TtpGXTbjh";

const options = {
    method: "GET",

     headers: { "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/passwordgenerator?length=16"
async function getPassword() {
try {
    pwordEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";

const response = await fetch(apiURL,options);
const data = await response.json();

btnEl.disabled = false;
btnEl.innerText = "New Password";

pwordEl.innerText = (data.random_password);
 
} catch (error) {
    
}
}
 

 


btn.addEventListener("click", getPassword);
