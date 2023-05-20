import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="2xl:mx-auto 2xl:container xl:px-20 lg:px-10 px-6 py-20">
        <div className="lg:flex justify-center">
          <div className="2xl:w-7/12 lg:w-8/12 md:w-10/12">
            <img
              src="https://i.ibb.co/jDnZgHN/oauth-refresh-token-diagram.png"
              alt="fingerprint recognition"
              className="lg:w-full w-auto"
            />
            <div className="mt-4">
              <h1 className="lg:text-3xl text-2xl font-semibold mt-4 text-gray-800">1. What is an access token and refresh token? How do they work and  where should we store them on the client-side?
              </h1>
              <p className="text-base leading-6 text-gray-600 mt-2">
                An access token is a credential that is used to access protected
                resources, such as user data or files. It is typically
                short-lived and expires after a certain period of time. A
                refresh token is a credential that can be used to obtain a new
                access token without requiring the user to re-authenticate. It
                is typically longer-lived than an access token.
              </p>
              <p className="text-base leading-6 text-gray-600 mt-2">
                A refresh token is a credential that is used to obtain a new
                access token in an authentication system. It is commonly used in
                applications that implement the OAuth 2.0 framework for user
                authentication and authorization
              </p>
              <ul className="list-disc text-base leading-6 text-gray-600 mt-2">
                <li>
                  Access tokens and refresh tokens are credentials used to
                  access protected resources.
                </li>
                <li>
                  Access tokens are short-lived and expire after a certain
                  period of time.
                </li>
                <li>
                  Refresh tokens are longer-lived and can be used to obtain a
                  new access token without requiring the user to
                  re-authenticate.
                </li>
                <li>Access tokens and refresh tokens should be stored securely on the client-side.</li>
                <li>They should not be stored in a way that is accessible to users or other applications.</li>
              </ul>
              <p className="text-base leading-6 text-gray-600 mt-2">
              Refresh tokens, being long-lived and more sensitive, should be securely stored, such as in an encrypted cookie, localStorage storage, or an HTTP-only cookie with strict security measures.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex my-10 justify-center">
          <div className="2xl:w-7/12 lg:w-8/12 md:w-10/12">
            <img
              src="https://i.ibb.co/jDnZgHN/oauth-refresh-token-diagram.png"
              alt="fingerprint recognition"
              className="lg:w-full w-auto"
            />
            <div className="mt-4">
              <h1 className="lg:text-3xl text-2xl font-semibold mt-4 text-gray-800">1. What is an access token and refresh token? How do they work and  where should we store them on the client-side?
              </h1>
              <p className="text-base leading-6 text-gray-600 mt-2">
                An access token is a credential that is used to access protected
                resources, such as user data or files. It is typically
                short-lived and expires after a certain period of time. A
                refresh token is a credential that can be used to obtain a new
                access token without requiring the user to re-authenticate. It
                is typically longer-lived than an access token.
              </p>
              <p className="text-base leading-6 text-gray-600 mt-2">
                A refresh token is a credential that is used to obtain a new
                access token in an authentication system. It is commonly used in
                applications that implement the OAuth 2.0 framework for user
                authentication and authorization
              </p>
              <ul className="list-disc text-base leading-6 text-gray-600 mt-2">
                <li>
                  Access tokens and refresh tokens are credentials used to
                  access protected resources.
                </li>
                <li>
                  Access tokens are short-lived and expire after a certain
                  period of time.
                </li>
                <li>
                  Refresh tokens are longer-lived and can be used to obtain a
                  new access token without requiring the user to
                  re-authenticate.
                </li>
                <li>Access tokens and refresh tokens should be stored securely on the client-side.</li>
                <li>They should not be stored in a way that is accessible to users or other applications.</li>
              </ul>
              <p className="text-base leading-6 text-gray-600 mt-2">
              Refresh tokens, being long-lived and more sensitive, should be securely stored, such as in an encrypted cookie, localStorage storage, or an HTTP-only cookie with strict security measures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
