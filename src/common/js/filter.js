import Vue from 'vue'

Vue.filter('formatMobile', function(value) {
	if (!!value == false) {
        return '';
    }
    return value.substring(0, 3) + '****' + value.substring(7, 11);
});