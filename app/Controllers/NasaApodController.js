import { appState } from "../AppState.js";
import { nasaApodService } from "../Services/NasaApodService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawApod() {
    console.log('drawing');
    let apod = appState.activeApod
    document.body.style.backgroundImage = `url(${apod.imgUrl})`
    setHTML('details', apod.DetailsTemplate)
    setText('copyright', apod.copyright)
}

function _drawElems() {
    // console.log('hiding');
    let saveBtn = document.getElementById('save-btn')
    let listBtn = document.getElementById('list-btn')
    let details = document.getElementById('details')
    let dateInput = document.getElementById('date')

    let elems = [saveBtn, listBtn, details, dateInput]

    if (appState.isHidden) {
        elems.forEach(e => e.style.visibility = 'hidden')
    } else {
        elems.forEach(e => e.style.visibility = 'visible')
    }
}

export class NasaApodController {
    constructor() {
        console.log('hello from the nasa controller')
        this.getApod()
        appState.on('activeApod', _drawApod)
        appState.on('isHidden', _drawElems)
    }

    async getApod() {
        try {
            await nasaApodService.getApod()
        }
        catch (error) {
            Pop.error(error);
        }
    }

    async getApodByDate(date) {
        try {
            if (!date) {
                let dateInput = document.getElementById('date')
                // NOTE this value from the date input comes in as a string in YYYY-MM-DD format
                console.log(dateInput.value);
                await nasaApodService.getApodByDate(dateInput.value)
            } else {
                console.log(date);
                await nasaApodService.getApodByDate(date)
                // @ts-ignore
                // bootstrap.Offcanvas.getOrCreateInstance('#favoritesOffcanvas').hide()
            }
        }
        catch (error) {
            Pop.error(error);
        }
    }


    toggleDisplay() {
        console.log('toggle');
        nasaApodService.toggleHidden()
    }
}