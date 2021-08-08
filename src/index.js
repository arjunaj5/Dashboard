sideNavListArray = document.querySelectorAll('.offcanvas-body ul li');

sideNavListArray = [...sideNavListArray]
sideNavListArray.map((li) => {
    li.addEventListener('click', () => {
        remove = document.querySelector('.offcanvas-body ul li.active')
        remove.classList.remove('active')
        li.classList.add('active')
    })
})

topNavListArray = document.querySelectorAll('.main nav ul li');

topNavListArray = [...topNavListArray]
topNavListArray.map((li) => {
    li.addEventListener('click', () => {
        remove = document.querySelector('.main nav ul li.active')
        remove.classList.remove('active')
        li.classList.add('active')

    })
})

weekButtons = document.querySelectorAll('.weeks button')
weekButtons = [...weekButtons]
weekButtons.map((button) => {
    button.addEventListener('click', () => {
        button.classList.contains('btn-outline-success') ?
            button.classList.remove('btn-outline-success') :
            button.classList.add('btn-outline-success')

    })
})

function handleSubmit() {
    form = document.getElementById('myForm')
    formArray = [...form]
    let scheduleName = formArray[0].value
    let startDate = formArray[1].value
    let endDate = formArray[2].value
    let noWeeks = formArray[3].value

    populateWithAccordion(scheduleName, startDate, endDate, noWeeks)
}
function populateWithAccordion(name, start, end, noWeeks) {
    let htmlAccordion = `
    
    <div class="card p-1 my-3">
    <div class="accordion-item border-0 ">
        <h2 class="accordion-header" id= "${start}">
            <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                data-mdb-target="#collapse${start}" aria-expanded="true" aria-controls="collapse${start}">
                <div class="d-flex justify-content-between flex-column flex-lg-row ">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text fw-light">
                            ${noWeeks} weeks | 12 sessions
                        </p>
                    </div>

                </div>

            </button>
            <div class="position-absolute icons-del-edit">
                <img class="mx-2" src="../src/media/icons/pencil.svg" alt="">
                <img class="mx-2 " src="../src/media/icons/dustbin.svg" alt="">
            </div>
        </h2>


        <div id="collapse${start}" class="accordion-collapse collapse show" aria-labelledby="heading${name}"
            data-mdb-parent="#accordionExample">
            <div class="accordion-body px-0">


                <div class="d-flex justify-content-between flex-column flex-lg-row ">
                    <div class="card-body">
                        <p class="card-text mb-0 fw-normal">
                            START DATE
                        </p>
                        <h5 class="card-title">${start}</h5>
                    </div>
                    <div class="card-body">
                        <p class="card-text mb-0 fw-normal">
                            END DATE
                        </p>
                        <h5 class="card-title">${end}</h5>
                    </div>
                    <div class="p-4">
                        <button class="btn green text-white  my-auto"
                            data-mdb-ripple-color="dark">Update</button>
                    </div>

                </div>

                <div class="weeks card-body d-flex justify-content-between flex-column flex-lg-row ">

                    <button type="button" class="btn btn-outline-success  mx-1">
                        <div class="round"></div>
                        Sunday
                    </button>
                    <button type="button" class="btn   mx-1">
                        <div class="round"></div>
                        Monday
                    </button>
                    <button type="button" class="btn   mx-1">
                        <div class="round"></div>
                        Tuesday
                    </button>
                    <button type="button" class="btn   mx-1">
                        <div class="round"></div>
                        Wednesday
                    </button>
                    <button type="button" class="btn   mx-1">
                        <div class="round"></div>
                        Thursday
                    </button>
                    <button type="button" class="btn   mx-1">
                        <div class="round"></div>
                        Friday
                    </button>
                    <button type="button" class="btn   mx-1">
                        <div class="round"></div>
                        Saturday
                    </button>
                </div>

            </div>
        </div>
    </div>
</div>
    `;
    let accordion = document.getElementById('accordionExample')
    var div = document.createElement('div');
    div.innerHTML = htmlAccordion.trim();
    accordion.appendChild(div)


}

