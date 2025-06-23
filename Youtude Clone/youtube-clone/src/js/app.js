// This file contains the JavaScript code for the YouTube clone.
// It handles user interactions, dynamic content updates, and other client-side logic.

const videos = [
    {
        title: "Learn JavaScript in 1 Hour",
        channel: "CodeAcademy",
        views: "1.2M views • 1 year ago",
        thumbnail: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg",
        avatar: "https://yt3.ggpht.com/ytc/AKedOLQw8w6Qw8w6Qw8w6Qw8w6Qw8w6Qw8w6Qw8w6Q=s68-c-k-c0x00ffffff-no-rj"
    },
    {
        title: "React JS Crash Course",
        channel: "Traversy Media",
        views: "900K views • 2 years ago",
        thumbnail: "https://i.ytimg.com/vi/sBws8MSXN7A/hqdefault.jpg",
        avatar: "https://yt3.ggpht.com/ytc/AKedOLQw8w6Qw8w6Qw8w6Qw8w6Qw8w6Qw8w6Qw8w6Q=s68-c-k-c0x00ffffff-no-rj"
    },
    {
        title: "HTML & CSS Full Course",
        channel: "freeCodeCamp.org",
        views: "2.3M views • 3 years ago",
        thumbnail: "https://i.ytimg.com/vi/mU6anWqZJcc/hqdefault.jpg",
        avatar: "https://yt3.ggpht.com/ytc/AKedOLQw8w6Qw8w6Qw8w6Qw8w6Qw8w6Qw8w6Qw8w6Q=s68-c-k-c0x00ffffff-no-rj"
    },
    {
        title: "Node.js Tutorial for Beginners",
        channel: "Programming with Mosh",
        views: "800K views • 6 months ago",
        thumbnail: "https://i.ytimg.com/vi/TlB_eWDSMt4/hqdefault.jpg",
        avatar: "https://yt3.ggpht.com/ytc/AKedOLQw8w6Qw8w6Qw8w6Qw8w6Qw8w6Qw8w6Qw8w6Q=s68-c-k-c0x00ffffff-no-rj"
    }
];

function renderVideos(list) {
    const videoList = document.getElementById('video-list');
    videoList.innerHTML = '';
    list.forEach(video => {
        const videoEl = document.createElement('div');
        videoEl.className = 'video';
        videoEl.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}">
            <div class="video-content" style="display:flex;gap:10px;align-items:flex-start;">
                <img src="${video.avatar}" alt="${video.channel}" style="width:36px;height:36px;border-radius:50%;margin-top:4px;">
                <div>
                    <div class="video-title">${video.title}</div>
                    <div class="video-channel">${video.channel}</div>
                    <div class="video-views">${video.views}</div>
                </div>
            </div>
        `;
        videoList.appendChild(videoEl);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchBtn');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value;
        const filteredVideos = videos.filter(video => 
            video.title.toLowerCase().includes(query.toLowerCase()) || 
            video.channel.toLowerCase().includes(query.toLowerCase())
        );
        renderVideos(filteredVideos);
    });

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });

    // Initial render
    renderVideos(videos);
});