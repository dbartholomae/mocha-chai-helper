var chai = require("chai");
global.expect = chai.expect;
chai.use(require("chai-things"));
chai.use(require("chai-as-promised"));
global.sinon = require("sinon");
chai.use(require("sinon-chai"));
