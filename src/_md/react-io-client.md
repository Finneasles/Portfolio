---
title: "react-io-client"
description: "A custom hook for react applications that creates a connection to a websocket server using the socket.io-client library."
categories: ["React", "socket.io","react-hooks" ]
project: true 
snippet: false
date: "Jan 1, 2023"
figure: "/images/react-io-client.png"
figcaption: "tdsc"
---

This is a custom hook for react applications that creates a connection to a websocket server using the [socket.io-client library](https://socket.io/docs/v4/client-api/). The hook takes in two parameters: a `url: string`, which is the address of the [websocket server](https://socket.io/docs/v4/server-instance/), and an optional `options: object`, which can contain additional options to pass to the io() function.

## Getting Started

Install dependency:

```bash
npm i react-io-client
```

### Example

Here's an example of how to use the useSocket hook in a React component:

```js
import { useSocket } from  "react-io-client";
import  React, { useEffect, useState } from  "react";

export  default  function  Chat() {
const [socket] = useSocket("ws://localhost:3000", { autoConnect:  false });
const [messages, setMessages] = useState([]);

useEffect(() => {
if (!socket) return;
socket.on("message", (message: string) => {
setMessages((prevMessages) => [...prevMessages, message]);
});
socket.emit("join", "room1");
return () => {
socket.off("message");
socket.emit("leave", "room1");
};
}, [socket]);

return  messages.map((message, index) => {
return  <div  key={index}>{message}</div>;
});
}
```

> `useEffect` hook is used in this example to handle the side effect of creating a socket connection, but if you're already using useEffect in your component, you can use that one to handle the side effect of managing the websocket as well.

The types for the useSocket function are as follows:

```js
interface  SocketOptions {
// options specific to the "socket.io-client" library
}

declare  function  useSocket(
url: string,
options?: SocketOptions & any
): [Socket | undefined];
```

It takes two parameters, a required string url and an optional options object of type SocketOptions. and the returned array contains an element of type [Socket](https://socket.io/docs/v4/typescript/#types-for-the-client) or undefined

### Important information

the `useSocket` hook is only responsible for creating and managing the socket connection, but it does not come with any predefined event handlers for handling incoming events from the server. This is left up to the component that uses the hook to add and manage.

When you create a socket connection, you can listen to events that are emitted from the server, and in turn, handle them in some way in your component, by using the `on` method provided by the socket instance.

For example, in the above example code, the Chat component is using the `useEffect` hook to listen to the "message" event, and adding the messages to the component's state.

```js
import React, { useState } from  "react";

const [messages, setMessages] = useState([]);

useEffect(() => {
    if (!socket) return;
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
    //..
  }, [socket]);
```

This is an example of how we can emit an event to the server:

```js
socket.emit("join", "room1");
```

You can also use `off` method to remove the specific event listener, in the above example when the component unmount, we remove the "message" event handler by calling:

```js
socket.off("message");
```

t's important to keep in mind that if the component that uses the `useSocket` hook is unmounting or re-rendering the new instance of the component, your event handlers added by `on` method will not be removed automatically and would lead to potential memory leaks. Read [additional information](#additional-information).

### Additional Information

* You should make sure that the main component that uses the hook is only mounted and unmounted when the component is meant to be active or inactive. If the connection component re-renders frequently, the hook will create and close the socket connection each time, which may lead to poor performance and unexpected behaviors.

* The hook does not automatically handle errors that occur during the websocket connection or handle cases where the websocket connection is closed by the server.

> If you want to handle errors and events, you can add an event listener for the `"disconnect"` and `"error"` event on the socket instance using the `on` method, and handle them in your component accordingly.

The socket client API provides the following built in events :

* **"connect"**  − When the client successfully connects.
* **"connecting"**  − When the client is in the process of connecting.
* **"disconnect"**  − When the client is disconnected.
* **"connect_failed"**  − When the connection to the server fails.
* **"error"**  − An error event is sent from the server.
* **"message"**  − When the server sends a message using the  **send**  function.
* **"reconnect"**  − When reconnection to the server is successful.
* **"reconnecting"**  − When the client is in the process of connecting.
* **"reconnect_failed"**  − When the reconnection attempt fails.

You can handle errors and disconnect this way:

```js
useEffect(() => {
 if (!socket) return;
 socket.on("error", (error)=>{
 console.log(error.message);
});

socket.on("disconnect", ()=>{
 console.log("Disconnected from server");
});
  }, [socket]);
```

* The code using this hook should be wrapped inside a useEffect to avoid memory leaks.
