import { members } from './members.js';

export const filterList = function () {
    const membersList = members;
    const categoryButton = document.querySelectorAll('.filters__categories__item');
    const tilesContainer = document.querySelector('.tiles');
    let chosenCategory = '';
    categoryButton.forEach((category) => {
        category.addEventListener('click', (e) => {
            let prevChosenElem = document.querySelector('.filters__categories__item.selected');
            prevChosenElem.classList.remove('selected');
            let chosenElem = e.target;
            chosenElem.classList.add('selected');
            chosenCategory = e.target.dataset.category;
            let filteredMembers = [];
            let tilesArray = [];
            if (chosenCategory === "All") {
                filteredMembers = membersList;
            } else {
                membersList.forEach((member) => {
                    if (member.category === chosenCategory) {
                        filteredMembers.push(member);
                    }
                })
            }
            filteredMembers.slice(0, 9).forEach((member) => {
        
                let tilesItem = `
                <div class="tiles__item">
                    <div class="tiles__item__image-holder">
                        <img class="tiles__item__image" src="img/member-${member.memberId}.jpg">
                    </div>
                    <div class="tiles__item__title">
                        <div class="tiles__item__title__name">${member.name}</div>
                        <div class="tiles__item__title__job">${member.jobTitle}</div>
                    </div>
                </div>
            `
                tilesArray.push(tilesItem);
            });

            tilesContainer.innerHTML = tilesArray.join('');
        })
    })
};