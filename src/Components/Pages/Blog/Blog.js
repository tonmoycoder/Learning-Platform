import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className=" blog_style inter">
      <div className="p-8">
        <div>
          <h4 className="font-bold text-2xl">
            1. what is <span className="font-extrabold roboto text-3xl text-orange-600">cors?</span>
            ?
          </h4>
          <br />
          <p className="px-8">
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a
            server to indicate any origins (domain, scheme, or port) other than its own from which a
            browser should permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the cross-origin resource, in
            order to check that the server will permit the actual request. In that preflight, the
            browser sends headers that indicate the HTTP method and headers that will be used in the
            actual request. <br /> <br />
            For security reasons, browsers restrict cross-origin HTTP requests initiated from
            scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy.
            This means that a web application using those APIs can only request resources from the
            same origin the application was loaded from unless the response from other origins
            includes the right CORS headers.
          </p>
        </div>
        <br />
        <br />
        <div>
          <h4 className="font-bold text-2xl">
            2. Why are you using{' '}
            <span className="font-extrabold roboto text-3xl text-orange-600">firebase?</span> What
            other options do you have to implement{' '}
            <span className="font-extrabold roboto text-3xl text-orange-600">authentication?</span>
          </h4>
          <br />
          <p className="px-8">
            The Firebase Realtime Database lets you build rich, collaborative applications by
            allowing secure access to the database directly from client-side code. Data is persisted
            locally, and even while offline, realtime events continue to fire, giving the end user a
            responsive experience. When the device regains connection, the Realtime Database
            synchronizes the local data changes with the remote updates that occurred while the
            client was offline, merging any conflicts automatically. <br /> <br />
            Competitors and Alternatives to Firebase Realtime Database
            <br /> <br />
            1.MongoDB.
            <br />
            2.Oracle Database.
            <br />
            3.Amazon Redshift.
            <br />
            4.DataStax Enterprise.
            <br />
            5.Redis Enterprise Cloud.
            <br />
            6.Cloudera Enterprise Data Hub.
            <br />
            7.Db2.
            <br />
            8.Couchbase Server. <br />
          </p>
        </div>
        <br />
        <br />
        <div>
          <h4 className="font-bold text-2xl">
            3. How does the {''}
            <span className="font-extrabold roboto text-3xl text-orange-600">
              private route
            </span>{' '}
            work?
          </h4>
          <br />
          <p className="px-8">
            The private route component is similar to the public route, the only change is that
            redirect URL and authenticate condition.
            <br />
            <br />
            If the user is not authenticated he will be redirected to the login page and the user
            can only access the authenticated routes If he is authenticated (Logged in).
            <br />
            <br />
            Public and Private routes will also restrict accessing the previously visited routes using the browser back button after logout. I hope you have found this useful. Thank you for reading.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-2xl">
            2. What is  {' '}
            <span className="font-extrabold roboto text-3xl text-orange-600">Node?</span>  How does  {' '}
            <span className="font-extrabold roboto text-3xl text-orange-600">Node </span>work?
          </h4>
          <br />
          <p className="px-8">
          Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. <br /> <br />
          Consider a scenario where we request a backend database for the details of user1 and user2 and then print them on the screen/console. The response to this request takes time, but both of the user data requests can be carried out independently and at the same time. When 100 people connect at once, rather than having different threads, Node will loop over those connections and fire off any events your code should know about. If a connection is new it will tell you .If a connection has sent you data, it will tell you .If the connection isn’t doing anything ,it will skip over it rather than taking up precision CPU time on it. Everything in Node is based on responding to these events. So we can see the result, the CPU stay focused on that one process and doesn’t have a bunch of threads for attention.There is no buffering in Node.JS application it simply output the data in chunks.
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
