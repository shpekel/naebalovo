export const sendNotify = (type, text, duration = 5000) => {
    const notify = {
        type: type,
        text: text,
        duration: duration
    }

    window.sendNotify(notify)
}