import axios from "axios";

export default axios.create({
    // baseURL will need to be changed every 8 hours (quit the tunnel ngrok tunnel session, restart, paste in new url)
    baseURL: 'http://3394-2607-fea8-1c40-7100-6920-b115-452c-7a9f.ngrok.io'
})