/**
 * [setCookie 设置cookie]
 * @param {[type]} c_name [cookie name]
 * @param {[type]} value  [cookie value]
 * @param {[type]} exdays [过期时间]
 */
const setCookie = (c_name, value, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    document.cookie = `${c_name}=${value};path=/`;
};
/**
 * [getCookie 获取cookie]
 * @param  {[type]} c_name [cookie name]
 * @return {[type]}        [cookie value]
 */
const getCookie = (c_name) => {
    const name = `${c_name}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) != -1) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
};
/**
 * [clearCookie 清除cookie]
 * @param  {[type]} name [cookie name]
 * @return {[type]}      [description]
 */
const clearCookie = (name) => {
    setCookie(name, '', -1);
};
export {setCookie, getCookie, clearCookie};
