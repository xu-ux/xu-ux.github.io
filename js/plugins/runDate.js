function runTimeFunc(now) { 
    let grt= new Date("10/10/2022 10:10:00");//在此处修改你的建站时间，格式：月/日/年 时:分:秒
    now.setTime(now.getTime() + 250); 
    days = (now - grt ) / 1000 / 60 / 60 / 24; dnum = Math.floor(days); 
    hours = (now - grt ) / 1000 / 60 / 60 - (24 * dnum); hnum = Math.floor(hours); 
    if(String(hnum).length ==1 ){hnum = "0" + hnum;} minutes = (now - grt ) / 1000 /60 - (24 * 60 * dnum) - (60 * hnum); 
    mnum = Math.floor(minutes); if(String(mnum).length ==1 ){mnum = "0" + mnum;} 
    seconds = (now - grt ) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum); 
    snum = Math.round(seconds); if(String(snum).length ==1 ){snum = "0" + snum;} 
    document.getElementById("runDate").innerHTML = "本站已运行 " + dnum + " 天 "; 
    document.getElementById("runTime").innerHTML = hnum + " 小时 " + mnum + " 分 " + snum + " 秒"; 
} 
( function(){
    let now = new Date();
    // 需要遵循内容安全策略( CSP )
    window.setInterval( function() { runTimeFunc(now); },250);
    console.log("运行时间-start")
})();