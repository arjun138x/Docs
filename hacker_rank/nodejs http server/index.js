const projects = require("./data-store");

const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname } = parsedUrl;

  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET" && pathname === "/projects") {
    res.statusCode = 200;
    res.end(JSON.stringify(projects));
  } else if (req.method === "POST" && pathname === "/projects") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        const projectData = JSON.parse(body);

        // Perform validation on the incoming data
        if (!projectData || !projectData.name) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "BAD REQUEST" }));
        } else if (projects.some((p) => p.id === projectData.id)) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "BAD REQUEST" }));
        } else {
          // Add the new project to the projects array
          const newProject = {
            id: projects.length + 1,
            name: projectData.name,
          };
          projects.push(newProject);

          res.writeHead(201, { "Content-Type": "application/json" });
          res.end(JSON.stringify(projects));
        }
      } catch (error) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "BAD REQUEST" }));
      }
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

const port = 8000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = server;
