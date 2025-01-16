chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.action === "tweetDraft") {
        window.open(`https://x.com/intent/tweet?text=${encodeURIComponent(request.draft)}`);
    }
});
