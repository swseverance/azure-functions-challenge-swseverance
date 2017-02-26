#r "Newtonsoft.Json"

using System;
using System.Net;
using Newtonsoft.Json;

public static async Task<object> Run(HttpRequestMessage req, TraceWriter log)
{
    log.Info($"Webhook was triggered!");

    return req.CreateResponse(HttpStatusCode.OK, new {
        SubscriptionId = Environment.GetEnvironmentVariable("ChallengeKey")
    });
}
