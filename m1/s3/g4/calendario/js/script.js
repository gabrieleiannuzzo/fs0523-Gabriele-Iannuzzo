let now = new Date();
let today = new Date();
let dateObject = {
    day: '0',
    month: '0',
    year: '2023',
}

let date = 0;
let month = 0;  //variabili collegate alla funzione saveDay() e setToday()
setInterval(saveDay(), 1000); //eseguo ogni secondo un riassegnamento del giorno corretto alla variabile day tramite la funzione saveDay()

generateMonthName(); //genero una prima volta il nome del mese
generateDays(); // genero una prima volta il calendario
setToday(); // evidenzio una prima volta il giorno corrente
navigation(); // navigo tra i mesi e applico nuovamente le 3 funzioni qui sopra




function saveDay () {
    date = today.getDate();
    month = today.getMonth();
}




function generateMonthName () {
    const months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
    let month = document.querySelector("#first-div p");
    month.innerText = months[now.getMonth()];
}






function generateDays () {
    let calendar = document.getElementById("calendar");
    let getYear = now.getFullYear();
    let getMonth = now.getMonth();
    let lastDayDate = new Date(getYear, getMonth + 1, 0);
    let lastDayOfTheMonth = lastDayDate.getDate();
    console.log(lastDayOfTheMonth);

    const months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
    let month = document.querySelector("#first-div p");

    for (let i = 1; i <= lastDayOfTheMonth; i++) {
        let day = document.createElement("div");
        day.innerText = i;
        calendar.append(day);

        day.addEventListener("click", () => {
            dateObject.day = i.toString();
            dateObject.month = parseInt(months.indexOf(month.innerText).toString().padStart(2, '0')) + 1;
            console.log(dateObject);

            let giorni = document.querySelectorAll("#calendar div");
            for (giorno of giorni) {
                giorno.classList.remove("selezionato");
            }

            day.classList.add("selezionato");

            let button = document.getElementById("button");
            button.addEventListener("click", () => {
                let inputTime = document.querySelector('#inputs input[type="time"]');
                let inputName = document.querySelector('#inputs input[type="text"');

                append(inputName.value, inputTime.value);

                window.scrollTo(0, document.body.scrollHeight);
            });
        })
    }
}




function setToday () {
    let days = document.querySelectorAll("#calendar div");
    for (d of days) {
        if (d.innerText == date) d.classList.add("today");
    }
}





function navigation () {
    let previousMonth = document.getElementById("previous-month");
    let nextMonth = document.getElementById("next-month");
    const months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];

    previousMonth.addEventListener("click", () => {
        now.setMonth(now.getMonth() - 1);

        let calendar = document.getElementById("calendar");
        calendar.innerHTML = "";

        generateMonthName();
        generateDays();

        let monthName = document.querySelector("#first-div p");
        if (months.indexOf(monthName.innerHTML) == month) setToday();
    });

    nextMonth.addEventListener("click", () => {
        now.setDate(5);
        now.setMonth(now.getMonth() + 1);

        let calendar = document.getElementById("calendar");
        calendar.innerHTML = "";

        generateMonthName();
        generateDays();

        let monthName = document.querySelector("#first-div p");
        if (months.indexOf(monthName.innerHTML) == month) setToday();
    });
}





function append (name, time) {
    let target = document.getElementById("meetings");
    let meeting = document.createElement("div");
    meeting.classList.add("meeting");
    target.append(meeting);
    let p = document.createElement("p");
    p.innerText = name;
    meeting.append(p);
    let icons = document.createElement("div");
    icons.classList.add("icons");
    meeting.append(icons);
    let meetingInfo = document.createElement("p");
    meetingInfo.innerText = `${dateObject.day}-${dateObject.month}-2023, ${time}`;
    meetingInfo.classList.add("meeting-info");
    icons.append(meetingInfo);
    let div = document.createElement("div");
    icons.append(div);


    let check = document.createElement("div");
    check.innerHTML = '<i class="fas fa-check"></i>';
    check.classList.add("check");
    div.append(check);

    check.addEventListener("click", () => {
        check.parentElement.parentElement.parentElement.classList.add("green");
        check.remove();
    });

    let trashCan = document.createElement("div");
    trashCan.innerHTML = '<i class="fas fa-trash-alt"></i>';
    trashCan.classList.add("trash-can");
    div.append(trashCan);

    trashCan.addEventListener("click", () => {
        trashCan.parentElement.parentElement.parentElement.remove();
    });
}