import { Context } from "@netlify/functions";
import axios from "axios";

const RSS_TO_JSON_API = "https://api.rss2json.com/v1/api.json";
const FEED_ITEM_COUNT_API = 3;

enum NetlifyEnvVars {
  SubstackFeedEndpoint = "SUBSTACK_FEED_ENDPOINT",
  Rss2JsonApiKey = "RSS2JSON_API_KEY",
}

export default async (_req: Request, _context: Context) => {
  try {
    const { data } = await axios.get(RSS_TO_JSON_API, {
      headers: {
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        Expires: "0",
      },
      params: {
        rss_url: Netlify.env.get(NetlifyEnvVars.SubstackFeedEndpoint) || "",
        count: FEED_ITEM_COUNT_API,
        order_by: "pubDate",
        api_key: Netlify.env.get(NetlifyEnvVars.Rss2JsonApiKey) || "",
      },
    });

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: error.response.status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
};
