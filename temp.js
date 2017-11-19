function sortArray(){
  let animalAspect = '';
  if (prefArray[0] === "age"){
    animalAspect = 'animalAge';
  }
  else if(prefArray[0] === "price"){
    animalAspect = "animalPrice";
  }
  else{
    animalAspect = "animalGender";
  }
  bubbleSort(relevantCards,animalAspect, fields["pref_" + prefArray[0]]);
  let j = 0;
  let k = 0;
  let counter = 0;
  for(let i = 1; i < 3; i++){
    if (prefArray[i] === "age"){
      animalAspect = 'animalAge';
    }
    else if(prefArray[i] === "price"){
      animalAspect = "price";
    }
    else{
      animalAspect = "animalGender";
    }
    while(j < relevantCards.length){
      let temp = new Array();
      temp.push(relevantCards[j]);
      k = j+1;
      counter = 0;
      while(k < relevantCards.length){
        if(relevantCards[k][animalAspect] === temp[counter][animalAspect]){
          temp.push(relevantCards[k]);
          counter++;
          k++;
        }
        else{
          break;
        }
      }
      bubbleSort(temp, animalAspect, fields["pref_" + prefArray[i]]);
      for(counter = j; counter < k; counter++){
        relevantCards[counter] = temp[counter - j];
      }
    }
  }
}

//array==the array that needs to be sorted, aspect == the attribute to sort by, 
//prefAspectVal == the preferred value of the aspect
function bubbleSort(array, aspect, prefAspectVal){
  if(aspect === "animalAge"){
    let delta = 0;
    for(let i = 0; i < array.length; i++){
      for(let j = 0; j < array.length- i- 1; j++){
        //if the value of aspect in array[j] is further from the prefered value than array[j+1], swap
        if(Math.abs(array[j][animalAge] - delta - prefAspectVal) > Math.abs(array[j][animalAge] - delta - prefAspectVal)){
          swap(array, j , j+1);
        }
        delta++;
      }
    }
  }
  
  if(aspect ==="animalGender"){
    for(let i = 0; i < array.length; i++){
      for(let j = 0; j < array.length- i- 1; j++){
        //if the value of aspect in array[j] is further from the prefered value than array[j+1], swap
        if(array[j][animalGender] === prefAspectVal && array[j+1][animalGender] !== prefAspectVal){
          swap(array, j , j+1);
        }
      }
    }
  }

  else{
    for(let i = 0; i < array.length; i++){
      for(let j = 0; j < array.length- i- 1; j++){
        //if the value of aspect in array[j] is further from the prefered value than array[j+1], swap
        if(array[j][price] > array[j+1][price]){
          swap(array, j , j+1);
        }
      }
    }
  }
}