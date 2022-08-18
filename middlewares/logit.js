export default function logit(req, res, next) {
  // next -- Function object

  console.log(`URL: ${req.url}`);
  console.log(`When: ${new Date()}`);

  next(); // runs the next middleware in line (if any) or the main callback function
}