document.addEventListener('DOMFocusIn', function() {

    chrome.storage.sync.get({'warn': '#EF4836', 'caution': '#E9D460', 'safe': '#87D37C', 'userDomain': 'gmail.com'}, function(items) {
        warn = items.warn;
        caution = items.caution;
        safe = items.safe;
        domain = items.userDomain;
    });

    homeDomain = domain;
    emailWindows = []
    emailTables = document.getElementsByClassName('aoP aoC');
    inLineReply = document.getElementsByClassName('aoP HM');

    for(a = 0; a < emailTables.length; a++){
        emailWindows.push(emailTables[a]);
    }
    for(b = 0; b < inLineReply.length; b++){
        emailWindows.push(inLineReply[b]);
    }
    for(i = 0; i < emailWindows.length; i++){
        domainList = [];
        toArr = emailWindows[i].querySelectorAll('[name=to]'); 
        for(x = 0; x < toArr.length; x++){
            if(toArr[x].type != 'textarea'){
                strArr = toArr[x].value.split('@');
                domain = strArr[strArr.length -1];
                domain = domain.replace('>', '');
                domain = domain.replace(')','');
                domainList.push(domain)
            }
        };
        ccArr = emailWindows[i].querySelectorAll('[name=cc]');
        for(y = 0; y < ccArr.length; y++){
            if(ccArr[y].type != 'textarea'){
                strArr = ccArr[y].value.split('@');
                domain = strArr[strArr.length -1];
                domain = domain.replace('>', '');
                domain = domain.replace(')','');
                domainList.push(domain)
            }
        };
        bccArr = emailWindows[i].querySelectorAll('[name=bcc]');
        for(z = 0; z < bccArr.length; z++){
            if(bccArr[z].type != 'textarea'){
                strArr = bccArr[z].value.split('@');
                domain = strArr[strArr.length -1];
                domain = domain.replace('>', '');
                domain = domain.replace(')','');
                domainList.push(domain)
            }
        };

        var u = {}, a = [];
        for(var w = 0, l = domainList.length; w < l; ++w){
            if(!u.hasOwnProperty(domainList[w])) {
                a.push(domainList[w]);
                u[domainList[w]] = 1;
            }
        }
        domainList = a;
        homeDomain = homeDomain.replace('>', '');

        index = domainList.indexOf(homeDomain);
        if(index > -1){
            domainList.splice(index, 1);
        }

        if (domainList.length >= 2) {
            try {
                emailWindows[i].getElementsByClassName('aoD hl')[0].style.backgroundColor = warn;
                emailWindows[i].getElementsByClassName('GS')[0].style.backgroundColor = warn;
            }catch(err) {}
        }
        else if (domainList.length == 1) {
            try{
                emailWindows[i].getElementsByClassName('aoD hl')[0].style.backgroundColor = caution;
                emailWindows[i].getElementsByClassName('GS')[0].style.backgroundColor = caution;
            }catch(err) {}
        }
        else {
            try {
                emailWindows[i].getElementsByClassName('aoD hl')[0].style.backgroundColor = safe;
                emailWindows[i].getElementsByClassName('GS')[0].style.backgroundColor = safe;
            }catch(err) {}
        }
    }
});
   
