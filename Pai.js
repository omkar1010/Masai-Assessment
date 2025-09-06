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


/**
 * SECTION 1: ASYNCHRONOUS JAVASCRIPT
 */

// 1a. Main function using Async/Await and a try...catch block
// async function fetchPostsWithAsyncAwait() {
//     console.log("1a. 🚀 Attempting to fetch data using async/await...");
//     const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

//     try {
//         const response = await fetch(apiUrl);

//         // Handle potential HTTP errors (e.g., 404 Not Found)
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const postsData = await response.json();
//         console.log("✅ Data fetched successfully via async/await!");
//         // We will process this data in Section 2 & 3.
//         return postsData; // Return data for further processing

//     } catch (error) {
//         console.error("❌ Failed to fetch data with async/await:", error);
//         return null; // Return null on failure
//     }
// }

// // 1b. Demonstration of a Promise Chain with .then() and .catch()
// function demonstratePromiseChain() {
//     console.log("\n1b. 🔗 Demonstrating a Promise Chain...");
//     fetch('https://jsonplaceholder.typicode.com/posts/1') // Fetching a single post
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json(); // .json() also returns a promise
//         })
//         .then(data => {
//             console.log("✅ Promise Chain Success. Received post 1:", data);
//         })
//         .catch(error => {
//             console.error("❌ Promise Chain Error:", error);
//         });
// }

// // 1c. Demonstration of a simple Callback function
// function demonstrateCallback(callback) {
//     console.log("\n1c. 📞 Demonstrating a Callback Function...");
//     // Simulate an async operation like reading a file or a timer
//     setTimeout(() => {
//         // Standard callback pattern is (error, result)
//         const error = null; // Simulate success
//         const result = "Callback executed successfully after 1.5 seconds!";
//         callback(error, result);
//     }, 1500);
// }


// /**
//  * SECTION 2: DATA & LOGIC
//  */

// // 2a. Closure to create a function that maintains a private state
// // This IIFE (Immediately Invoked Function Expression) creates a private
// // 'fetchCounter' variable. The returned function is the only way to access it.
// const createFetchTracker = () => {
//     let fetchCounter = 0; // This state is private to the returned function
//     return () => {
//         fetchCounter++;
//         console.log(`\n📈 The fetch operation has been initiated ${fetchCounter} time(s).`);
//     };
// };

// // Create an instance of our tracker
// const trackFetch = createFetchTracker();

// // 2b. Function to process the fetched data
// function processData(postsData) {
//     if (!postsData) {
//         console.log("No data to process.");
//         return;
//     }

//     console.log("\n2b. ⚙️  Processing data...");

//     // Use higher-order function `reduce` to perform an aggregation.
//     // We will count the number of posts for each `userId`.
//     const postsPerUser = postsData.reduce((accumulator, post) => {
//         const userId = post.userId;
//         // If the user's ID isn't a key in our accumulator object, add it.
//         // Otherwise, increment the existing count.
//         accumulator[userId] = (accumulator[userId] || 0) + 1;
//         return accumulator;
//     }, {}); // The initial value for the accumulator is an empty object {}.

//     console.log("📊 Aggregation complete. Number of posts per user:", postsPerUser);

//     // The use of `.map()` will be shown in the next section where we
//     // transform the raw data into `Post` objects.
// }


// /**
//  * SECTION 3: OBJECT-ORIENTED CONCEPTS
//  */

// // 3a. Create a Constructor Function named 'Post'
// function Post(id, userId, title, body) {
//     // The 'this' keyword refers to the new object being created
//     this.id = id;
//     this.userId = userId;
//     this.title = title;
//     this.body = body;
// }

// // 3b. Add a method to the 'Post' prototype
// // This is memory efficient as the function is defined only once and
// // shared among all instances of Post.
// Post.prototype.logDetails = function() {
//     // Here, 'this' refers to the specific instance the method is called on
//     console.log(`--- Post Title: ${this.title} ---`);
//     console.log(`Body: ${this.body}\n`);
// };

// // 3c. Use the constructor to create an array of 'Post' objects
// function createPostObjects(postsData) {
//     if (!postsData) {
//         console.log("Cannot create Post objects, no data available.");
//         return;
//     }
//     console.log("\n3c. 🏭 Creating Post objects using the constructor...");

//     // Use higher-order function `map` to transform each raw data object
//     // into an instance of our 'Post' constructor.
//     const postObjects = postsData.map(post => new Post(post.id, post.userId, post.title, post.body));

//     console.log("✅ Array of Post objects created successfully.");
//     console.log("Example of the first Post object:", postObjects[0]);

//     // Demonstrate the prototype method on the second post
//     console.log("\nLogging details for the second post using the prototype method:");
//     if (postObjects.length > 1) {
//         postObjects[1].logDetails();
//     }
    
//     return postObjects;
// }


// /**
//  * SECTION 4: CORE JAVASCRIPT CONCEPT EXPLANATIONS
//  */

// // ### Execution Contexts and the Call Stack ###
// //
// // When JavaScript code is run, the engine creates an 'Execution Context', which is the
// // environment where the code is executed.
// //
// // 1.  **Global Execution Context (GEC):** This is the base context, created when the script
// //     first loads. Code outside of any function runs here.
// //
// // 2.  **Function Execution Context (FEC):** A new context is created every time a function
// //     is called. It is placed on top of the current context.
// //
// // The **Call Stack** is a LIFO (Last-In, First-Out) structure that manages these contexts.
// // - When the script starts, the GEC is pushed onto the stack.
// // - When a function `A` is called, its FEC is pushed on top.
// // - If function `A` calls function `B`, `B`'s FEC is pushed on top of `A`'s.
// // - When function `B` returns, its context is popped off the stack.
// // - When function `A` returns, its context is popped off.
// //
// // Asynchronous operations like `fetch` are handled by Web APIs (in the browser), not the
// // main Call Stack. When the async task finishes, its callback function is placed in a
// // queue (the Microtask Queue for Promises). The **Event Loop** waits for the Call Stack to
// // be empty and then moves the first item from the queue to the stack for execution. This
// // prevents blocking and keeps the application responsive.

// // ### The `this` Keyword ###
// //
// // The `this` keyword refers to the object that is currently executing the code. Its value
// // is determined by *how* a function is called.
// //
// // - **In a Constructor Function (like `Post`):** `this` refers to the new instance of the
// //   object that is being created.
// //
// // - **In a Prototype Method (like `logDetails`):** When called as `myPost.logDetails()`,
// //   `this` refers to the object on the left of the dot (`myPost`), which is the specific
// //   instance the method was called on.
// //
// // - **In the Global Context:** Outside any function, `this` refers to the global object
// //   (`window` in a browser).


// // This is the main execution flow that ties all sections together.

// async function main() {
//     // Section 1 & 2: Use the closure and fetch data
//     trackFetch();
//     const rawData = await fetchPostsWithAsyncAwait();

//     // Section 2: Process the fetched data
//     processData(rawData);

//     // Section 3: Create objects from the data
//     createPostObjects(rawData);

//     // Section 1 (continued): Run other async demonstrations
//     demonstratePromiseChain();
//     demonstrateCallback((error, result) => {
//         if (error) {
//             console.error("Callback Demo Error:", error);
//         } else {
//             console.log("Callback Demo Result:", result);
//         }
//     });
// }

// // Start the application
// main();