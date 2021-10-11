const doOnIncoming = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url == "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("You are now on the home page\n");
    console.log(url);
    return res.end();
  } else if (url == "/profile") {
    res.setHeader("Content-Type", "text/html");
    console.log(url);
    res.write("You are now accessing profile page\n");
    return res.end();
  } else if (url == "/settings" && method == "POST") {
    res.setHeader("Content-Type", "text/html");
    console.log(url);
    res.write(
      "<h1>Settings</h1> <div><h3>Thank you! The form was submitted</h3></div>"
    );
    return res.end();
  } else if (url == "/settings") {
    res.setHeader("Content-Type", "text/html");
    console.log(url);
    res.write(
      '<h1>Settings</h1> <form action="/settings" method="POST"><label for="name">Enter your name <div><input type="text" id="name"></div></label><div><button type="submit">Submit Form</button></div></form>'
    );
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.statusCode = 404;
  res.write("404 Page Not Found!\n");
  res.end();
};

module.exports = doOnIncoming;
