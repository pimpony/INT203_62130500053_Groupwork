const profile = {
    data() {
        return {
            name : 'Paweena Thongyan',
            role : 'Student',
            show : true,
            Articles : 0,
            Followers : 565,
            Ratings : 7,
            show : true,
            img : "./images/cat.png"
        }
    }

}
var mounteApp = Vue.createApp(profile).mount('#profile')