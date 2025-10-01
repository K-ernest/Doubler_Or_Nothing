//   // if user has a todo before print to screen 
// for (let i = 0; i < localStorage.length; i++) { // looping through the number of items stored

//     let key = localStorage.key(i); // key to access the value 
//     let StoredObject = JSON.parse(localStorage.getItem(key)) ; // getting stored object with the corresponding key
      
//     let StoredButtonState = Object.keys(StoredObject)  // getting the key value inside the object to know th button state
//     let StoredTodoValue = StoredObject[StoredButtonState] // getting the value inside the object using the it's key value or button state

//     printTodoToScreen(StoredTodoValue, StoredButtonState[0]) // sending it to the function to print

//   }

// // function to m
// function todoStorage() {
//     let indexNumber = 0; 
  
//     $('.task-information').each((index, element) => {
  
//         let SettingButtonState =  $(element).find('button'); // finding the button inside task-information
//         const spanText =  $(element).find('span').text(); //  finding the span element inside task-information and getting the text inside
  
//         SettingButtonState = $(SettingButtonState).hasClass('tick') ? 'tick' : 'noclass' ; // checking the todo has been ticked as completed or not using the button
//         localStorage.setItem( [indexNumber += 1], JSON.stringify({[SettingButtonState] : spanText}) ); // saving/updating the saved todo 
//       } )
  
//   }