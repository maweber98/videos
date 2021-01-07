import axios from 'axios';

const KEY = 'AIzaSyB84d_GjJdp1IH-dznqeKRBwUSuUUBPnFU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});