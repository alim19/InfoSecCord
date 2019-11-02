InfoSecCord Server
===

The InfoSecCord Server (hosting communications) aims to be efficient and effective, with the ability to `host` many in-app servers, and serve communications to multitudes of clients simultaneously. This should be accomplished with a database of records for accounts, users, etc. The Server should have no ability to read any communications between users, except where those communications are un-encrypted. No private keys, except the Servers' own should be stored on the Server.  
The Server will use HTTP(S) based REST API, allowing communications from native and Web-based applications. This will allow the application to be portable.
