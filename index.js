function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    const leftNumber = dodger.style.right.replace('px','');
    const left = parseInt(leftNumber,10 );

    if (left > 0){
        dodger.style.right = `${right + 1}px`;
    }
}