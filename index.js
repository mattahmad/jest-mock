import http from 'k6/http';
import { sleep } from 'k6';

//Write a k6 load test for https://copilot-tech-talk.vercel.app/ using 5 vus in 10 seconds

export let options = {
    vus: 5,
    duration: '10s',
    };

export default function () {
    http.get('https://copilot-tech-talk.vercel.app/');
    sleep(1);
    }





