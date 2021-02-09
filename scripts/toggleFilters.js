export const toggleFilters = function() {

    const trigger = document.querySelector('.sidebar__trigger');
    const sideBar = document.querySelector('.sidebar');

    trigger.addEventListener('click', () => {
        sideBar.classList.toggle('open');
    })
    
}

