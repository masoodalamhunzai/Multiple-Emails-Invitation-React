import axios from '../../utils/axios';

export const sendInvitationApi = payload =>
  axios.post(`/sendInvitation/`, payload);
