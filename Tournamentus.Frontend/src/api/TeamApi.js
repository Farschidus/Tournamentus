import BaseApi from './BaseApi';

class TeamApi extends BaseApi {
    apiBase = 'teams';

    get() {
        return this._get(`${this.apiBase}`);
    }

    getTeam(teamId) {
        return this._get(`${this.apiBase}/getTeam/${teamId}`);
    }

    getSchedul(teamId) {
        return this._get(`${this.apiBase}/GetSchedule/${teamId}`);
    }
}

export default new TeamApi();
