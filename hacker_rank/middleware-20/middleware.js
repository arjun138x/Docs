const ROLES_FILE = __dirname + "/roles.txt";
const fs = require("fs");

module.exports = (scope) => (req, res, next) => {
  const role = req.headers["x-role"];
  if (!role) return res.status(403).json();

  let data;
  try {
    data = fs.readFileSync(ROLES_FILE, "utf8");
    data = JSON.parse(data); // Assuming the data in the file is JSON.
  } catch (e) {
    return res.status(403).json();
  }

  const [lScope, action] = scope.split(".");
  let valid = false;

  data.forEach(({ role, scopes }) => {
    const { tasks } = scopes;
    if (tasks.includes(action)) valid = true;
  });

  if (valid) next();
  else return res.status(403).json();
};
