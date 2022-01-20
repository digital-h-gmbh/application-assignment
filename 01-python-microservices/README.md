
# Python microservices

In this task you will have to create a python micro-services application. You can choose any python framework/library you want. 
The whole application should contain 3 microservices. 1 edge-service and 2 backend-services.

The edge service should have an endpoint to create Cars and an endpoint to get a Car by ID.
A Car should have the following properties:
* ID
* build_year
* manufacturer 
* model
* color
* rating
* image

One backend-service should handle storing of car data and the other backend-service should handle all media upload/serving functionality.
The Edge Service should communicate with both backend-service in parallel, not sequentially.

Data can be stored in RAM, no need to store it to disk.
The endpoints should be json and REST-like.





                                                         ┌───────────────────────┐
                                                         │ backend media-service │
                                                         │                       │
                                                         │                       │
                                                         │                       │
                    ┌───────────────────────┐upload image│                       │
                    │                       ├──────────► │                       │
                    │                       │serve image │                       │
     create car     │                       ├──────────► └───────────────────────┘
    ───────────────►│                       │
                    │                       │
                    │                       │            ┌───────────────────────┐
                    │                       │save car    │ backend car-service   │
     get car        │                       ├──────────► │                       │
    ───────────────►│                       │            │                       │
                    │                       │get car     │                       │
                    └───────────────────────┴──────────► │                       │
                                                         │                       │
                                                         │                       │
                                                         │                       │
                                                         └───────────────────────┘
