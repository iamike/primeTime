
/*
var wxConfigParams={};
            var wxServiceUrl = "http://mangoeasy.weixin.smc-sfe.com/api/Service";
            var wxServiceData = { url: location.href,id: "5236c120-546b-eed3-61d0-58a9c0785767"};
            var wxShareData = {
                      title:'2015年第25届日内瓦国际钟表展',
                      imgUrl:'http://mike.smc-sfe.com/primeTime/images/icon.png',
                      link:'http://mike.smc-sfe.com/primeTime/index.html',
                      desc:'钟表展来啦！',
                      success: function () {
                       alert(' 用户确认分享后执行的回调函数');
                      },
                      cancel: function () {
                       alert(' 用户取消分享后执行的回调函数');
                      }
                };

            $.get(wxServiceUrl,wxServiceData, function (data) {


                    wxConfigParams.appId = data.AppId;
                    wxConfigParams.timestamp = data.Timestamp;
                    wxConfigParams.nonceStr = data.NonceStr;
                    wxConfigParams.signature = data.Signature;
                    wxConfigParams.jsApiList = ['onMenuShareTimeline','onMenuShareAppMessage'];

                    
                    wx.config(wxConfigParams);
                    
                    wx.ready(function(){
                        wx.onMenuShareTimeline(wxShareData);
                        wx.onMenuShareAppMessage(wxShareData);
                    })

              })

              */