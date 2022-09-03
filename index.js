moment().format();

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


    if (!joinDate.isValid()) {
        alert('날짜를 올바르게 입력하여 주세요 (예. 170101)');
        return;
    }
    if (!taljuDate.isValid() || !rejoinDate.isValid() ) {

        let cnt = 1;
        let appCnt = 1;

        let joinDate_;
        joinDate_= moment(joinDate).format();
        while (appCnt < 180) {
            let cntDate;
            cntDate = moment(joinDate_).add(cnt, "days").format('YYMMDD');
//            alert(cntDate);
            if(moment(cntDate).isBefore('220124')) appCnt++;
            if(moment(cntDate).isAfter('220401') && moment(cntDate).isBefore('220704')) appCnt++;
            if(moment(cntDate).isAfter('220729')) appCnt++;
            cnt++;

        }
        alert('결과')
        //alert(String(appCnt))
        //alert(String(cnt))
        let certificateDate;
        let joinDate2 = moment(joinDate).format()
        certificateDate = moment(joinDate2).add(cnt, "days").format('YYMMDD');
        alert('신청가능일은');
        alert(certificateDate);
        alert('입니다');

    }
    else { // TODO 탈주일 포함된경우
        alert(' TODO 탈주일 포함된경우')
//         let cnt1 = 1;
//         let appCnt1 = 1;

//         let joinDate_;
//         let taljuDate_;
//         let rejoindate_;
//         joinDate_= moment(joinDate).format();
//         taljuDate_= moment(taljuDate).format('YYMMDD');
//         rejoindate_= moment(rejoinDate).format('YYMMDD');
//         while (appCnt1 < 180) {
//             let cntDate;
//             cntDate = moment(joinDate_).add(cnt1, "days").format('YYMMDD');
// //            alert(cntDate);
//             if(moment(cntDate).isBefore('220124')) {
//                 if(moment(cntDate).isAfter(moment(taljuDate_)) && moment(cntDate).isBefore(moment(rejoindate_))) {}
//                 else appCnt1++;
//             }
//             if(moment(cntDate).isAfter('220401') && moment(cntDate).isBefore('220704')) {
//                 if(moment(cntDate).isAfter(moment(taljuDate_)) && moment(cntDate).isBefore(moment(rejoindate_))) {}
//                 else appCnt1++;
//             }
//             if(moment(cntDate).isAfter('220729')) {
//                 if(moment(cntDate).isAfter(moment(taljuDate_)) && moment(cntDate).isBefore(moment(rejoindate_))) {}
//                 else appCnt1++;
//             }
//             cnt1++;
//         }
//         alert('결과')
//         alert(String(cnt1))
//         let certificateDate;
//         let joinDate2 = moment(joinDate).format()
//         certificateDate = moment(joinDate2).add(cnt1, "days").format('YYMMDD');
//         alert(certificateDate);


    }

    $('.results').hide().fadeIn(1200).show();

    let serviceType = $('.select_service_type').val();

    let cntDate;
    let cnt = 1;
    let appCnt = 1;
//
//    alert('12');
//    alert(joinDate);
//    let joinDate__;
//    joinDate__= moment(joinDate).format('YYMMDD');
//    if(moment(joinDate__).isSameOrAfter('220124'))    alert('ab');

   // if(jointDate.isSameOrAfter("2022-01-24") && jointDate.isSameOrBefore("2022-04-01")) {
   //     appCnt = 0;
    //}
    //if(jointDate.isSameOrAfter("2022-07-04") && jointDate.isSameOrBefore("2022-07-29")) appCnt = 0;
  //  alert('test')
   // alert(String(appCnt))

    //prevEndDate = moment(joinDate);
    if (serviceType === '58th') {
       // prevEndDate.year(prevEndDate.year() + 2);
       // referenceDate = moment("161003", 'YYMMDD');
       // alert(joinDate);
        //alert('테스트');
       // alert('test')
       // alert(String(appCnt))
    }
    else if (serviceType === 'navy') {
        //prevEndDate.month(prevEndDate.month() + 23);
       // referenceDate = moment("161103", 'YYMMDD');
    }
    else if (serviceType === 'social_service') {
        //prevEndDate.year(prevEndDate.year() + 2);
       // referenceDate = moment("161003", 'YYMMDD');

    }
    else {
        //prevEndDate.month(prevEndDate.month() + 21);
       // referenceDate = moment("170103", 'YYMMDD');
    }

    //let reducedDays = Math.floor(moment.duration(joinDate.diff(referenceDate)).asDays() / 14 + 1);

    // Cap at 90 days
   // if (reducedDays.valueOf() > 90) {
   //     reducedDays = 90;
    //}

    //prevEndDate.subtract(1, 'd');

   // changeDeltaText(reducedDays);

    if (reducedDays > 0) {
        //changeEndDateText(prevEndDate.subtract(reducedDays, 'd'));
    } else {
      //  changeEndDateText(prevEndDate);
    }

    return false;
}
