<!-- For Parallel Tests -->

Introduce a --parallel flag like this `mocha --no-timeouts --parallel`
While for running mochawesome
`mocha --no-timeouts --reporter mochawesome ` - For running tests in serial manner
`mocha --no-timeouts --parallel --reporter mochawesome --require mochawesome/register`
Mochawesome helps us generate reports for the test results of the project
Now for changing the report file location details and name of the file
`--reporter-options reportDir=customReportDir,reportFilename=customReportFilename`
