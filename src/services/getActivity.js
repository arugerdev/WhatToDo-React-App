export default function getActivity(type, accessibility, price, customPrice, customAccessibility) {

    const urlprice = `price=${price}`
    const urlaccessibility = `accessibility=${accessibility}`
    const urltype = `type=${type}`

    const ApiURL = 'https://www.boredapi.com/api/activity/?' +
        (type === 'all' ? '' : urltype) +
        (customPrice === 'custom' ? '&' + urlprice : '') +
        (customAccessibility === 'custom' ? '&' + urlaccessibility : '');


    return fetch(ApiURL).then(res => res.json()).then(result => {
        const activity = result.activity;
        const type = result.type;
        const participants = result.participants;
        const price = result.price;
        const link = result.link;
        const key = result.key;
        const accessibility = result.accessibility;
        const error = result.error;


        const activityData = { activity, type, participants, price, link, key, accessibility, error };
        return activityData;
    })

}