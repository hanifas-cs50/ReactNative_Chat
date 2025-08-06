# React Native Chat App

## Plans to finish:
- ~~I haven't made the database yet~~
- ~~I don't know how to connect the app to the database yet~~
- ~~I don't have a register function yet~~
- ~~I still don't know how to make the login function YET~~
- ~~Auth guard~~
- ~~Send message~~
- ~~View user profile~~
- UX is not done

## Future plans (if I have time):
- If I were to make any of my future plans, my first step is to change the tabs navigation to a shelf (sidebar) navigation
- User settings page (maybe I could do this one for current plan, but I'm not promising anything)
- Private one on one convos
  - If private one on one convos is done, then I'll delete the global chat
  - I don't know the most optimal way to store private convos yet, database structure wise
- Send pictures, voice messages / mails, after these then I'll do the group chats
- Group chats, I know for sure this one is going to be way harder than the private convos

## Note:

#### Part 1
I don't know when I'm going to finish the future plans, since I'd rather make another "small" project rather than finishing one big one, it'll look better on my resume, IF I get employed (hopefully soon!) that's most likely when I'll make more passion projects

#### Part 2
Apparently pocketbase's websocket does not work on react native, unless I make my own backend code this app won't be realtime, the fix for now is to fetch every 3 seconds, I am going to make the backend of this chat app, just not right now, after my next project then I'll make the backend, I always wanted to try go lang, my choice is either go lang or a Ktor / any kotlin based framework as the backend

#### .env file
EXPO_PUBLIC_POCKETBASE_URL=[your pocketbase server URL]

## Tables
User Table
id
handlename
username
password

Message Table
id
user_id
text
timestamp
