system design foundations

- starting phase to execution phase we call it as system design
- our system should be scalable (horizontal is recommended). system should handle millions of users
- systems should alway reliable. system should auto recover when system fails
- code should be more cleaner and easy to implement the features. bugs should be easy fixable
- response time should be lesser
- system design should be in two parts
- high level design
- low level design

distributed systems

- connecting multiple servers and maintain servers in different regions
- disadvantage is CAP theorem. we should comprise one in CAP
- consistency : showing latest and same data to the all customer (eg: Amazon big billioin sale)
- availability : if user count is increase our system should not crash, it should still respond
- partition tolerance: if amazon server went down in US but still application should run using india servers.
- as per CAP theorem we should use any two not the three. based on situation we should comprise one
- when to chose what
  - amazon e-commeres
    - we can comprise with partition tolerance. wont be the problem if some feature not working. but consistency and availability is important
  - whatsapp
    - we can comprise with consistency. wont be the problem if message has some delay but app shouldnt crash. but artition tolerance and availability is important
  - banking
    - we can comprise with availability. wont be the problem if sever went down for some time. but consistency and partition tolerance is important

single point of failure

- because of any one component our application is crashing.
- we need to design our system with fault tolerance nothing like maintain a backup

rate limiting

- to make availabiity for everyone

API

- we use API to communicating with different systems

API communication models

- synchronous models
  - waiting for response like going out and getting the food
  - eg: restapi,RCP, graphQl
- asynchronous models
  - never wait for response like ordering food in Zomato. after placing the order we can do our work
  - eg: webSockets, messageQues
    webhook
  - webhook not like a web socket. usavlly web socket will communicate every thing but webhook informs only importent event to the client.
  - webhook are cheaper and lighter
    eg: gitHub
    - github only send message to the applications after user pushed the code, remaining time these are silent

continue form - 22Min
