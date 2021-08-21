function showBtnAnimation() {
  const btn = document.querySelector('.btn');

  btn.addEventListener('mouseover', function(e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
  
    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);
    
    setTimeout(() => {
      ripples.remove();
    }, 1000);
  });
}

const init = function () {
  showBtnAnimation();
};

document.addEventListener('DOMContentLoaded', init);