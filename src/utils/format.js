/**
 * [formatNumber 格式化小于10的数据]
 * @param  {[type]} n [需要格式化的参数]
 * @return {[type]}   [结果大于10直接显示小于10为'0X']
 */
const formatNumber = (n) => {
    n = n.toString();
    return n[1]
        ? n
        : '0' + n;
};
/**
 * [formatAudioTime 格式化播放器时间]
 * @param  {[type]} time [description]
 * @return {[type]}      [description]
 */
const formatAudioTime = (time) => {
    let mm = formatNumber(parseInt(parseInt(time) / 60));
    let ss = formatNumber(parseInt(parseInt(time) % 60));
    return `${mm}:${ss}`;
};
export default formatAudioTime;
