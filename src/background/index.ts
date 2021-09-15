console.log('background script')

console.log('my extension...')

async function useNotificationsApi() {
  console.log('notifications api present', 'notifications' in browser)
  console.log(
    'notifications enabled',
    await browser.permissions.contains({ permissions: ['notifications'] }),
  )

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
