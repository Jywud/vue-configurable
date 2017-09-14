/*存储相关*/
// import _ from 'underscore'
var num = 0

var hsStorage = {
	setNum() {
		num++;
	},
	getNum() {
		return num;
	}
}

export default hsStorage