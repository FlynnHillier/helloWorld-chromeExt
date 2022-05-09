const user = "test_username"

chrome.runtime.onInstalled.addListener(()=>{
    chrome.storage.sync.set({user})
    console.log(`set user: '${user}'`)
})