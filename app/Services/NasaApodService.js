import { appState } from "../AppState.js";
import { NasaApod } from "../Models/NasaApod.js";
import { nasaApi } from "./AxiosService.js"

class NasaApodService {
    toggleHidden() {
        appState.isHidden = !appState.isHidden
    }

    async getApod() {
        const res = await nasaApi.get('')
        console.log('[GET APOD]', res.data);
        appState.activeApod = new NasaApod(res.data)
        // console.log('appstate apod', appState.activeApod);
    }

    async getApodByDate(dateValue) {
        // NOTE when we want to send queries....make sure you are putting a ? before the parameter name
        const res = await nasaApi.get('?date=' + dateValue)
        console.log('[GET APOD BY DATE]', res.data);
        appState.activeApod = new NasaApod(res.data)
    }

}

export const nasaApodService = new NasaApodService()