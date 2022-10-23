# EighthChallenge

Project created for the eighth week of Applaudo Studio's Trainee Program.
Consists of a SPA, with the following pages:

    Login and register, which allow for the creation of a user, and its sign in. These pages cant be accessed if the user has already logged in, and has a JWT stores.
    Homepage, which displays a simple portrayal of currently available products, provided by this week's API. The page can be accessed only if the user has a JWT, and will be redirected to login on any unauthorized request, and when the user's token expires.
    Also, it has refresh functionality made through interceptors, and the token is also inserted in the headers through and interceptor.
    
This proyect has 2 simple layouts, one for the login and register pages, and another for the homepage. On the homepage's navbar there is a user profile image, which, on click, shows the user's info and logout button.