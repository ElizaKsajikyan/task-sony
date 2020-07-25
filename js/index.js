const sidebarBtn = document.querySelector('.sidebar-btn'),
    sidebarContainer = document.querySelector('.aside-menu'),
    subHeader = document.querySelector('#sub-header'),
    clientsBtn = document.querySelector('#clients-btn'),
    filter = document.querySelector('#filter'),
    accordeonToggle = document.querySelector('#accordeon-toggle'),
    filterForm = document.querySelector('#filter-form'),
    clientsContainerOpen = document.querySelector('.clients-container-open'),
    infoTable = document.querySelector('.info-table'),
    resizeBtn = document.querySelector('.resize-btn'),
    userInformation = document.querySelector('.user-information'),
    clientRsize = document.querySelector('.client-rsize'),
    tabHeaderBtn = document.querySelector('.tab-header'),
    tabHeaderBtnLink = document.querySelectorAll('.tab-header>li'),
    tabHeaderBtns = document.querySelectorAll('.tab-header-btn'),
    tubItem = document.querySelectorAll('.tub-item'),
    tabContainer = document.querySelector('.tab-container');

let toggleBul = false,
    filterOpen = false,
    accordeonOpenToggle = false,
    urlQuery = window.location.hash;

function tabButtonsLength() {
    for (let i = 0; i < tabHeaderBtnLink.length; i++) {
        tabHeaderBtnLink[i].classList.toggle('toggle')
    }
}

function toggleSidebar() {
    sidebarBtn.classList.toggle('active');
    sidebarContainer.classList.toggle('active');
    subHeader.classList.toggle('toggle-left');
    tabContainer.classList.toggle('toggle-left');
    if (toggleBul) {
        tabButtonsLength()
    }
}

sidebarBtn.addEventListener('click', toggleSidebar);

function toggleClients() {
    clientsContainerOpen.classList.toggle('active');
    infoTable.classList.toggle('active');
    tabContainer.classList.toggle('m-left');

    if (toggleBul) {
        clientRsize.classList.remove('w-100');
        clientsContainerOpen.classList.remove('rsize');
        userInformation.classList.remove('d-none');
        infoTable.classList.remove('w-100')
    } else {
        setTimeout(() => {

            tabButtonsLength();
        }, 100)
    }
}

clientsBtn.addEventListener('click', toggleClients);

function toggleResizer() {
    toggleBul = !toggleBul;
    userInformation.classList.toggle('d-none');
    clientRsize.classList.toggle('w-100');
    clientsContainerOpen.classList.toggle('rsize');
    infoTable.classList.toggle('w-100');

}

resizeBtn.addEventListener('click', toggleResizer);


// tab functionality

function tabChange() {
    setTimeout(() => {
            urlQuery = window.location.hash || '#dashboard';

            for (let i = 0; i < tabHeaderBtns.length; i++) {
                if (tabHeaderBtns[i].getAttribute('href') === urlQuery) {
                    tabHeaderBtns[i].classList.add(('active'))
                } else {
                    tabHeaderBtns[i].classList.remove(('active'))
                }
            }
            for (let k = 0; k < tubItem.length; k++) {
                if (tubItem[k].getAttribute('id') === urlQuery.replace('#', '')) {
                    tubItem[k].classList.add(('active'))
                } else {
                    tubItem[k].classList.remove(('active'))
                }
            }
        },
        0
    )
}
tabChange();
tabHeaderBtn.addEventListener('click', tabChange);


function filterToggle() {
    filterOpen = !filterOpen;
    filterForm.classList.toggle('d-none');
    filterForm.classList.toggle('d-flex');
    filterForm.reset();
    filterOpen ? this.innerHTML = 'Close' : this.innerHTML = 'Filter'
}
filter.addEventListener('click', filterToggle);


// accordeon
const acc = document.querySelectorAll('.accordion-btn');
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        this.classList.toggle('open');
        let panel = this.parentNode;
        panel.nextElementSibling.classList.toggle('d-none');
    });
}

function toggleAllAccordeon() {
    let arr = [...acc
        ]
    ;

    arr.filter((el) => {
        if (el.classList.contains('open')
        ) {
            accordeonOpenToggle = true
        }
    })
    if (accordeonOpenToggle) {
        for (i = 0; i < acc.length; i++) {
            acc[i].classList.remove('open');
            let panel = acc[i].parentNode;
            panel.nextElementSibling.classList.add('d-none');
            accordeonOpenToggle = false
        }
    } else {
        for (i = 0; i < acc.length; i++) {
            acc[i].classList.add('open');
            let panel = acc[i].parentNode;
            panel.nextElementSibling.classList.remove('d-none');
        }
    }
}
accordeonToggle.addEventListener('click', toggleAllAccordeon);
