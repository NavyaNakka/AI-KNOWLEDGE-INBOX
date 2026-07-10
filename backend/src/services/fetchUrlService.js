const axios = require("axios");
const cheerio = require("cheerio");

const fetchUrlContent = async (url) => {
  try {
    const response = await axios.get(url, {
      timeout: 10000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/138 Safari/537.36",
      },
    });

    const $ = cheerio.load(response.data);

    $("script").remove();
    $("style").remove();
    $("noscript").remove();
    $("svg").remove();
    $("img").remove();

    const text = $("body").text();

    const cleanedText = text.replace(/\s+/g, " ").trim();

    if (!cleanedText) {
      throw new Error("No readable content found on this webpage.");
    }

    return cleanedText;
  } catch (error) {
    if (error.code === "ENOTFOUND") {
      throw new Error("Website not found. Please check the URL.");
    }

    if (error.code === "ECONNABORTED") {
      throw new Error("Website took too long to respond.");
    }

    if (error.response?.status === 403) {
      throw new Error("This website blocks content extraction.");
    }

    if (error.response?.status === 404) {
      throw new Error("Page not found.");
    }

    throw new Error("Failed to fetch website content.");
  }
};

module.exports = fetchUrlContent;