var btn = document.getElementById('button');

btn.addEventListener('click', function(){
    if (this.classList.contains('active')){
        this.classList.remove('active')
        this.classList.asdd('not-activee')
    }
        else{
            this.classList.add('active')
            this.classList.remove('not-active')
        }
}); 
