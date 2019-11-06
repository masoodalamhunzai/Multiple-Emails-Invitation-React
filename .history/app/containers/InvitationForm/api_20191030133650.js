import axios from '../../utils/axios';

export const sendInvitationApi = payload => axios.post(`v1/sendInvitation/`, payload);
