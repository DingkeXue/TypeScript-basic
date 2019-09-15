var Days;
(function (Days) {
    Days[Days["day1"] = 0] = "day1";
    Days[Days["day2"] = 1] = "day2";
    Days[Days["day3"] = 'day'.length] = "day3";
})(Days || (Days = {}));
var day = [Days.day1, Days.day2, Days.day3];
var date = [0 /* Fri */, 1 /* Sun */];
