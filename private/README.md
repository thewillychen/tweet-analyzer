To compile this code, first you need to install MeteorJS. 

For OS X or Linus, execute the following code in your terminal:
curl https://www.meteor.com/install | sh

Further instructions for installationg can be found here:
https://www.meteor.com/install

For further informaion about Meteor please see the docs:
http://docs.meteor.com/#/full/

Once you have Meteor installed, cd into the folder and execute the following code:
> meteor

This will launch the site locally on localhost:3000

If you want to inspect the database, execute the following line in terminal:
> meteor mongo

You will need a Twitter access key to run this program. Once you click on the "Sign in with Twitter" button on the top right of the site, simply follow the instructions to get this set up. 

Now that you have your key and secret from twitter, run the server by creating a twitter.json file.

This should be the structure of twitter.json. Place this file in the Private/ folder. This will never be committed and is your personal key.
>{
>    "consumer": {
>        "key": "YOURKEY",
>        "secret": "YOURSECRET"
>    }
>}
