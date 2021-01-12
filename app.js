(function() {
        const dropdown = document.querySelector('.dropdown');
        const dm = document.querySelector('.dropdown-menu');
        const button = document.getElementById('navbarDropdown');
        console.log(button)
        button.addEventListener('click', function(){
            console.log('works')
            if(dropdown.classList.contains('show')){
                dropdown.classList.remove('show');
                dm.classList.remove('show');
            }
            else {
                dropdown.classList.add('show');
                dm.classList.add('show');
            }
        });
    }
)();