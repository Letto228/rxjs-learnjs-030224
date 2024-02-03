
// const ws = new WebSocket('ws://localhost:8081');

// ws.addEventListener('open', () => {
//     ws.send('on');
// });

// const wsMessage$ = new Observable<MessageEvent>(subscriber => {
//     // const ws = new WebSocket('ws://localhost:8081');

//     // ws.addEventListener('open', () => {
//     //     ws.send('on');
//     // });

//     console.log('START');

//     function listenMessage({data}: MessageEvent) {
//         console.log('NEW DATA', data);
//         subscriber.next(data);
//     }

//     function listenClose() {
//         subscriber.complete();
//     }

//     function listenError(error: Event) {
//         subscriber.error(error);
//     }

//     ws.addEventListener('message', listenMessage);
//     ws.addEventListener('close', listenClose);
//     ws.addEventListener('error', listenError);

//     return () => {
//         console.log('DESTROY');

//         ws.removeEventListener('message', listenMessage);
//         ws.removeEventListener('close', listenClose);
//         ws.removeEventListener('error', listenError);
//     }
// });

// setTimeout(() => {
//     wsMessage$.subscribe(data => {
//         terminalLog(`Sub 1 - ${data}`);
//     })
// }, 2000);

// setTimeout(() => {
//     wsMessage$.subscribe(data => {
//         terminalLog(`Sub 2 - ${data}`);
//     })
// }, 5000);