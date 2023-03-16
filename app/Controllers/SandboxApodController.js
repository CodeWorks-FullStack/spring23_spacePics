import { appState } from "../AppState.js";
import { sandboxApodService } from "../Services/SandboxApodService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawFavorites() {
    let apods = appState.myApods
    let template = ''
    apods.forEach(a => template += a.ListTemplate)
    setHTML('favorites', template)
}

export class SandboxApodController {
    constructor() {
        console.log('hello from the sandbox controller')
        this.getFavorites()
        appState.on('myApods', _drawFavorites)
    }

    async saveFavorite() {
        try {
            console.log('saving fav');
            await sandboxApodService.saveFavorite()
            Pop.toast('Really sick space pic dude 💫')
        }
        catch (error) {
            Pop.error(error);
        }
    }

    async getFavorites() {
        try {
            await sandboxApodService.getFavorites()
        }
        catch (error) {
            Pop.error(error);
        }
    }

    async delete(apodId) {
        try {
            // console.log(apodId);
            await sandboxApodService.delete(apodId)
        }
        catch (error) {
            Pop.error(error);
        }
    }

}