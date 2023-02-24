const form = document.querySelector('form');
const output = document.querySelector('.output');

const handleSubmit = function(event) {
  event.preventDefault();

  // Possible values for `day`: 
  // 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'
  const day = form.day.value; 

  // Possible values for `meal`: 
  // 'breakfast', 'lunch', 'dinner'
  const meal = form.meal.value; 

  console.log(day, meal);

  // Declare a variable to hold the answer
  let answer;

  /*************************************/
  /* ^^^ Don't edit the above code ^^^ */
  /*************************************/

  /***********************/
  /* Put your code below */
  /***********************/

  // Using if, else if and else blocks: assign a meal recommendation to `answer` based on the submitted options for `day` and `meal`.

  

  // ***********monday *************//
  
  if (day === 'mon' && meal=== 'breakfast') {
    answer = 'toest';
  }

  else if (day === 'mon' && meal=== 'lunch') {
    answer = 'rice with beans';
  }

  else if (day === 'mon' && meal=== 'dinner') {
    answer = 'pasta';
  }


  ///********Tuesday***********///
  
  if (day === 'tue' && meal=== 'breakfast') {
    answer = 'begal';
  }

  else if (day === 'tue' && meal=== 'lunch') {
    answer = 'chicken wrap';
  }

  else if (day === 'tue' && meal=== 'dinner') {
    answer = 'veggie soup';
  }

  ////*********Wednesday*******////

  if (day === 'wed' && meal=== 'breakfast') {
    answer = 'bacho';
  }

  else if (day === 'wed' && meal=== 'lunch') {
    answer = 'marqa';
  }

  else if (day === 'wed' && meal=== 'dinner') {
    answer = 'ugali';
  }

 ///// ******Thursday********/////

 if (day === 'thu' && meal=== 'breakfast') {
  answer = 'french toast';
}

else if (day === 'thu' && meal=== 'lunch') {
  answer = 'turkey sandwhich';
}

else if (day === 'thu' && meal=== 'dinner') {
  answer = 'chilli soup';
}


 //////*******Friday//////******** /

 if (day === 'fri' && meal=== 'breakfast') {
  answer = 'egg and cheese english muffin ';
}

else if (day === 'fri' && meal=== 'lunch') {
  answer = 'fettuccine pasta';
}

else if (day === 'fri' && meal=== 'dinner') {
  answer = 'rice with camal meat';
}


 /////////******Saturday*********///////

 if (day === 'sat' && meal=== 'breakfast') {
  answer = 'coffee with muffin';
}

else if (day === 'sat' && meal=== 'lunch') {
  answer = 'chipotle burger';
}

else if (day === 'sat' && meal=== 'dinner') {
  answer = 'wrap';
}


 ////////Sunday/////////

 if (day === 'sun' && meal=== 'breakfast') {
  answer = 'biscuit';
}

else if (day === 'sun' && meal=== 'lunch') {
  answer = 'wings';
}

else if (day === 'sun' && meal=== 'dinner') {
  answer = 'fried rice';
}
  // // For example: 
  // if (day === 'tue') {
  //   answer = 'tacos';
  // }
  

  /************************************/
  /* Don't edit the rest of this code */
  /************************************/

  output.innerHTML = answer;

}

form.addEventListener('submit', handleSubmit);