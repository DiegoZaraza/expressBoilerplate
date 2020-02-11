# expressBoilerplate

Express boilerplate

## Case
Movie shop that sells products in different categories. In your inventory you will find different movies with their classification.

Video shop api has the following endpoints to interact with its inventory management system:

- Inventory: It has the inventory code that can be assigned to the films with all its operations GET, PUT, POST, DELETE.
- Classification: It has the classification codes of the films with its operations GET, PUT, POST, DELETE.
- Product: It has the different movies that the company manages with its operations GET, PUT, POST, DELETE.

* Invoke the example REST endpoint `curl http://localhost:3000/api/v1/inventory`
* Invoke the example REST endpoint `curl http://localhost:3000/api/v1/classification`
* Invoke the example REST endpoint `curl http://localhost:3000/api/v1/product`

### Think about how you validate information in and out. What makes a nice experience for your users?
I think the best idea to make the experience enjoyable is the ease of use that the data is clear to people when they navigate within the application and express each term so that people can understand what they are told and do at each step. the application.

### Keep the resource simple.
You must have good coding practices to keep the code as simple as possible for this you can use frameworks that give us a guideline on how to follow the coding and code clean.

### What role should testing play?

In my experience in tests it is one of the most important stages for the development of the project, since we can guarantee the quality of the API that is being developed, in this case a test plan would be established where not only a tester is involved to test but to the whole team and thus give added value with the tests. First, it would establish an approach where unit tests play an important role in development, since this way we guarantee that the API goes out with fewer errors to its functional testing stage, guaranteeing the integrity of each contained field.

From the Back point of view we can test all the flows and integration of the API with different microservices, services or others validating that you are sending and receiving each microservice, the data you are sending, the structure that sends whether it is json or not, so We guarantee the exit of each request.

By integrating the entire team at this stage we can take the API to a better level because each person from their role can give us a different concept and a perception that helps to improve and give greater reliability in the API.

This is the test plan.

[Test Plan](https://raw.githubusercontent.com/diegozaraza/expressBoilerplate/master/documents/TestPlanMoviesShop.pdf)

### What else are you passionate about in an API?
The ease it has since being back can be connected to different types of interfaces where it will be much easier to control the data.


## Install It
```
npm install
```

## Run It
#### Run in *development* mode:

```
npm run dev
```

#### Run in *production* mode:

```
npm compile
npm start
```

#### Deploy to the Cloud
e.g. CloudFoundry

```
cf push expressBoilerplate
```

### Try It
* Point you're browser to [http://localhost:3000](http://localhost:3000)
* Invoke the example REST endpoint `curl http://localhost:3000/api/v1/examples`
   
