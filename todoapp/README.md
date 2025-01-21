### Components in the TODO App 

1. App Component (parent)
    a. Header component ( to have header for the application)
    b. Todo Component (contains the form and the TodoList component. Form Component is to take the input from the user and TodoList Component displays the text that the user has input in the form. )
        i. Form Component (state is required for capturing single todo item and todolist - all the items )
        ii. TodoList Component (State is required for all the todolist - all the todo items)
            - TodoItem Component
        Since todolist component is common between Form & TodoList components passing it as state in Todo (parent component)


### How to run the app

- cd to the todoapp
    cd todoapp 
- run the below command 
    npm run dev 
##### note - make sure you have react installed and vite too. 