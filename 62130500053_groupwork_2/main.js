const profile = {
    data() {
        return {
            name : 'Paweena Thongyan',
            role : 'Student',
            show : true,
            Articles : 2,
            Followers : 663,
            Ratings : 7,
            show : true,
            img : "./images/cat.png"
        }
    }

}
var mounteApp = Vue.createApp(profile).mount('#profile')