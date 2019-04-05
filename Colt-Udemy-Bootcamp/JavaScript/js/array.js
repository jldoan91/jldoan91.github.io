function printReverse(arr)
  for (var i = arr.length - 1; i >= 0 ;i--){
    console.log(arr[i]);
  }
}

function isUniform(uni){
  for(var i = 1; i < uni.length; i++){
    if (uni[0] !== uni[i]){
      return false;
    }
  }
  return true;
}

function sumArray(nums){
  var total = 0;
  for(var i = 0; i <= nums.length - 1; i++){
    total += nums[i];
  }
  console.log(total);
}

function max(ints){
  var max = 0;
  for(var i = 0; i < ints.length; i++){
    if(ints[i] > max){
      max = ints[i];
    }
  }
  console.log(max);
}
