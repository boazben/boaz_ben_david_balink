import axios from "axios";

 async function serverReq(method, urlRel, body, params) {
    const res = await axios({
        method: method,
        url: `http://localhost:4000${urlRel}`, // To localhost
        // url: `https://MyApp.com${urlRel}`, // To server
        data: body,
        params: params
        })
    return res.data
}

export default serverReq

