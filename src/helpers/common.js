export const COMM = {
    DATASOURCE: {
        MONTH: [
            "JAN", 
            "FEB", 
            "MAR", 
            "APR", 
            "MAY", 
            "JUN", 
            "JUL", 
            "AUG", 
            "SEP", 
            "OCT", 
            "NOV", 
            "DEC"
        ],
    },
    DdMmmYyyy: function (data) {
        let date = new Date(data);
        let mnth = COMM.DATASOURCE.MONTH[(date.getMonth())];
        let day = ("0" + date.getDate()).slice(-2);
        let yr = ("" + date.getFullYear());
        let yrInt = parseInt(yr);
        if (yrInt <= 1950 || data === null || data === '')
            return "";
        else
            return [day, mnth, yr].join(" ");
    },
    DdMmmYyyyHhMm: function (data) {
        if (data == null) {
            return '';
        }
        let date = new Date(data);
        let mnth = COMM.DATASOURCE.MONTH[(date.getMonth())];
        let day = ("0" + date.getDate()).slice(-2);
        let yr = ("" + date.getFullYear());
        let yrInt = parseInt(yr);
        let h = date.getHours();
        let m = date.getMinutes();
        let  time = h + ":" + ((m < 10 ? "0" : "") + m);
        if (yrInt <= 1950)
            return '';
        else
            return [day, mnth, yr, time].join(" ");
    },
    DdMmm: function (data) {
        if (data == null) {
            return '';
        }
        let date = new Date(data);
        let mnth = COMM.DATASOURCE.MONTH[(date.getMonth())];
        let day = ("0" + date.getDate()).slice(-2);
        return [day, mnth].join(" ");
    },
    timeSince: function (date) {
        var seconds = Math.floor((new Date() - new Date(date)) / 1000);
        var interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
          return interval + " years ago";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
          return interval + " months ago";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
          return interval + " days ago";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
          return interval + " hours ago";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
          return interval + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
	},
	capitalizeFirstLetter: function (string) {
		if (string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		}
    },
    formatNumber: function (num) {
        return (num)? num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : "";
    },
    capitalizeEachWord: function titleCase(str) {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        return splitStr.join(' '); 
    },
    dateConverter: function (str){
        if (str == null) {
            return '';
        }
        var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    },
};