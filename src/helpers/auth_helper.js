
const token = () => {
    // localStorage.getItem("token")
    return localStorage.getItem("token")

}
// console.log("token")
export const apiHelper = (form) => {
    let config;
    const tokenData = token()
    // console.log(tokenData, "tokendata")
    if (form) {
        config = {
            ...form,
            headers: {
                "ngrok-skip-browser-warning": "any",
                "authorization": `Bearer ${tokenData}`,
                "X-Requested-With": "XMLHttpRequest"

            },
        };
    } else {
        config = {
            headers: {
                "ngrok-skip-browser-warning": "any",
                "authorization": `Bearer ${tokenData}`,
                "X-Requested-With": "XMLHttpRequest"
            },
        };
    }
    return config;
};
