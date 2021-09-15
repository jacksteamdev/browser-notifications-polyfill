console.log('background script')

console.log('my extension...')

function useNotificationsApi() {
  console.log('notifications enabled', 'notifications' in browser)

  browser.notifications?.onClicked.addListener(function (notificationId) {
    console.log(notificationId)
  })
}

useNotificationsApi()

browser.permissions.onAdded.addListener(() => {
  useNotificationsApi()
})

// to enable top-level await
export {}
