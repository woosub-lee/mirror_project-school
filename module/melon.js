function melonModule(location){
    const displayLocation_MelonMo = location;
    const melonContainer = document.querySelector(displayLocation_MelonMo);
    const request = require('request');
    const cheerio = require('cheerio');
    const url = "http://www.melon.com/chart/";
    let title = new Array(),
        artist = new Array(),
        up_date,
        up_time;
    const rank = 10;
    const melonTitle = document.createElement("h4");
    melonTitle.innerText = `Melon 차트`;
    melonTitle.id = "green_style"
    melonContainer.appendChild(melonTitle);
    request(url, function(error, response, html){
        if (!error) {
            var $ = cheerio.load(html);
            for (var i = 0; i < rank; i++) {
                $('.ellipsis.rank01 > span > a').each(function(){
                    var title_info = $(this);
                    var title_info_text = title_info.text();
                    title[i] = title_info_text;
                    i++;
                })
            }
            for (var i = 0; i < rank; i++) {
                $('.checkEllipsis').each(function(){
                    var artist_info = $(this);
                    var artist_info_text = artist_info.text();
                    artist[i] = artist_info_text;
                    i++;
                })
            }
            $('.year').each(function(){
                var date_info = $(this);
                var date_info_text = date_info.text();
                up_date = date_info_text;
            })
            $('.hhmm > span').each(function(){
                var time_info = $(this);
                var time_info_text = time_info.text();
                up_time = time_info_text;
            })
            var up_date_arr = new Array();
            var up_date_arr = up_date.split('.');
            var up_time_arr = new Array();
            var up_time_arr = up_time.split(':');
            var newtime;
          // 오후 오전 삽입
            if (up_time_arr[0] >12) {
                up_time_arr[0] = up_time_arr[0] - 12
                newtime = "오후 "+up_time_arr[0];
            } else {
                newtime = "오전 " +up_time_arr[0];
            }
            for (var i = 1; i < rank+1; i++) {
                title[i-1] = title[i-1].indexOf("(") === -1 ? title[i-1] : title[i-1].substring(0,title[i-1].indexOf("("));
                const chart = document.createElement("p");
                chart.innerText = `${i}위 ${title[i-1]}`;
                if(i === 1){
                    chart.id = "red_style";
                }
                chart.className = "left_al";
                melonContainer.appendChild(chart);
            }
        }
    });
}
module.exports = melonModule;
