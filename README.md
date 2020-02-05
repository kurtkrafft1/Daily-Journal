Hello friend, and welcome to my daily journal project I did at NSS!
 &nbsp;
To get this program up and running there are a few hoops you need to jump through
don't worry, they aren't too tough.
 &nbsp;
This is a database focused project, mostly to show the students (me included) how to use CRUD effectively. At this point (2/5/20) we have gotten up to deleting posts, but not editing. Me, being a go-getter, already started editing functionality. Enjoy
 &nbsp;
STEP ONE 
install JSON, if you already have JSON installed on your computer skip this step 
1. open your terminal and enter this code `npm install -g json-server`
 &nbsp;
STEP TWO
1. clone down my github
2. open your terminal and create the folder where you would like to store this journal
3. in this folder type this code `git clone git@github.com:kurtkrafft1/Daily-Journal.git`
 &nbsp;
STEP THREE
1. hit control(cmd)+ T in your terminal and step into the api folder.
2. once in this folder enter in the following code `json-server -p 3000 -w database.json`
3. this is setting up a server for the database. 
4. DO NOT CLOSE THIS TERMINAL
 &nbsp;
STEP FOUR
1. in the root directory (daily-journal) in your terminal enter this command in `hs -o` 
2. enjoy my and now your journal!
 &nbsp;

