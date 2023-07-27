# Creating a Custom Response Headers Policy for AWS CloudFront Distribution

In this blog post, we will dive into the process of creating a custom response headers policy for an AWS CloudFront distribution. The provided code demonstrates how to configure the custom policy using the AWS Cloud Development Kit (CDK). Let's break down each line of code and explain its significance. Additionally, we will replace the example domain "learn.blitzbudget.com" with "example.com" for a more generic representation.

## Introduction

AWS CloudFront is a content delivery network that helps distribute web content globally with low latency and high data transfer speeds. With the ability to set custom response headers policies, we can enhance security, enforce CORS, and customize various HTTP-related configurations.

## Code Explanation

First, let's understand the context of the code. The code snippet provided is written in TypeScript using AWS CDK. It creates a custom response headers policy and attaches it to a CloudFront distribution.

```typescript
// Creating a custom response headers policy -- all parameters optional
const myResponseHeadersPolicy = new cloudfront.ResponseHeadersPolicy(this, 'ResponseHeadersPolicy', {
    responseHeadersPolicyName: 'ResponseHeadersPolicy',
    comment: 'MyResponseHeadersPolicy',
    corsBehavior: {
        accessControlAllowCredentials: false,
        accessControlAllowHeaders: ['*'],
        accessControlAllowMethods: ['GET', 'POST', 'OPTIONS'],
        accessControlAllowOrigins: ['https://example.com'],
        accessControlExposeHeaders: ['*'],
        accessControlMaxAge: Duration.seconds(600),
        originOverride: true,
    },
    customHeadersBehavior: {
        customHeaders: [
            { header: 'X-Amz-Date', value: 'some-value', override: true },
            { header: 'X-Amz-Security-Token', value: 'some-value', override: false },
        ],
    },
    securityHeadersBehavior: {
        contentSecurityPolicy: { contentSecurityPolicy: cspPolicy, override: true },
        contentTypeOptions: { override: true },
        frameOptions: { frameOption: cloudfront.HeadersFrameOption.DENY, override: true },
        referrerPolicy: { referrerPolicy: cloudfront.HeadersReferrerPolicy.NO_REFERRER, override: true },
        strictTransportSecurity: { accessControlMaxAge: Duration.seconds(600), includeSubdomains: true, override: true },
        xssProtection: { protection: true, modeBlock: true, override: true },
    },
    removeHeaders: ['Server'],
    serverTimingSamplingRate: 50,
});
```

### Line 1:

We start by creating a custom response headers policy using the `cloudfront.ResponseHeadersPolicy` class provided by AWS CDK. This policy will contain various configurations to control the response headers sent by CloudFront to the clients.

### Line 2:

The second line initializes the `myResponseHeadersPolicy` variable, which will hold the instance of our custom policy.

### Line 3 - 25:

Within the configuration object passed to `ResponseHeadersPolicy`, we set various parameters for the policy. Let's explain each parameter:

#### - `responseHeadersPolicyName` (Line 4):

This parameter is used to specify the name of the response headers policy. In this example, we concatenate `props.domainName` with 'ResponseHeadersPolicy' to form the policy name.

#### - `comment` (Line 5):

The `comment` field provides an optional description or comment to help identify the purpose of the response headers policy. Here, we use `props.domainName` concatenated with 'ResponseHeadersPolicy' as the comment.

#### - `corsBehavior` (Line 7 - 14):

This section deals with Cross-Origin Resource Sharing (CORS) settings. CORS allows web pages from one domain to access resources from another domain. We configure CORS behavior with the following sub-parameters:

- `accessControlAllowCredentials`: A boolean that indicates whether to include credentials in the CORS request. Here, it is set to `false`.

- `accessControlAllowHeaders`: An array of allowed headers. In this case, it is empty, meaning no specific headers are allowed.

- `accessControlAllowMethods`: An array of allowed HTTP methods for CORS requests, including 'GET', 'POST', and 'OPTIONS'.

- `accessControlAllowOrigins`: An array of allowed origin domains for CORS requests. We set it to `['https://example.com']`.

- `accessControlExposeHeaders`: An array of headers exposed in the response to the browser. Here, we use `['*']` to allow all headers to be exposed.

- `accessControlMaxAge`: The maximum time (in seconds) the results of a preflight request can be cached. We set it to 600 seconds (10 minutes).

- `originOverride`: A boolean flag indicating whether the policy should override the origin's CORS headers. It is set to `true`.

#### - `customHeadersBehavior` (Line 16 - 22):

This section allows us to define custom headers that we want to include in the response. The `customHeaders` field is an array of objects, each representing a custom header. In this example, we define two custom headers:

- `{ header: 'X-Amz-Date', value: 'some-value', override: true }`: This sets the 'X-Amz-Date' header with the value 'some-value', and the `override` flag is set to `true`, meaning it will override existing headers with the same name.

- `{ header: 'X-Amz-Security-Token', value: 'some-value', override: false }`: This sets the 'X-Amz-Security-Token' header with the value 'some-value', and the `override` flag is set to `false`, meaning it will not override existing headers with the same name if they exist.

#### - `securityHeadersBehavior` (Line 24 - 32):

This section is used to define various security-related headers that enhance the security of the web application. We configure the following headers:

- `contentSecurityPolicy`: Sets the Content Security Policy (CSP) for mitigating cross-site scripting (XSS) attacks. The `cspPolicy` variable should be replaced with the actual CSP policy.

