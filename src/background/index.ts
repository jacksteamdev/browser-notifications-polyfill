console.log('background script')



console.log('my extension...');

browser.notifications.onClicked.addListener(function (notificationId) {

 console.log(notificationId)
})