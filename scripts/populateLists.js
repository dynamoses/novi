import { members } from './members.js';

export const populateLists = function () {

    const membersList = members;
    let categories = [];
    const filtersCategories = document.querySelector('.filters__categories');
    const tilesContainer = document.querySelector('.tiles');
    let tilesArray = [];
    membersList.forEach((member) => {
        if (!categories.includes(member.category)) {            
            categories.push(member.category);
            let categoryElem = document.createElement('span');
            categoryElem.classList.add('filters__categories__item');
            categoryElem.setAttribute('data-category', member.category);
            let text = document.createTextNode(member.category);
            categoryElem.appendChild(text);
            filtersCategories.appendChild(categoryElem)
        }
    })
    membersList.slice(0,9).forEach((member) => {
        
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

    })   

    tilesContainer.innerHTML = tilesArray.join('');
}