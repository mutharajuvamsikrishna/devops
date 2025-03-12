const Reacttask=()=>{
    function fetchData(callback) {
        // Simulate fetching data from an API after 2 seconds
        setTimeout(function() {
          const data = { name: "John", age: 30 };
          // Call the callback function and pass the fetched data
          callback(data);
        }, 2000);
      }
      
      // Callback function to handle the fetched data
      function handleData(data) {
        console.log("Received data:", data);
      }
      function handleData1(data){
        console.log("Received data1:", data);
      }
      // Call fetchData and pass the handleData function as a callback
      fetchData(handleData);
      fetchData(handleData1)
      function outer(){
        let b=9;
    function inner(){
    return b;
    }
    return inner;
      }
      let c=outer();
      console.log(c())

       function delay(ms){  
    return new Promise(resolve=>setTimeout(resolve,ms))
      }
      // Example usage of the delay function
     function example() {
      console.log("Start");
      
       delay(2000);
      
      console.log("After delay");
    }
    
    example();
}