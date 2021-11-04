# React Single Page Application Client

In the project directory, you can run:

### 'Live Version'

https://crypto-exchange-spa-react.herokuapp.com/

It is connected to a node-js/express backend that fetches the market data from Binance and Kucoin external API's.

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Questionnaire

### Are there any sub-optimal choices( or short cuts taken due to limited time ) in your implementation?

Generally speaking, I would have focused more on a clear design pattern of the front-end. I would have spent more time thinking about component separation. This would make it easier for me to advance the project over time. Unfortunately any major enhancements to the project would require refactoring a majority of the code.

In addition, I am not sure conditional rendering is handled in the best way for performance. Conditional rendering was implemented using immediately invoked function expressions (IIFEs). I chose this because it was easier to implement. Given more time, I would research if there is a better way to implement this from a performance standpoint.

### Is any part of it over-designed? ( It is fine to over-design to showcase your skills as long as you are clear about it)

This implementation is a fairly simple solution to meet the requirements. I don't believe it is over-designed; however, the entire project probably could have been implemented in one directory.

For the purpose of displaying external data, a thick-client could have maintained state and directly interacted with external API's. Technically, there was no need for a back-end API in between client and external API's.

### If you have to scale your solution to 100 users/second traffic what changes would you make, if any?

For this project, I would look into a cloud-based solution to provide essentially two scalability enhancements. Implementing redundancy by duplicating the node-js/express server to a number of instances that can handle the traffic. In addition, implementing a load-balancer to sit infront of the servers. The cloud services provider should have an autoscaling ability that will automatically increase the number of server instances based on traffic levels.

### What are some other enhancements you would have made, if you had more time to do this implementation

There are two major enhancements that I would make.

1. I would look into another form of communication between the components. Two technologies that come to mind are Web Sockets or Server-Sent Events implementations. I would want to establish a persistent connection between the components and allow for continues updates of the coin price in real-time.

2. I would look into connecting users to their accounts on the exchanges and giving them ability to quickly buy or sell at that price in that exact moment.
