export class IFramesPage {

    get iFrameButton() {
        return 'a[href="/iframe"]' 
    }

    get externalIframeVideo() {
        return 'iframe[id="iframe-youtube"]'
    }

    get videoButton() {
        return 'button[class="ytp-large-play-button ytp-button ytp-large-play-button-red-bg"]'
    }

    get externalTextIframe() {
        return 'iframe[id="mce_0_ifr"]'
    }

    get externalTextIframeTypingBox() {
        return 'body[data-id="mce_0"]'
    }


}