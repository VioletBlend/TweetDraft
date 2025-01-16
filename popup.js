document.getElementById("saveDraft").addEventListener("click", function() {
    const tweetText = document.getElementById("tweetText").value;
    chrome.storage.local.set({tweetDraft: tweetText}, function() {
        alert('Draft saved!');
    });
});

document.getElementById("sendTweet").addEventListener("click", function() {
    chrome.storage.local.get('tweetDraft', function(data) {
        if(data.tweetDraft) {
            const tweetUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(data.tweetDraft)}`;
            chrome.tabs.create({ url: tweetUrl });
        } else {
            alert('No draft found!');
        }
    });
});
