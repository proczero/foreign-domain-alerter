function save_settings() {
    var warn = document.getElementById('warn').value;
    var caution = document.getElementById('caution').value;
    var safe = document.getElementById('safe').value;
    var domain = document.getElementById('domain').value;
    console.log(domain);
    chrome.storage.sync.set({
        'userDomain': domain,
        'warn': warn,
        'caution': caution,
        'safe': safe
    },function(){
        console.log('Saved Information.');
    });
    window.close();
}

function restore_settings() {
    chrome.storage.sync.get({
        'userDomain': 'gmail.com',
        'warn': '#EF4836',
        'caution': '#E9D460',
        'safe': '#87D37C'
    }, function(items) {
        document.getElementById('domain').value = items.userDomain;
        document.getElementById('warn').value = items.warn;
        document.getElementById('caution').value = items.caution;
        document.getElementById('safe').value = items.safe;
    });
}

document.addEventListener('DOMContentLoaded', restore_settings);
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('save').addEventListener('click', save_settings, false);
});

