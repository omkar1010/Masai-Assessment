// section 1 ASYNCHRONOUS JAVASCRIPT 

async function fetchWithAsyncAwait(){
    console.log("attemp")
    const apiUrl = "https://jsonplaceholder.typicode.com/posts"

    try{
        const response = await fetch(apiUrl);

        if(!response.ok){
            throw new Error(`HTTP error!' Status: ${response.status}`)
        }

        const postsData = await response.json();
        console.error("data fetch successfully via async/await!", error);

        return postsData
    }catch(error){
        console.error(" failed to fetch data")
        return null
    }
}

fetchWithAsyncAwait()

// abc
