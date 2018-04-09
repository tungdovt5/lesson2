var NhietdoStatus ={
    rainy: {
        ios:'ios-rainy'
    },
    cloud: {
        ios:'ios-cloud'
    },
    cloudynight: {
        ios:'ios-cloudy-night'
    },
    thunderstorm: {
        ios:'ios-thunderstorm'
    },
    sunny: {
        ios:'ios-sunny'
    },
    flash: {
        ios:'ios-flash'
    },
}
var Nhietdodata =[
    {
        hour: '1 AM',
        status: NhietdoStatus.rainy,
        degress: 56,
    },
    {
        hour: '2 AM',
        status: NhietdoStatus.cloudynight,
        degress: 53,
    },
    {
        hour: '3 AM',
        status: NhietdoStatus.cloudynight,
        degress: 59,
    },
    {
        hour: '4 AM',
        status: NhietdoStatus.cloudynight,
        degress: 60,
    },
    {
        hour: '5 AM',
        status: NhietdoStatus.sunny,
        degress: 62,
    },
    {
        hour: '6 AM',
        status: NhietdoStatus.sunny,
        degress: 63,
    },
    {
        hour: '7 AM',
        status: NhietdoStatus.sunny,
        degress: 63,
    },
    {
        hour: '8 AM',
        status: NhietdoStatus.thunderstorm,
        degress: 55,
    },
    {
        hour: '9 AM',
        status: NhietdoStatus.thunderstorm,
        degress: 57,
    },
    {
        hour: '10 AM',
        status: NhietdoStatus.rainy,
        degress: 57,
    },
];
export default {Nhietdodata,NhietdoStatus};