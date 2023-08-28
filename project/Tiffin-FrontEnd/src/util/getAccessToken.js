export default function getAccessToken(){
    return "Bearer_"+JSON.parse(sessionStorage.getItem("AccessToken"))
}