- `contentTypeOptions`: This header prevents browsers from interpreting files as something else than declared by the Content-Type header. The `override` flag is set to `true`.

- `frameOptions`: Sets the X-Frame-Options header to DENY, which prevents the web page from being displayed in iframes on other websites. The `override` flag is set to `true`.

- `referrerPolicy`: Sets the Referrer-Policy header to NO_REFERRER, meaning that the Referer header is not sent in requests. The `override` flag is set to `true`.

- `strictTransportSecurity`: Sets the HTTP Strict Transport Security (HSTS) header to enforce HTTPS connections. The `accessControlMaxAge` is set to 600 seconds, and `includeSubdomains` is set to `true`. The `override` flag is set to `true`.

- `xssProtection`: Sets the X-XSS-Protection header with protection enabled in block mode. The `override` flag is set to `true`.

#### - `removeHeaders` (Line 34):

The `removeHeaders` field is an array of headers that should be removed from the response. In this case, the 'Server' header will

 be removed.

#### - `serverTimingSamplingRate` (Line 35):

The `serverTimingSamplingRate` specifies the sampling rate of the Server-Timing header. It indicates how often the header should be included in the response. Here, it is set to 50, meaning it will be included in approximately 50% of the responses.

### Line 37:

After defining the custom response headers policy, we move on to create the CloudFront distribution that will use this policy.

```typescript
// Create CloudFront Distribution
const distribution = new cloudfront.Distribution(this, props.domainName + 'CDN', {
    defaultBehavior: {
        origin: new cloudfront_origins.S3Origin(bucket, { originAccessIdentity: cloudfrontOAI }),
        compress: true,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        edgeLambdas: [
            {
                functionVersion: originRequestFunctionVersion,
                eventType: cloudfront.LambdaEdgeEventType.ORIGIN_REQUEST,
            }
        ],
        responseHeadersPolicy: myResponseHeadersPolicy,
    },
    errorResponses: [
        {
            httpStatus: 404,
            responseHttpStatus: 404,
            responsePagePath: `/${errorPage}`,
        },
        {
            httpStatus: 403,
            responseHttpStatus: 403,
            responsePagePath: `/${errorPage}`,
        },
    ],
    httpVersion: cloudfront.HttpVersion.HTTP2_AND_3, // Support HTTP2 and 3
    comment: `[${props.environment}] ${props.domainName} Static Resources`,
    minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
    defaultRootObject: homePage,
    certificate: myCertificate,
    domainNames: [domainName],
});
```

### Line 39 - 62:

In this section, we create the CloudFront distribution and configure its settings. Let's break down each parameter:

#### - `defaultBehavior` (Line 41 - 50):

The `defaultBehavior` section defines the default behavior of the CloudFront distribution when handling requests. We set the following configurations:

- `origin`: Specifies the origin for the CloudFront distribution. In this example, it is an S3 bucket with an associated CloudFront Origin Access Identity (OAI).

- `compress`: Enables response compression to optimize content delivery.

- `cachePolicy`: Sets the cache policy to CACHING_OPTIMIZED, which enables optimized caching of responses.

- `allowedMethods`: Defines the allowed HTTP methods for requests. Here, we allow 'GET', 'HEAD', and 'OPTIONS' requests.

- `viewerProtocolPolicy`: Specifies the viewer protocol policy, which determines how CloudFront responds to HTTP and HTTPS requests. In this case, we set it to REDIRECT_TO_HTTPS.

- `edgeLambdas`: Allows you to associate Lambda functions with different CloudFront events. In this example, we associate a Lambda function with the ORIGIN_REQUEST event.

- `responseHeadersPolicy`: Attaches the previously defined `myResponseHeadersPolicy` to this default behavior.

#### - `errorResponses` (Line 52 - 61):

The `errorResponses` field defines how CloudFront handles error responses (e.g., 404 or 403 errors). We set up two error responses for 404 and 403 errors, specifying the appropriate HTTP status codes and response page paths.

#### - `httpVersion` (Line 63):

This field sets the supported HTTP versions for the CloudFront distribution. In this case, we support HTTP/2 and HTTP/3.

#### - `comment` (Line 65):

The `comment` field provides an optional description or comment for the CloudFront distribution. Here, we use `props.domainName` along with environment information as the comment.

#### - `minimumProtocolVersion` (Line 66):

This parameter sets the minimum TLS version for the CloudFront distribution. In this example, we set it to TLS v1.2 (TLS_V1_2_2021).

#### - `defaultRootObject` (Line 67):

Specifies the default root object for the CloudFront distribution. In this case, it is set to `homePage`.

#### - `certificate` (Line 68):

This field is used to specify the SSL certificate for the CloudFront distribution. Replace `myCertificate` with your SSL certificate.

#### - `domainNames` (Line 69):

The `domainNames` field specifies the domain names associated with the CloudFront distribution. In this example, we set it to `[domainName]`.

## Conclusion

In this blog post, we explored how to create a custom response headers policy for an AWS CloudFront distribution using AWS CDK. The custom policy enables developers to enhance security, enforce CORS rules, and set various HTTP-related configurations for CloudFront responses. By leveraging the provided code and explanations, developers can now create their custom response headers policy tailored to their specific application requirements. With AWS CloudFront and a well-configured custom response headers policy, web applications can achieve enhanced security, better performance, and improved end-user experience.

Remember to replace the example domain "example.com" with your actual domain when implementing the custom response headers policy in your AWS CloudFront distribution. Happy cloud computing!