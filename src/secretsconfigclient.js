const secretsconfigclient = {
    key: "AIzaSyBMHhZ4bQmXATIK4pSjJXGoWyPD-l5ZQf8", // google api key. name: API key 1
    spotify_backend_uri: "www.btnb.basementtrolls.com/spauthenticate",
    dv: {       // development specific items
        belogin: "http://localhost:8888/login",
        belogout: "http://localhost:8888/logout",
    },
    pr: {       // production specific items
        belogin: "http://btnb.basementtrolls.com/login",
        belogout: "http://btnb.basementtrolls.com:8888/logout",
        rspbelogin: "http:www.dawtt.dynu.net:10331/login",
        rspbelogout: "http:www.dawtt.dynu.net:10331/logout"
    },
};

export default secretsconfigclient;


/*
export default secretsconfigclient.dv;*/