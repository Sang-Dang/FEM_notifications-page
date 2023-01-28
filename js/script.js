
var unreadCards = document.querySelectorAll(".notifications-container main section.card.unread");
unreadCards.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.remove("unread");
        updateUnreadCount();
    })
})

const unreadCount = document.querySelector(".notifications-container .notification-count");
const updateUnreadCount = () => {
    unreadCards = document.querySelectorAll(".notifications-container main section.card.unread");
    unreadCount.innerHTML = unreadCards.length;
}

const markAllReadButton = document.querySelector(".notifications-container #mark-read");
markAllReadButton.addEventListener('click', () => {
    markAllRead();
})
const markAllRead = () => {
    unreadCards = document.querySelectorAll(".notifications-container main section.card.unread");
    unreadCards.forEach(item => {
        item.classList.remove("unread");
    })
    updateUnreadCount();
}

updateUnreadCount();