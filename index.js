// var moment = require('moment');
moment().format();

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

function changeDeltaText(delta) {
    let resStr;

    if (delta <= 0) {
        resStr = "아쉽지만 군복무가 단축되지 않았습니다.";
    } else {
        resStr = "축하합니다! 군복무가 <span class='accented'>" + delta + "일</span> 단축되었습니다.";
    }

    $('.results--delta').empty().append(resStr);
}

function changeEndDateText(endDate) {
    let dateStr = "전역일은 <span class='accented'>" + endDate.year() + "년 "
        + (endDate.month() + 1) + "월 "
        + endDate.date() + "일</span> "
        + "입니다.";

    $('.results--date').empty().append(dateStr);
}

function calculate() {
    let joinDateString = $('#join_date').val();
    let taljuDateString = $('#talju_date').val();
    let rejoinDateString = $('#rejoin_date').val();
    let joinDate = moment(joinDateString, 'YYMMDD');
    let taljuDate = moment(taljuDateString, 'YYMMDD');
    let rejoinDate = moment(rejoinDateString, 'YYMMDD');
    alert(moment(joinDate))
    alert(moment(taljuDate))
    alert(moment(rejoinDate))
    if (!joinDate.isValid()) {
        alert('날짜를 올바르게 입력하여 주세요 (예. 170101)');
        return;
    }

    $('.results').hide().fadeIn(1200).show();

   // let referenceDate = moment("170103", 'YYMMDD'); // Date when policy goes in effect

    
    
    let reducedDays = Math.floor(
        moment.duration(joinDate.diff(referenceDate)).asDays() / 14 + 1);

    let prevEndDate;

    let serviceType = $('.select_service_type').val();

    let cntDate;
    let cnt = 1;
    let appCnt = 1;
    
    
    prevEndDate = moment(joinDate).format('YYYY-MM-DD');
    
    prevEndDate.subtract(1, 'd');

    changeDeltaText(reducedDays);

    if (reducedDays > 0) {
        changeEndDateText(prevEndDate.subtract(reducedDays, 'd'));
    } else {
        changeEndDateText(prevEndDate);
    }

    return false;
}


$(document).ready(function() {

    // $("#submit").click(calculate());

}); 
