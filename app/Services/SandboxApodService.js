import { appState } from "../AppState.js"
import { SandboxApod } from "../Models/SandboxApod.js";
import { sandboxApi } from "./AxiosService.js"

class SandboxApodService {


    async saveFavorite() {
        const res = await sandboxApi.post('api/sammygoose/apods', appState.activeApod)
        console.log('[SAVING APOD]', res.data);
        // let newFav = new SandboxApod(res.data)
        // appState.myApods.push(newFav)
        appState.myApods.push(new SandboxApod(res.data))
        appState.emit('myApods')
        console.log('my apods', appState.myApods);
    }

    async getFavorites() {
        const res = await sandboxApi.get('api/sammygoose/apods')
        console.log('[GETTING SANDBOX APODS]', res.data);
        // NOTE if i want to take many things (array) and instantiate them into a model, we need to use map
        appState.myApods = res.data.map(a => new SandboxApod(a))
        console.log('my apods', appState.myApods)
    }

    async delete(apodId) {
        const res = await sandboxApi.delete(`api/sammygoose/apods/${apodId}`)
        console.log('[DELETING APOD]', res.data);
        // NOTE filter returns a new array
        // NOTE here we say return an array of all the apods except for the one whose id matches the apodId
        appState.myApods = appState.myApods.filter(a => a.id != apodId)
    }

}

export const sandboxApodService = new SandboxApodService()