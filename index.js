moment().format();

function lestDay(lest) {
    let resStr;

    if (lest > 0) {
        resStr = "아쉽지만 자격증 신청하려면 <span class='accented'>" + lest + "일</span>을 더 기다려야해요.";
    }
    else {
        resStr = "축하합니다! 자격증 신청이 가능해요! 고생하셨습니다!";
    }

    $('.results--delta').empty().append(resStr);
}

function resultDate(endDate) {
//    let dateStr = "자격증 신청 가능일은 <span class='accented'>" + endDate.year() + "년 "
//        + (endDate.month() + 1) + "월 "
//        + endDate.date() + "일</span> "
//        + "입니다.";
    let dateStr = "자격증 신청 가능일은 <span class='accented'>" + endDate.year() + "년 "
        + (endDate.month()+1) + "월 "
        + endDate.date() + "일</span> "
        + "입니다!";
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
    alert('＃참고 \n 6개월 실무 연수 = 180일로 계산한 것으로 참고로만 봐주세요!')
    if (!taljuDate.isValid() || !rejoinDate.isValid() ) {

        let cnt = 1;
        let appCnt = 2;

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
       //alert('결과')
        //alert(String(appCnt))
        //alert(String(cnt))
        let certificateDate;
        let joinDate2 = moment(joinDate).format()
        certificateDate = moment(joinDate2).add(cnt, "days");//.format('YYMMDD');
        //alert('신청가능일은');
        //alert(certificateDate);
        //alert('입니다');
        let today;
        today = moment();
        //alert(today);
        let lest; //= Math.floor(moment.duration(moment(certificateDate).diff(moment(today))).asDays());
        lest = moment(certificateDate).diff(today,"days");
        //alert(String(lest));
        lestDay(lest);

        if (lest > 0) {
            resultDate(certificateDate);
        } else {
            resultDate(certificateDate);
        }


    }
    else { // TODO 탈주일 포함된경우
        //alert(' TODO 탈주일 포함된경우')
        let cnt1 = 1;
        let appCnt1 = 2;

        let joinDate_;
        let taljuDate_;
        let rejoindate_;
        joinDate_= moment(joinDate).format();
        taljuDate_= moment(taljuDate).format('YYMMDD');
        rejoindate_= moment(rejoinDate).format('YYMMDD');
        while (appCnt1 < 180) {
            let cntDate;
            cntDate = moment(joinDate_).add(cnt1, "days").format('YYMMDD');
//            alert(cntDate);
            if(moment(cntDate).isBefore('220124')) {
                if(moment(cntDate).isAfter(moment(taljuDate_)) && moment(cntDate).isBefore(moment(rejoindate_))) {}
                else appCnt1++;
            }
            if(moment(cntDate).isAfter('220401') && moment(cntDate).isBefore('220704')) {
                if(moment(cntDate).isAfter(moment(taljuDate_)) && moment(cntDate).isBefore(moment(rejoindate_))) {}
                else appCnt1++;
            }
            if(moment(cntDate).isAfter('220729')) {
                if(moment(cntDate).isAfter(moment(taljuDate_)) && moment(cntDate).isBefore(moment(rejoindate_))) {}
                else appCnt1++;
            }
            cnt1++;
        }
       // alert('결과')
        //alert(String(cnt1))
        let certificateDate;
        let joinDate2 = moment(joinDate).format()
        certificateDate = moment(joinDate2).add(cnt1, "days");//.format('YYMMDD');
        //alert(certificateDate);
        //alert('결과1')

        let today;
        today = moment();
        //alert(today);
        let lest; //= Math.floor(moment.duration(moment(certificateDate).diff(moment(today))).asDays());
        lest = moment(certificateDate).diff(today,"days");
        //alert(String(lest));
        lestDay(lest);
        if (lest > 0) {
            resultDate(certificateDate);
        } else {
            resultDate(certificateDate);
        }
    }

    $('.results').hide().fadeIn(1200).show();

    let serviceType = $('.select_service_type').val();

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
    else if (serviceType === '59th') {
        //prevEndDate.month(prevEndDate.month() + 23);
       // referenceDate = moment("161103", 'YYMMDD');
    }
    else {

    }



    return false;
}
